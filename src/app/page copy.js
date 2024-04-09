'use client';
import React, { useState, useEffect } from 'react';
// import { clusterApiUrl } from '@solana/web3.js';
import { Helius } from 'helius-sdk';
import Bottleneck from 'bottleneck';

export default function Home() {
  const [assetInfoList, setAssetInfoList] = useState([]); // Use state for assetInfoList
  const ownerAddress = "9cpGSYpRthttGo3QvidzWbd3nseHP3fGSURQvqsih7dw";
  const HeliusKey = new Helius("");
  const limiter = new Bottleneck({maxConcurrent: 5, minTime: 200});

  useEffect(() => {
    searchAssets();
  }, []);

  async function getTPS() {
    const tps = await HeliusKey.rpc.getCurrentTPS();
    console.log("Solana TPS:", tps);
  }


  async function searchAssets() {
    try {
      const response = await HeliusKey.rpc.searchAssets({ ownerAddress, compressed: true, page: 1 });
      console.log(response);
      const assetInfos = response.items.map(item => ({
        name: String(item.content.metadata.name),
        assetId: item.id,
        state: item.compression.compressed,
        image: item.content.links.image,
      }));
      setAssetInfoList(assetInfos.filter(info => info && info.state));
    } catch (error) {
      console.error("Error in searchAssets:", error);
    }
  }



  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
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
        <h>Assets Found: {assetInfoList.length > 0 ? `(${assetInfoList.length} items)` : ''}</h>
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

