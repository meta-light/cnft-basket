import Button from './button'
import { WalletDisconnectButton } from '@solana/wallet-adapter-react-ui';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { useWallet } from '@solana/wallet-adapter-react';

export const Section = (props) => {
  const { assetInfoList, getTPS, searchAssets } = props
  const wallet = useWallet()
  const walletModal = useWalletModal()
  
  return ( 
<>
    <section className="terminal-input-section">
    <Button className="btn btn-default" onClick={() => getTPS()} text="Get TPS" />
    <Button className="btn btn-default" text={"Search Assets"} onClick={() => searchAssets()} />
    <Button onClick={() => walletModal.setVisible(!walletModal.visible)} text="ON/OFF" className="btn btn-default " />
    <WalletMultiButton/><WalletDisconnectButton/>
    <h>Assets Found: {assetInfoList.length > 0 ? `(${assetInfoList.length} items)` : ''}</h>

    </section>
  </>
    )
}
export default Section