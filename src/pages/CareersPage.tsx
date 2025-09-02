import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CareersPage: React.FC = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const jobOpenings = [
    {
      title: "Senior AI Research Scientist",
      department: "Research",
      location: "San Francisco, CA / Remote",
      type: "Full-time",
      description: "Lead research initiatives in empathetic AI systems and human-computer interaction.",
      requirements: ["PhD in AI/ML or related field", "5+ years research experience", "Published papers in top-tier conferences"],
      emoji: "🧠"
    },
    {
      title: "Full Stack Engineer",
      department: "Engineering",
      location: "San Francisco, CA / Remote",
      type: "Full-time",
      description: "Build scalable web applications that power our AI-driven products.",
      requirements: ["5+ years full-stack development", "React, Node.js, Python experience", "Cloud infrastructure knowledge"],
      emoji: "💻"
    },
    {
      title: "Product Designer",
      department: "Design",
      location: "San Francisco, CA / Remote",
      type: "Full-time",
      description: "Design intuitive interfaces that make AI feel human and accessible.",
      requirements: ["4+ years product design experience", "Figma/Sketch proficiency", "AI/ML product experience preferred"],
      emoji: "🎨"
    },
    {
      title: "DevOps Engineer",
      department: "Engineering",
      location: "San Francisco, CA / Remote",
      type: "Full-time",
      description: "Scale our infrastructure to support millions of AI interactions daily.",
      requirements: ["AWS/GCP experience", "Kubernetes, Docker", "CI/CD pipeline expertise"],
      emoji: "⚙️"
    },
    {
      title: "Marketing Manager",
      department: "Marketing",
      location: "San Francisco, CA / Remote",
      type: "Full-time",
      description: "Tell the story of human-centered AI to the world.",
      requirements: ["3+ years B2B marketing", "Content creation skills", "Tech industry experience"],
      emoji: "📢"
    },
    {
      title: "AI Ethics Researcher",
      department: "Research",
      location: "San Francisco, CA / Remote",
      type: "Full-time",
      description: "Ensure our AI systems are fair, transparent, and beneficial for all users.",
      requirements: ["Background in AI ethics", "Philosophy or related degree", "Research publication experience"],
      emoji: "⚖️"
    }
  ];

  const benefits = [
    {
      title: "Competitive Salary",
      description: "Top-tier compensation packages with equity options",
      icon: "💰"
    },
    {
      title: "Health & Wellness",
      description: "Comprehensive health, dental, and vision insurance",
      icon: "🏥"
    },
    {
      title: "Flexible Work",
      description: "Remote-first culture with flexible hours",
      icon: "🏠"
    },
    {
      title: "Learning Budget",
      description: "$3,000 annual budget for courses and conferences",
      icon: "📚"
    },
    {
      title: "Unlimited PTO",
      description: "Take the time you need to recharge and explore",
      icon: "🌴"
    },
    {
      title: "Latest Tech",
      description: "MacBook Pro, monitors, and any tools you need",
      icon: "💻"
    }
  ];

  const departments = ['all', 'Research', 'Engineering', 'Design', 'Marketing'];

  const filteredJobs = selectedDepartment === 'all' 
    ? jobOpenings 
    : jobOpenings.filter(job => job.department === selectedDepartment);

  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="py-20 px-8">
        <div className="max-w-humanbo mx-auto text-center">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-inter font-extralight text-humanbo-black mb-8 leading-ultra-tight tracking-tight">
            Join Our
            <br />
            <span className="font-light italic text-humanbo-blue">Mission</span>
          </h1>
          <p className="text-xl md:text-2xl font-inter font-light text-humanbo-gray mb-12 max-w-3xl mx-auto leading-relaxed tracking-wide">
            Help us build AI that enhances human potential. Join a team of passionate innovators creating the future of human-centered technology.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="#openings"
              className="group bg-humanbo-black text-humanbo-white px-10 py-4 rounded-full font-inter font-medium text-base tracking-wide hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
            >
              <span className="flex items-center gap-2">
                View Open Positions
                <i className="bi bi-arrow-down transition-transform duration-300 group-hover:translate-y-1"></i>
              </span>
            </a>
            <Link 
              to="/contact"
              className="border-2 border-humanbo-black text-humanbo-black px-10 py-4 rounded-full font-inter font-medium text-base tracking-wide hover:bg-humanbo-black hover:text-humanbo-white transition-all duration-300"
            >
              Questions? Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 px-8 bg-humanbo-cream">
        <div className="max-w-humanbo mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-inter font-light text-humanbo-black mb-6 tracking-tight">
              Why Work at Humanbo?
            </h2>
            <p className="text-lg font-inter font-light text-humanbo-gray max-w-2xl mx-auto">
              We're building more than just products — we're creating a culture where innovation thrives
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🚀</div>
              <h3 className="text-xl font-inter font-medium text-humanbo-black mb-3 tracking-tight">
                Cutting-Edge Work
              </h3>
              <p className="text-base font-inter font-light text-humanbo-gray leading-relaxed">
                Work on breakthrough AI technologies that will shape the future of human-computer interaction.
              </p>
            </div>
            <div className="text-center group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🤝</div>
              <h3 className="text-xl font-inter font-medium text-humanbo-black mb-3 tracking-tight">
                Collaborative Culture
              </h3>
              <p className="text-base font-inter font-light text-humanbo-gray leading-relaxed">
                Join a diverse team of researchers, engineers, and designers who support each other's growth.
              </p>
            </div>
            <div className="text-center group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🌍</div>
              <h3 className="text-xl font-inter font-medium text-humanbo-black mb-3 tracking-tight">
                Global Impact
              </h3>
              <p className="text-base font-inter font-light text-humanbo-gray leading-relaxed">
                Your work will directly impact millions of users worldwide, making AI more human and accessible.
              </p>
            </div>
          </div>

          {/* Benefits */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-humanbo-white p-6 rounded-lg border border-humanbo-divider hover:border-humanbo-blue/50 transition-all duration-300 hover:scale-105 group">
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-inter font-medium text-humanbo-black mb-2 tracking-tight">
                  {benefit.title}
                </h3>
                <p className="text-sm font-inter font-light text-humanbo-gray leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section id="openings" className="py-20 px-8">
        <div className="max-w-humanbo mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-inter font-light text-humanbo-black mb-6 tracking-tight">
              Open Positions
            </h2>
            <p className="text-lg font-inter font-light text-humanbo-gray max-w-2xl mx-auto mb-8">
              Find your perfect role and help us build the future of AI
            </p>
            
            {/* Department Filter */}
            <div className="flex flex-wrap justify-center gap-2">
              {departments.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setSelectedDepartment(dept)}
                  className={`px-4 py-2 rounded-full font-inter font-medium text-sm tracking-wide transition-all duration-300 ${
                    selectedDepartment === dept
                      ? 'bg-humanbo-blue text-humanbo-white'
                      : 'bg-humanbo-subtle text-humanbo-gray hover:bg-humanbo-blue/10 hover:text-humanbo-blue'
                  }`}
                >
                  {dept === 'all' ? 'All Departments' : dept}
                </button>
              ))}
            </div>
          </div>
          
          <div className="space-y-6">
            {filteredJobs.map((job, index) => (
              <div key={index} className="bg-humanbo-white p-8 rounded-lg border border-humanbo-divider hover:border-humanbo-blue/50 transition-all duration-300 hover:scale-[1.02] group">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                        {job.emoji}
                      </span>
                      <div>
                        <h3 className="text-xl font-inter font-medium text-humanbo-black tracking-tight">
                          {job.title}
                        </h3>
                        <div className="flex items-center gap-4 text-sm font-inter font-light text-humanbo-gray">
                          <span>{job.department}</span>
                          <span>•</span>
                          <span>{job.location}</span>
                          <span>•</span>
                          <span>{job.type}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-base font-inter font-light text-humanbo-gray leading-relaxed mb-4">
                      {job.description}
                    </p>
                    <div className="space-y-2">
                      <h4 className="text-sm font-inter font-medium text-humanbo-black">Key Requirements:</h4>
                      <ul className="space-y-1">
                        {job.requirements.map((req, idx) => (
                          <li key={idx} className="text-sm font-inter font-light text-humanbo-gray flex items-center gap-2">
                            <i className="bi bi-check text-humanbo-blue"></i>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <button className="bg-humanbo-blue text-humanbo-white px-6 py-3 rounded-full font-inter font-medium text-sm tracking-wide hover:bg-blue-600 transition-all duration-300 transform hover:scale-105">
                      Apply Now
                    </button>
                    <button className="border border-humanbo-divider text-humanbo-gray px-6 py-3 rounded-full font-inter font-medium text-sm tracking-wide hover:border-humanbo-blue hover:text-humanbo-blue transition-all duration-300">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-12">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-inter font-medium text-humanbo-black mb-2">
                No positions found
              </h3>
              <p className="text-base font-inter font-light text-humanbo-gray">
                Try selecting a different department or check back soon for new openings.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-8 bg-humanbo-subtle">
        <div className="max-w-humanbo mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-inter font-light text-humanbo-black mb-6 tracking-tight">
            Don't See Your Role?
          </h2>
          <p className="text-lg font-inter font-light text-humanbo-gray mb-8 max-w-2xl mx-auto">
            We're always looking for exceptional talent. Send us your resume and tell us how you'd like to contribute to our mission.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link 
              to="/contact"
              className="group bg-humanbo-blue text-humanbo-white px-10 py-4 rounded-full font-inter font-medium text-base tracking-wide hover:bg-blue-600 transition-all duration-300 transform hover:scale-105"
            >
              <span className="flex items-center gap-2">
                Send Your Resume
                <i className="bi bi-arrow-right transition-transform duration-300 group-hover:translate-x-1"></i>
              </span>
            </Link>
            <Link 
              to="/about"
              className="border-2 border-humanbo-black text-humanbo-black px-10 py-4 rounded-full font-inter font-medium text-base tracking-wide hover:bg-humanbo-black hover:text-humanbo-white transition-all duration-300"
            >
              Learn About Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;
