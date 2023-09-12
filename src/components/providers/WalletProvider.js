"use client"

import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { WalletProvider } from '@solana/wallet-adapter-react';
import { useMemo } from 'react';

export function ClientWalletProvider({children}) {
  let walletMemo = useMemo(() => {
    const wallets = [];
    return wallets;
  }, [])

  return (
    <WalletProvider wallets={walletMemo} autoConnect>
      <WalletModalProvider>
        {children}
      </WalletModalProvider>
    </WalletProvider>
  );


}
export default ClientWalletProvider