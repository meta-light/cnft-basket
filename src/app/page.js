'use client';
import React, { useState, useMemo } from 'react';
import { clusterApiUrl } from '@solana/web3.js';
import { Helius } from 'helius-sdk';
import Bottleneck from 'bottleneck';

import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import {ConnectionProvider, WalletProvider} from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { PhantomWalletAdapter, SolflareWalletAdapter } from '@solana/wallet-adapter-wallets';
import '@solana/wallet-adapter-react-ui/styles.css';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { useWallet } from "@solana/wallet-adapter-react";

export default function Home() {
  const [assetInfoList] = useState([]); // Use state for assetInfoList
  const ownerAddress = "9cpGSYpRthttGo3QvidzWbd3nseHP3fGSURQvqsih7dw";
  const HeliusKey = new Helius("cfa7ca19-e84e-44f9-b4e0-8ea6eb251e1b");
  const limiter = new Bottleneck({maxConcurrent: 1, minTime: 40});

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
          const delay = Math.pow(2, retries) * 10000; // Exponential backoff in milliseconds
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

  async function getAssetInfo(id) {
    const response = await HeliusKey.rpc.getAsset(id);
    const name = response.content.name;
    const state = response.compression.compressed;
    const image = response.content.links.image;
    const assetId = response.id;
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
            <img src={assetInfoList.image} alt={assetInfoList.name} />
            <h2>{assetInfoList.name}</h2>
          </article>
        ))}
      </div>
      <br></br>
      <div className="terminal-output">2023 Basket</div>
      <br></br>
    </main>
  )
  
}
