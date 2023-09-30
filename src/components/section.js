'use client';
import Button from './button'
import Connector from './connecter';
import { WalletDisconnectButton } from '@solana/wallet-adapter-react-ui';
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { useWallet } from "@solana/wallet-adapter-react";
import { useState } from "react";



export const Section = (props) => {
  const { assetInfoList, getTPS, searchAssets } = props
  const walletModal = useWalletModal()
  const { wallet } = useWallet(); // Add this line to get the wallet state
  const [isConnected, setIsConnected] = useState(false);

  const handleConnectWallet = () => {
    walletModal.setVisible(!walletModal.visible);
    setIsConnected(true);
  };

  const handleDisconnectWallet = () => {
    setIsConnected(false);
    // Perform any additional disconnect logic if needed
  };

  
  return ( 
  <>
    <section className="terminal-input-section" style={{ display: 'flex', alignItems: 'center' }}>
    <Button className="btn btn-default" onClick={() => getTPS()} text="Get TPS" />
    <Button className="btn btn-default" text={"Search Assets"} onClick={() => searchAssets()} />
    {isConnected ? (
          <>
            <WalletDisconnectButton onClick={handleDisconnectWallet} />
          </>
        ) : (
          <Button onClick={handleConnectWallet} 
            text={walletModal.visible ? "Cancel" : "Connect Wallet"} className="btn btn-default" id="connect" />
        )}
    </section>
    <br></br>
    <section className="terminal-output-section">
      <h>Assets Found: {assetInfoList.length > 0 ? `(${assetInfoList.length} items)` : ''}</h>
    </section>
  </>
    )
}
export default Section