"use client";

import React, { createContext, useState, useEffect, useContext } from "react";
import { PeraWalletConnect } from "@perawallet/connect";
import { NetworkId, useWallet } from "@txnlab/use-wallet-react";

const peraWallet = new PeraWalletConnect();

interface WalletContextType {
  accountAddress: string | null;
  isConnected: boolean;
  connectWallet: () => Promise<void>;
  disconnectWallet: () => void;
}

const WalletContext = createContext<WalletContextType | undefined>(undefined);

export const WalletProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [accountAddress, setAccountAddress] = useState<string | null>(null);
  const {
    algodClient,
    activeAddress,
    setActiveNetwork,
    transactionSigner,
    wallets,
  } = useWallet();

  useEffect(() => {
    peraWallet.reconnectSession().then((accounts) => {
      // Thay đổi ở đây: Sử dụng một hàm callback thay vì truyền trực tiếp handleDisconnectWallet
      peraWallet.connector?.on("disconnect", () => handleDisconnectWallet);

      if (accounts.length) {
        setAccountAddress(accounts[0]);
      }
    });

    return () => {
      peraWallet.connector?.on("disconnect", handleDisconnectWallet);
    };
  }, []);

  const connectWallet = async () => {
    // peraWallet
    wallets[0]
      .connect()
      .then((newAccounts) => {
        peraWallet.connector?.on("disconnect", handleDisconnectWallet);
        setAccountAddress(newAccounts[0].address);
        // Update activeAddress
        setActiveNetwork(NetworkId.TESTNET);
        wallets[0].setActiveAccount(newAccounts[0].address);
        console.log(activeAddress);
      })
      .catch((error) => {
        if (error?.data?.type !== "CONNECT_MODAL_CLOSED") {
          console.log(error);
        }
      });
  };

  const handleDisconnectWallet = () => {
    peraWallet.disconnect();
    setAccountAddress(null);
  };

  const value = {
    accountAddress,
    isConnected: !!accountAddress,
    connectWallet,
    disconnectWallet: handleDisconnectWallet,
  };

  return (
    <WalletContext.Provider value={value}>{children}</WalletContext.Provider>
  );
};

export const useWalletProvider = () => {
  const context = useContext(WalletContext);
  if (context === undefined) {
    throw new Error("useWallet must be used within a WalletProvider");
  }
  return context;
};
