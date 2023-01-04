import React, {useState, useEffect, useContext} from 'react';
import Web3Modal from "web3modal";
import {ethers} from "ethers";

//Internal Import
import{coinAddress} from '../context/constants';

export const ERC20ICOCONTEXT = React.createContext();

export  const ERC20Provider = ({children})=>{
  const coin = "Hey subscribe me";
  return (
    <ERC20ICOCONTEXT.Provider value={{coin}}>
      {children}
    </ERC20ICOCONTEXT.Provider>
  )
}