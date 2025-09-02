import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface Product {
  name: string;
  description: string;
  category: string;
  emoji: string;
  playfulDescription: string;
  path: string;
}

const ProductItem: React.FC<Product> = ({ name, description, category, emoji, playfulDescription, path }) => {
  const [isPlayful, setIsPlayful] = useState(false);

  return (
    <div 
      className="group py-12 border-b border-humanbo-divider/30 last:border-b-0 transition-all duration-500 hover:bg-humanbo-subtle/50 hover:px-8 hover:mx-[-2rem] rounded-lg cursor-pointer"
      onClick={() => setIsPlayful(!isPlayful)}
    >
      <div className="flex flex-col md:flex-row md:items-start gap-6">
        <div className="md:w-1/4">
          <span className="inline-block px-3 py-1 bg-humanbo-white border border-humanbo-divider text-humanbo-gray font-inter font-light text-xs tracking-ultra-wide uppercase rounded-full mb-3 group-hover:border-humanbo-blue/50 transition-all duration-300">
            {category}
          </span>
          <h3 className="text-2xl font-inter font-medium text-humanbo-black tracking-tight group-hover:text-humanbo-blue transition-colors duration-300 flex items-center gap-2">
            <span className="transition-transform duration-300 group-hover:scale-110">
              {emoji}
            </span>
            {name}
          </h3>
        </div>
        <div className="md:w-2/4">
          <p className={`text-lg font-inter font-light leading-relaxed tracking-wide transition-all duration-500 ${
            isPlayful ? 'text-humanbo-blue' : 'text-humanbo-gray'
          }`}>
            {isPlayful ? playfulDescription : description}
          </p>
        </div>
        <div className="md:w-1/4 md:text-right">
          <Link 
            to={path}
            className="group/link inline-flex items-center gap-2 text-humanbo-blue font-inter font-light text-base tracking-wide hover:text-humanbo-black transition-all duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            Learn More
            <i className="bi bi-arrow-right transition-all duration-300 group-hover/link:translate-x-1"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

const Products: React.FC = () => {
  const products: Product[] = [
    {
      name: "Askify",
      description: "Askify is a browser extension that uses advanced AI to provide instant answers to your questions. Simply highlight text, ask a question, or use our chat interface while browsing any website.",
      playfulDescription: "Think of it as your smartest friend who never gets tired of your questions, remembers everything you've talked about, and always knows just what to say. It's like having a conversation with your future self! 🎯",
      category: "Browser Extension",
      emoji: "💬",
      path: "/askify"
    },
    {
      name: "Mocdt",
      description: "The AI-native Work OS: this set of 5 simple apps designed to make your job easier. Manage your emails, projects, and more, all in one place. You can even share files between apps without any hassle. It's a smoother, simpler way to work.",
      playfulDescription: "It's like having a super-powered reading buddy who can speed-read through mountains of boring documents and tell you all the juicy bits you actually care about. No more drowning in paperwork! 📚",
      category: "Work OS",
      emoji: "🧠",
      path: "/mocdt"
    },
    {
      name: "WebSparks",
      description: "The AI software engineer that brings your ideas to life. Building web applications has never been easier—or faster. WebSparks is the AI-powered platform that empowers developers, designers, and even non-coders to create production-grade websites and applications in a fraction of the time.",
      playfulDescription: "Imagine if Picasso and Steve Jobs had a baby, and that baby grew up to be a web developer. That's WebSparks — it creates websites so beautiful, they make other websites jealous! ✨",
      category: "AI Development",
      emoji: "🎨",
      path: "/websparks"
    },
    {
      name: "OwnCents",
      description: "OwnCents is an all-in-one financial intelligence platform for startups. It gives founders and finance teams real-time visibility into their cash, revenue, expenses, customer growth, and runway—then layers in benchmarks, insights, and fundraising readiness metrics so businesses can make confident, data-driven decisions without the need for spreadsheets or manual reporting.",
      playfulDescription: "Your money's new best friend! It's like having a financial guru in your pocket who actually cares about your dreams (and won't judge you for that coffee addiction). 💰",
      category: "Financial Intelligence",
      emoji: "💎",
      path: "/owncents"
    },
    {
      name: "Time Wallet",
      description: "Time Wallet is like a wallet for your minutes. You load time instead of money, set how much you want to spend on apps like Instagram or TikTok, and once you hit your limit, your balance is gone. If you overspend, it even deducts from your wallet—just like overspending cash. It turns digital self-control into a simple, gamified system that helps people stop wasting time and start living intentionally.",
      playfulDescription: "Time travel might not be real, but Time Wallet is the next best thing! It helps you find those mysterious hours that seem to vanish into thin air. Where does the time go? Now you'll know! ⏰",
      category: "Digital Wellness",
      emoji: "⚡",
      path: "/time-wallet"
    }
  ];

  return (
    <section id="products" className="py-140 px-8">
      <div className="max-w-humanbo mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-6xl font-inter font-light text-humanbo-black mb-6 leading-premium tracking-tight hover:scale-105 transition-transform duration-300 cursor-default">
            Crafted with 
            <span className="hover:text-humanbo-blue transition-colors duration-300"> Purpose</span>
            <span className="text-2xl ml-2">🎯</span>
          </h2>
          <p className="text-lg font-inter font-light text-humanbo-gray tracking-wide max-w-2xl mx-auto hover:text-humanbo-black transition-colors duration-300 cursor-default">
            Five distinct AI experiences, each designed to enhance a different aspect of human potential
            <span className="block text-sm mt-2 text-humanbo-light-gray">
              💡 <em>Psst... click on any product to see our playful side!</em>
            </span>
          </p>
        </div>
        <div className="space-y-0">
          {products.map((product, index) => (
            <ProductItem 
              key={index} 
              name={product.name} 
              description={product.description} 
              playfulDescription={product.playfulDescription}
              category={product.category}
              emoji={product.emoji}
              path={product.path}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
