import { Connection, Wallet, clusterApiUrl, WalletAdapter } from '@solana/wallet-adapter-base';
import { getPhantomWallet } from '@solana/wallet-adapter-wallets';

const connection = new Connection(clusterApiUrl('mainnet-beta'));
  
const wallet = getPhantomWallet();
  
wallet.connect();
  
const disconnectWallet = wallet.disconnect();

const isWalletConnected =  wallet.connected;