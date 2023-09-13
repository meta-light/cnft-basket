'use client';
import Button from './button'
import { WalletDisconnectButton } from '@solana/wallet-adapter-react-ui';
import { useWalletModal } from "@solana/wallet-adapter-react-ui";

export const Section = (props) => {
  const { assetInfoList, getTPS, searchAssets } = props
  const walletModal = useWalletModal()
  
  return ( 
<>
    <section className="terminal-input-section">
    <Button className="btn btn-default" onClick={() => getTPS()} text="Get TPS" />
    <Button className="btn btn-default" text={"Search Assets"} onClick={() => searchAssets()} />
    <Button onClick={() => walletModal.setVisible(!walletModal.visible)} text="Connect Wallet" className="btn btn-default" id="connect" />

    <WalletDisconnectButton/>
    <h>Assets Found: {assetInfoList.length > 0 ? `(${assetInfoList.length} items)` : ''}</h>
    </section>
  </>
    )
}
export default Section