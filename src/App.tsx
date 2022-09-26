import './App.css';
import { useMemo } from 'react';
import * as anchor from '@project-serum/anchor';
import Home from './Home';
import { DEFAULT_TIMEOUT } from './connection';
import { clusterApiUrl } from '@solana/web3.js';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import {
  getPhantomWallet,
  getSlopeWallet,
  getSolflareWallet,
  getSolletWallet,
  getSolletExtensionWallet,
} from '@solana/wallet-adapter-wallets';

import {
  ConnectionProvider,
  WalletProvider,
} from '@solana/wallet-adapter-react';
import { WalletDialogProvider } from '@solana/wallet-adapter-material-ui';

import { ThemeProvider, createTheme } from '@material-ui/core';
import styled from 'styled-components';
import button1 from './button1';



const theme = createTheme({
  palette: {
    type: 'dark',
  },
});

const getCandyMachineId = (): anchor.web3.PublicKey | undefined => {
  try {
    const candyMachineId = new anchor.web3.PublicKey(
      process.env.REACT_APP_CANDY_MACHINE_ID!,
    );

    return candyMachineId;
  } catch (e) {
    console.log('Failed to construct CandyMachineId', e);
    return undefined;
  }
};

const candyMachineId = getCandyMachineId();
const network = process.env.REACT_APP_SOLANA_NETWORK as WalletAdapterNetwork;
const rpcHost = process.env.REACT_APP_SOLANA_RPC_HOST!;
const connection = new anchor.web3.Connection(
  rpcHost ? rpcHost : anchor.web3.clusterApiUrl('devnet'),
);

function clickMe() {
  alert('You clicked me!');
}

// const Button = styled.button`
// background-color: black;
// color: white;
// font-size: 20px;
// padding: 10px 60px;
// border-radius: 5px;
// margin: 10px 0px;
// cursor: pointer;
// `;

const App = () => {
  const endpoint = useMemo(() => clusterApiUrl(network), []);

  // const wallets = useMemo(
  //   () => [
  //     getPhantomWallet(),
  //     getSolflareWallet(),
  //     getSlopeWallet(),
  //     getSolletWallet({ network }),
  //     getSolletExtensionWallet({ network }),
  //   ],
  //   [],
  // );
  // const Button = styled.button `
  // background-color: blue;
  // `

 

  return (
    <div>
      <a href = 
    <button onClick={clickMe}>
  Disabled Button
</button>

  </div>
   
   
  
  
  );
};

export default App;
