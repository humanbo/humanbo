import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const BlogPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const blogPosts = [
    {
      title: "The Future of Human-Centered AI",
      excerpt: "Exploring how artificial intelligence can be designed to enhance rather than replace human capabilities.",
      author: "Fardin Sheikh",
      date: "March 15, 2024",
      readTime: "5 min read",
      category: "AI Research",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      featured: true
    },
    {
      title: "Building Empathetic AI Systems",
      excerpt: "How we're teaching machines to understand and respond to human emotions with genuine care.",
      author: "Sarah Chen",
      date: "March 10, 2024",
      readTime: "7 min read",
      category: "AI Research",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&h=400&fit=crop"
    },
    {
      title: "The Ethics of AI Development",
      excerpt: "Our commitment to responsible AI development and the principles that guide our work.",
      author: "Elena Rodriguez",
      date: "March 5, 2024",
      readTime: "6 min read",
      category: "Ethics",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop"
    },
    {
      title: "Designing Intuitive AI Interfaces",
      excerpt: "The design principles behind creating AI interactions that feel natural and human.",
      author: "Marcus Johnson",
      date: "February 28, 2024",
      readTime: "4 min read",
      category: "Design",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=600&h=400&fit=crop"
    },
    {
      title: "AI in Everyday Life: A User Study",
      excerpt: "Insights from our research on how people interact with AI in their daily routines.",
      author: "Sarah Chen",
      date: "February 20, 2024",
      readTime: "8 min read",
      category: "Research",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
    },
    {
      title: "The Technology Behind Humanbo",
      excerpt: "A deep dive into the technical architecture that powers our human-centered AI platform.",
      author: "Marcus Johnson",
      date: "February 15, 2024",
      readTime: "10 min read",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop"
    }
  ];

  const categories = ['all', 'AI Research', 'Ethics', 'Design', 'Research', 'Technology'];

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="py-20 px-8">
        <div className="max-w-humanbo mx-auto text-center">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-inter font-extralight text-humanbo-black mb-8 leading-ultra-tight tracking-tight">
            Our
            <br />
            <span className="font-light italic text-humanbo-blue">Journal</span>
          </h1>
          <p className="text-xl md:text-2xl font-inter font-light text-humanbo-gray mb-12 max-w-3xl mx-auto leading-relaxed tracking-wide">
            Insights, research, and stories from the frontier of human-centered artificial intelligence.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-20 px-8 bg-humanbo-cream">
          <div className="max-w-humanbo mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-humanbo-blue text-humanbo-white font-inter font-light text-sm tracking-ultra-wide uppercase rounded-full">
                ✨ Featured Article
              </span>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src={featuredPost.image || "https://placehold.co/600x400/f0f0f0/666?text=Featured+Post"}
                  alt={featuredPost.title}
                  className="w-full h-80 object-cover rounded-lg"
                  crossOrigin="anonymous"
                />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-humanbo-white text-humanbo-blue font-inter font-light text-xs tracking-wide uppercase rounded-full">
                    {featuredPost.category}
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-inter font-light text-humanbo-black mb-4 tracking-tight leading-tight">
                  {featuredPost.title}
                </h2>
                <p className="text-lg font-inter font-light text-humanbo-gray mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-4 mb-6 text-sm font-inter font-light text-humanbo-gray">
                  <span>{featuredPost.author}</span>
                  <span>•</span>
                  <span>{featuredPost.date}</span>
                  <span>•</span>
                  <span>{featuredPost.readTime}</span>
                </div>
                <button className="group bg-humanbo-black text-humanbo-white px-8 py-3 rounded-full font-inter font-medium text-base tracking-wide hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">
                  <span className="flex items-center gap-2">
                    Read Article
                    <i className="bi bi-arrow-right transition-transform duration-300 group-hover:translate-x-1"></i>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts */}
      <section className="py-20 px-8">
        <div className="max-w-humanbo mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-inter font-light text-humanbo-black mb-6 tracking-tight">
              Latest Articles
            </h2>
            
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full font-inter font-medium text-sm tracking-wide transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-humanbo-blue text-humanbo-white'
                      : 'bg-humanbo-subtle text-humanbo-gray hover:bg-humanbo-blue/10 hover:text-humanbo-blue'
                  }`}
                >
                  {category === 'all' ? 'All Articles' : category}
                </button>
              ))}
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.filter(post => !post.featured).map((post, index) => (
              <article key={index} className="bg-humanbo-white rounded-lg border border-humanbo-divider hover:border-humanbo-blue/50 transition-all duration-300 hover:scale-105 group overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={post.image || "https://placehold.co/600x400/f0f0f0/666?text=Blog+Post"}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    crossOrigin="anonymous"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-1 bg-humanbo-subtle text-humanbo-blue font-inter font-light text-xs tracking-wide uppercase rounded">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-inter font-medium text-humanbo-black mb-3 tracking-tight leading-tight group-hover:text-humanbo-blue transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-base font-inter font-light text-humanbo-gray mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm font-inter font-light text-humanbo-gray">
                      <span>{post.author}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <span className="text-xs font-inter font-light text-humanbo-gray">
                      {post.date}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <div className="text-4xl mb-4">📝</div>
              <h3 className="text-xl font-inter font-medium text-humanbo-black mb-2">
                No articles found
              </h3>
              <p className="text-base font-inter font-light text-humanbo-gray">
                Try selecting a different category or check back soon for new content.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-8 bg-humanbo-subtle">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-inter font-light text-humanbo-black mb-6 tracking-tight">
            Stay Updated
          </h2>
          <p className="text-lg font-inter font-light text-humanbo-gray mb-8">
            Get the latest insights on AI research and human-centered technology delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-humanbo-divider rounded-full font-inter font-light text-base text-humanbo-black placeholder-humanbo-gray focus:outline-none focus:border-humanbo-blue focus:ring-1 focus:ring-humanbo-blue transition-all duration-300"
            />
            <button className="bg-humanbo-blue text-humanbo-white px-8 py-3 rounded-full font-inter font-medium text-base tracking-wide hover:bg-blue-600 transition-all duration-300 transform hover:scale-105">
              Subscribe
            </button>
          </div>
          <p className="text-xs font-inter font-light text-humanbo-gray mt-4">
            No spam, unsubscribe anytime. Read our{' '}
            <Link to="/privacy" className="text-humanbo-blue hover:text-humanbo-black transition-colors duration-300">
              Privacy Policy
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
