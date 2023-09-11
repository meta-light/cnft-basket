"use client";
// Wallet.js
import React, { useMemo } from "react";
import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";

export const Wallet = ({ children }) => {
  let walletMemo = useMemo(() => {
    return [];
  }, []);

  return (
    <>
      <ConnectionProvider
        // endpoint="https://api.devnet.solana.com"
        // endpoint="https://rpc-proxy.solsplits.workers.dev/"
        endpoint={`Your RPC Provider URL`}
        config={{ commitment: "finalized" }}
      >
        <WalletProvider wallets={walletMemo} autoConnect>
          <WalletModalProvider>{children}</WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </>
  );
};

export default Wallet;
