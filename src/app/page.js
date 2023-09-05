'use client';
import React, { useState, useMemo } from 'react';
// import { clusterApiUrl } from '@solana/web3.js';
import { Helius } from 'helius-sdk';
import Bottleneck from 'bottleneck';

export default function Home() {
  const [assetInfoList] = useState([]); // Use state for assetInfoList
  const ownerAddress = "9cpGSYpRthttGo3QvidzWbd3nseHP3fGSURQvqsih7dw";
  const HeliusKey = new Helius("cfa7ca19-e84e-44f9-b4e0-8ea6eb251e1b");
  const limiter = new Bottleneck({maxConcurrent: 1, minTime: 1000});

  async function getTPS() {
    const tps = await HeliusKey.rpc.getCurrentTPS();
    console.log("Solana TPS:", tps);
  }

  async function searchAssets() {
    const response = await HeliusKey.rpc.searchAssets({ ownerAddress: ownerAddress, compressed: true, page: 1 });
    const ids = response.items.map(item => item.id);
    const promises = ids.map(id => limiter.schedule(() => getAssetInfoWithRetry(id)));
    const assetInfos = await Promise.all(promises);
    assetInfoList.push(...assetInfos.filter(info => info && info.state));
    console.log(assetInfoList);
  }

  async function getAssetInfoWithRetry(id, maxRetries = 3) {
    let retries = 0;
    while (retries < maxRetries) {
      try {
        const info = await getAssetInfo(id);
        if (info.state) {
          return info;
        }
      } catch (error) {
        if (error.response && error.response.status === 429) {
          const delay = Math.pow(2, retries) * 1000; // Exponential backoff in milliseconds
          await new Promise(resolve => setTimeout(resolve, delay));
          retries++;
        } else {
          console.error("Error in getAsset:", error);
          break;
        }
      }
    }
    console.error(`Max retries (${maxRetries}) reached for getAssetInfo.`);
    return null;
  }

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async function getAssetInfo(id) {
    const response = await HeliusKey.rpc.getAsset(id);
    const name = String(response.content.metadata.name);
    const state = response.compression.compressed;
    const image = response.content.links.image;
    const assetId = response.id;
    await sleep(10);
    return { name, assetId, state, image };
  }

  return (
    <main>
      <link rel="stylesheet" href="https://unpkg.com/terminal.css@0.7.2/dist/terminal.min.css" />
      <title>Basket</title>
      <section className="terminal-output">
        <p>Welcome to the cNFT Basket</p>
        <div className="output-area"></div>
      </section>
      <section className="terminal-input-section">
        <button className="btn btn-default" onClick={() => getTPS()}>Get TPS</button>
        <button className="btn btn-default" onClick={() => searchAssets()}>Search Assets</button>
      </section>
      <div className="article-grid">
        {assetInfoList.map((assetInfoList, index) => (
          <article key={index}>
            <div className="equlibrium-image-container">
              <img className="view-icon-hover" src="icon-view.svg" alt="View Icon" />
              <img className="equilibrium-image" src={assetInfoList.image} alt={assetInfoList.name} width="604"/>
              <div className="profile-nick-div">
                <h2><span className="hover-cyan">{assetInfoList.name}</span></h2>
              </div>
            </div>
          </article>
        ))}
      </div>
      <br></br>
      <div className="terminal-output">Basket</div>
      <br></br>
    </main>
  )
}

