"use client";

import { Header } from "@/components/header";
import { Hero } from "@/containers/landing/home/hero";
import { FeaturedEvents } from "@/containers/landing/home/featured-events";
import { MyTickets } from "@/containers/landing/home/my-tickets";
import { Footer } from "@/components/footer";

export default function App() {
  const featuredEvents = [
    {
      title: "Algorand Summit 2024",
      description: "The biggest Algorand blockchain event of the year",
      date: "June 15-17, 2024",
      location: "Virtual",
      price: 1,
      image: "https://www.mobiloitte.com/wp-content/uploads/2022/05/algo.jpg",
      category: "Blockchain",
    },
    {
      title: "DeFi on Algorand",
      description: "Exploring the future of decentralized finance on Algorand",
      date: "July 22-23, 2024",
      location: "New York, NY",
      price: 1,
      image: "https://www.mobiloitte.com/wp-content/uploads/2022/05/algo.jpg",
      category: "DeFi",
    },
    {
      title: "Algorand NFT Showcase",
      description: "Showcasing the best in Algorand blockchain art",
      date: "August 5, 2024",
      location: "Los Angeles, CA",
      price: 1,
      image: "https://www.mobiloitte.com/wp-content/uploads/2022/05/algo.jpg",
      category: "NFT",
    },
  ];

  const upcomingTickets = [
    {
      title: "Algorand Meetup",
      description: "Local Algorand developer meetup",
      date: "May 10, 2024",
      location: "San Francisco, CA",
      tokenId: 1,
      image: "https://www.mobiloitte.com/wp-content/uploads/2022/05/algo.jpg",
      category: "Meetup",
    },
  ];

  const pastTickets = [
    {
      title: "Algorand Workshop",
      description: "Hands-on Algorand smart contract development",
      date: "March 15, 2024",
      location: "Online",
      tokenId: 1,
      image: "https://www.mobiloitte.com/wp-content/uploads/2022/05/algo.jpg",
      category: "Workshop",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Hero />
        <FeaturedEvents events={featuredEvents} />
        {/* <MyTickets
          upcomingTickets={upcomingTickets}
          pastTickets={pastTickets}
        /> */}
      </main>
      <Footer />
    </div>
  );
}
