import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AboutPage: React.FC = () => {
  const [activeTeamMember, setActiveTeamMember] = useState(0);

  const teamMembers = [
    {
      name: "Fardin Sheikh",
      role: "Founder & Visionary",
      bio: "Pioneering the future of human-AI collaboration with 15+ years of experience in transformative technology. Believes AI should amplify human potential, not replace it.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      emoji: "🚀"
    },
    {
      name: "Sarah Chen",
      role: "Chief AI Researcher",
      bio: "PhD in Machine Learning from Stanford. Leading breakthrough research in empathetic AI systems that understand human context and emotion.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      emoji: "🧠"
    },
    {
      name: "Marcus Johnson",
      role: "VP of Engineering",
      bio: "Former Google architect specializing in scalable AI infrastructure. Passionate about building technology that feels effortlessly human.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      emoji: "⚡"
    },
    {
      name: "Elena Rodriguez",
      role: "Head of Experience Design",
      bio: "Award-winning designer creating interfaces that make complex AI feel intuitive and delightful. Believes great design is invisible.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      emoji: "🎨"
    }
  ];

  const values = [
    {
      title: "Human-First Philosophy",
      description: "Every algorithm, every interface, every decision begins with understanding human needs, emotions, and aspirations.",
      icon: "❤️"
    },
    {
      title: "Ethical AI Leadership",
      description: "We champion AI that augments human intelligence while preserving human agency, dignity, and creative expression.",
      icon: "⚖️"
    },
    {
      title: "Relentless Innovation",
      description: "Pushing the boundaries of what's possible while staying grounded in practical solutions that create real value.",
      icon: "🚀"
    },
    {
      title: "Radical Transparency",
      description: "Open about our methods, honest about limitations, and committed to building trust through authentic communication.",
      icon: "🔍"
    }
  ];

  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="py-20 px-8">
        <div className="max-w-humanbo mx-auto text-center">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-inter font-extralight text-humanbo-black mb-8 leading-ultra-tight tracking-tight">
            Redefining
            <br />
            <span className="font-light italic text-humanbo-blue">Intelligence</span>
          </h1>
          <p className="text-xl md:text-2xl font-inter font-light text-humanbo-gray mb-12 max-w-3xl mx-auto leading-relaxed tracking-wide">
            We're not just building AI—we're crafting the future of human-machine collaboration. A future where technology amplifies the best of human creativity, intuition, and wisdom.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-8 bg-humanbo-cream">
        <div className="max-w-humanbo mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-inter font-light text-humanbo-black mb-8 tracking-tight">
                Our Genesis Story
              </h2>
              <div className="space-y-6">
                <p className="text-lg font-inter font-light text-humanbo-gray leading-relaxed">
                  In 2023, as AI became increasingly powerful yet paradoxically more distant from human experience, our founder Fardin Sheikh saw an opportunity to change the narrative entirely.
                </p>
                <p className="text-lg font-inter font-light text-humanbo-gray leading-relaxed">
                  Instead of AI that replaces human intelligence, what if we created AI that amplifies human brilliance? What if technology could understand not just what we say, but what we mean? What we feel? What we aspire to become?
                </p>
                <p className="text-lg font-inter font-light text-humanbo-gray leading-relaxed">
                  Today, Humanbo serves over 50,000 users who experience AI that feels less artificial and more... authentically helpful. We're just getting started.
                </p>
              </div>
            </div>
            <div className="bg-humanbo-white p-8 rounded-lg">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">🌟</div>
                <h3 className="text-2xl font-inter font-medium text-humanbo-black mb-4 tracking-tight">
                  Impact That Matters
                </h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-humanbo-subtle rounded-lg">
                  <span className="font-inter font-light text-humanbo-gray">Lives Enhanced</span>
                  <span className="font-inter font-medium text-humanbo-black text-xl">50,000+</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-humanbo-subtle rounded-lg">
                  <span className="font-inter font-light text-humanbo-gray">Meaningful Interactions</span>
                  <span className="font-inter font-medium text-humanbo-black text-xl">2M+</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-humanbo-subtle rounded-lg">
                  <span className="font-inter font-light text-humanbo-gray">User Satisfaction</span>
                  <span className="font-inter font-medium text-humanbo-black text-xl">98%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-8">
        <div className="max-w-humanbo mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-inter font-light text-humanbo-black mb-6 tracking-tight">
              Our Core Convictions
            </h2>
            <p className="text-lg font-inter font-light text-humanbo-gray max-w-2xl mx-auto">
              The unwavering principles that guide every decision, every line of code, every user interaction
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-inter font-medium text-humanbo-black mb-3 tracking-tight">
                  {value.title}
                </h3>
                <p className="text-base font-inter font-light text-humanbo-gray leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-8 bg-humanbo-subtle">
        <div className="max-w-humanbo mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-inter font-light text-humanbo-black mb-6 tracking-tight">
              The Minds Behind the Magic
            </h2>
            <p className="text-lg font-inter font-light text-humanbo-gray max-w-2xl mx-auto">
              Visionaries, researchers, and builders united by a shared belief in human-centered AI
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className={`bg-humanbo-white p-6 rounded-lg border transition-all duration-300 cursor-pointer hover:scale-105 ${
                  activeTeamMember === index ? 'border-humanbo-blue shadow-lg' : 'border-humanbo-divider hover:border-humanbo-blue/50'
                }`}
                onClick={() => setActiveTeamMember(index)}
              >
                <div className="text-center">
                  <img 
                    src={member.image || "https://placehold.co/150x150/f0f0f0/666?text=" + member.name.split(' ').map(n => n[0]).join('')}
                    alt={member.name}
                    className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                    crossOrigin="anonymous"
                  />
                  <div className="text-2xl mb-2">{member.emoji}</div>
                  <h3 className="text-lg font-inter font-medium text-humanbo-black mb-1 tracking-tight">
                    {member.name}
                  </h3>
                  <p className="text-sm font-inter font-light text-humanbo-blue mb-3">
                    {member.role}
                  </p>
                  <p className="text-sm font-inter font-light text-humanbo-gray leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-8">
        <div className="max-w-humanbo mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-inter font-light text-humanbo-black mb-6 tracking-tight">
            Shape the Future With Us
          </h2>
          <p className="text-lg font-inter font-light text-humanbo-gray mb-8 max-w-2xl mx-auto">
            Ready to be part of the human-AI collaboration revolution? We're always seeking brilliant minds who share our vision of technology that amplifies human potential.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link 
              to="/careers"
              className="group bg-humanbo-blue text-humanbo-white px-10 py-4 rounded-full font-inter font-medium text-base tracking-wide hover:bg-blue-600 transition-all duration-300 transform hover:scale-105"
            >
              <span className="flex items-center gap-2">
                Explore Opportunities
                <i className="bi bi-arrow-right transition-transform duration-300 group-hover:translate-x-1"></i>
              </span>
            </Link>
            <Link 
              to="/contact"
              className="border-2 border-humanbo-black text-humanbo-black px-10 py-4 rounded-full font-inter font-medium text-base tracking-wide hover:bg-humanbo-black hover:text-humanbo-white transition-all duration-300"
            >
              Start a Conversation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
