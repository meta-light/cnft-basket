'use client';
import React, { useState, useEffect } from 'react';
import { Helius } from 'helius-sdk';
import { pRateLimit } from "p-ratelimit";
import { useWallet } from '@solana/wallet-adapter-react';
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import Section from '../components/section'
//import * as web3 from '@solana/web3.js';

export default function Home() {
  const HeliusKey = new Helius("<API KEY>");
  const wallet = useWallet();
  //const walletModal = useWalletModal()
  const [assetInfoList, setAssetInfoList] = useState([]);
  let ownerAddress = "";
  if (wallet && wallet.publicKey) { ownerAddress = wallet.publicKey.toString(); }
  const [tps, setTps] = useState(null);
  
  useEffect(() => { getTPS() } );
  useEffect(() => { if (wallet.connected) {
      console.log("User's wallet address: ", wallet.publicKey?.toBase58());
      searchAssets();
    }
  }, [wallet.connected]);

  const heliusLimit = pRateLimit({
    interval: 60000, // 60000 ms == 1 minute
    rate: 120, // 120 API calls per interval
    concurrency: 10, // no more than 10 running at once
    maxDelay: 2000, // an API call delayed > 2 sec is rejected
  });

  async function getTPS() {
    const tps = await HeliusKey.rpc.getCurrentTPS();
    console.log("Solana TPS:", tps);
    setTps(tps); // Set the value of tps
  }

  async function searchAssets() {
    try {
      const response = await heliusLimit(() => HeliusKey.rpc.searchAssets({ ownerAddress, compressed: true, burnt: false, page: 1 }));
      console.log(response);
      const assetInfos = response.items.map(item => ({
        name: String(item.content.metadata.name),
        assetId: item.id,
        state: item.compression.compressed,
        image: item.content.links.image,
      }));
      setAssetInfoList(assetInfos.filter(info => info && info.state));
    } catch (error) { console.error("Error in searchAssets:", error);  }
  }
  
  // async function login() { 
  //   let connection = new solanaWeb3.Connection(conf.cluster, "confirmed");
  //   provider = await wallet_provider();
  //   console.log("Connection: ", connection);
  //   console.log("Provider: ", provider);
  // }
  // login();

  return (
    <main>
      <link rel="stylesheet" href="https://unpkg.com/terminal.css@0.7.2/dist/terminal.min.css" />
      <title>Basket</title>
      <section className="terminal-output">
        <p>Welcome to <strong>cNFT Basket</strong></p>
        <div className="output-area"></div>
      </section>
      <section className="terminal-output">
        <p>Solana Network TPS: <strong>{tps ? tps.toFixed(2) : null}</strong></p> {/* Replace `tps` with the variable that holds the TPS value */}
      </section>
      <Section assetInfoList={assetInfoList} getTPS={getTPS} searchAssets={searchAssets} />
      <br></br>
      <div className="article-grid">
        {assetInfoList.map((assetInfoList, index) => (
          <article key={index}>
            <div className="equlibrium-image-container">
              <img className="view-icon-hover" src="icon-view.svg" alt="View Icon" />
              <img className="equilibrium-image" src={assetInfoList.image} alt={assetInfoList.name} width="604" />
              <div className="profile-nick-div">
                <h2><span className="hover-cyan">{assetInfoList.name}</span></h2>
              </div>
            </div>
          </article>
        ))}
      </div>
      <br></br>
      <div className="terminal-output"><strong>Basket - 2023</strong></div>
      <br></br>
    </main>
  )
}
