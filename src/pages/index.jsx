// pages/index.jsx
import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import HowItWorks from '../components/HowItWorks';
import Benefits from '../components/Benefits';
import Waitlist from '../components/Waitlist';
import SpotifyEmbed from '../components/SpotifyEmbed';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Head>
        <title>Finding Better University - Learn Better. Live Better.</title>
        <meta name="description" content="A curated marketplace of life-changing courses taught by real people who have achieved the 'better' you're looking for—in careers, relationships, money, health, and life." />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph / Social Media Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Finding Better University - Learn Better. Live Better." />
        <meta property="og:description" content="A curated marketplace of life-changing courses taught by real people who have achieved the 'better' you're looking for—in careers, relationships, money, health, and life." />
        <meta property="og:image" content="/og-image.jpg" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Finding Better University - Learn Better. Live Better." />
        <meta name="twitter:description" content="A curated marketplace of life-changing courses taught by real people who have achieved the 'better' you're looking for—in careers, relationships, money, health, and life." />
        <meta name="twitter:image" content="/og-image.jpg" />
      </Head>

      <Header />
      
      <main>
        <Hero />
        <About />
        <HowItWorks />
        <Benefits />
        <Waitlist />
        <SpotifyEmbed />
      </main>

      <Footer />
    </div>
  );
}