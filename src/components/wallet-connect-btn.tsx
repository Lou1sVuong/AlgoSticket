import { Button } from "@/components/ui/button";
import { LogOut, WalletIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Copy } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { useWalletProvider } from "@/providers/wallet-provider";

export function WalletConnectButton() {
  const { isConnected, accountAddress, connectWallet, disconnectWallet } =
    useWalletProvider();

  const handleCopyAddress = () => {
    if (accountAddress) {
      navigator.clipboard.writeText(accountAddress);
      toast({
        title: "Copied to clipboard",
        description: "The account address has been copied to your clipboard.",
      });
    }
  };

  const truncateAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  if (!isConnected) {
    return (
      <Button onClick={connectWallet} variant="outline">
        <WalletIcon className="mr-2 h-4 w-4" />
        Connect Pera Wallet
      </Button>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary">
          <WalletIcon className="mr-2 h-4 w-4" />
          {accountAddress ? truncateAddress(accountAddress) : "Connected"}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={handleCopyAddress}>
          <Copy className="mr-2 h-4 w-4" />
          Copy Address
        </DropdownMenuItem>
        <DropdownMenuItem onClick={disconnectWallet}>
          <LogOut className="mr-2 h-4 w-4" />
          Disconnect
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
