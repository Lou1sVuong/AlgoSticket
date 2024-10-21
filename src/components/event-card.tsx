import Image from "next/image";
import { CalendarIcon, MapPinIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
// import { useWallet as useWalletProvider } from "@/providers/wallet-provider";
import { toast } from "@/hooks/use-toast";
import algosdk from "algosdk";
import { useWallet } from "@txnlab/use-wallet-react";
import { useWalletProvider } from "@/providers/wallet-provider";

interface EventCardProps {
  event: {
    title: string;
    description: string;
    date: string;
    location: string;
    price: number;
    image: string;
    category: string;
  };
}

export function EventCard({ event }: EventCardProps) {
  const {
    algodClient,
    activeAddress,
    setActiveNetwork,
    transactionSigner,
    wallets,
  } = useWallet();
  const { isConnected, accountAddress, connectWallet } = useWalletProvider();
  async function handleBuyTicket(amount: number) {
    try {
      if (!accountAddress || !activeAddress) {
        toast({
          title: "Please connect your wallet first.",
          description: "Please connect your wallet to buy ticket.",
        });
      }

      const TEST_WALLET_ADDRESS =
        "K4NC7MHO3JDICHDJVDOTXLVTKBP3OYMUEQW7BKB4VISA7CP2Z7HRLJ4YWQ";
      const atc = new algosdk.AtomicTransactionComposer();
      const suggestedParams = await algodClient.getTransactionParams().do();
      const transaction = algosdk.makePaymentTxnWithSuggestedParamsFromObject({
        suggestedParams: suggestedParams,
        from: accountAddress as string,
        to: TEST_WALLET_ADDRESS,
        amount: amount * 1000000,
      });

      atc.addTransaction({ txn: transaction, signer: transactionSigner });

      try {
        const result = await atc.execute(algodClient, 2);
        console.info(`[App] ✅ Transaction sent successfully!`, {
          confirmedRound: result.confirmedRound,
          txIDs: result.txIDs,
        });
        toast({
          title: "Transaction sent successfully!",
          description: "The transaction has been sent successfully!",
        });
      } catch (error) {
        console.error("[App] Error signing transaction:", error);
      } finally {
      }
    } catch (error) {
      console.error("[App] Error signing transaction:", error);
    }
  }
  return (
    <Card className="overflow-hidden">
      <div className="relative h-48">
        <Image
          src={event.image}
          alt={event.title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 ease-in-out hover:scale-105"
        />
        <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground">
          {event.category}
        </Badge>
      </div>
      <CardHeader>
        <CardTitle className="text-xl font-bold">{event.title}</CardTitle>
        <CardDescription>{event.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <CalendarIcon className="h-4 w-4" />
          <span>{event.date}</span>
        </div>
        <div className="mt-2 flex items-center space-x-2 text-sm text-muted-foreground">
          <MapPinIcon className="h-4 w-4" />
          <span>{event.location}</span>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <Badge variant="secondary" className="text-lg font-semibold">
          {event.price} ALGO
        </Badge>
        {isConnected ? (
          <Button onClick={() => handleBuyTicket(event.price)}>
            Buy Ticket
          </Button>
        ) : (
          <Button onClick={connectWallet}>Buy Ticket</Button>
        )}
      </CardFooter>
    </Card>
  );
}
