'use client'
import { ConnectionProvider } from '@solana/wallet-adapter-react';

export default function ProviderWrapper({ children }) {

  const endpoint = 'https://rpc.helius.xyz/?api-key=cfa7ca19-e84e-44f9-b4e0-8ea6eb251e1b';

  return (
    <ConnectionProvider endpoint={endpoint} config={{ commitment: "finalized" }}>
        {children}
    </ConnectionProvider>
  )
}