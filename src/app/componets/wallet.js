"use client";

import React, { FC, useMemo } from "react";
import {ConnectionProvider, WalletProvider} from "@solana/wallet-adapter-react";
import WrapperProps from "@/lib/types";


import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { WrapperProps } from "@/lib/types";

export const Wallet = WrapperProps = ({ children }) => {
  let walletMemo = useMemo(() => {
    return []
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