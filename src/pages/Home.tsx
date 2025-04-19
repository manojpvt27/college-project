import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Users, BookOpen, Award, MapPin, Calendar, ArrowRight, X, Play } from 'lucide-react';

const Home = () => {
  const [showEmergency, setShowEmergency] = useState(true);

  return (
    <div>
      {/* Emergency Announcements */}
      {showEmergency && (
        <div className="bg-error-light text-white py-3 mt-16">
          <div className="container-custom flex justify-between items-center">
            <p className="text-sm md:text-base font-medium">
              <strong>IMPORTANT:</strong> Registration for Fall Semester extended until July 15th
            </p>
            <button 
              onClick={() => setShowEmergency(false)}
              className="text-white hover:text-gray-200"
              aria-label="Dismiss announcement"
            >
              <X size={20} />
            </button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{ 
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750")',
          marginTop: showEmergency ? 0 : '64px'
        }}
      >
        <div className="container-custom text-center text-white py-20">
          <h1 className="heading-xl mb-4 animate-fade-in">Global College</h1>
          <h2 className="text-xl md:text-2xl font-light mb-8 animate-slide-up">
            Empowering Minds, Shaping Futures
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Link to="/admissions" className="btn btn-secondary">
              Apply Now
            </Link>
            <button className="btn bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm focus:ring-white">
              <Play size={16} className="mr-2" /> Virtual Tour
            </button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Quick Links */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card p-6 border-t-4 border-primary hover:translate-y-[-5px] transition-transform duration-300">
              <h3 className="font-heading font-semibold text-xl mb-3 text-primary">Admissions</h3>
              <p className="text-gray-600 mb-4">
                Start your journey with us. Learn about our admission process and requirements.
              </p>
              <Link to="/admissions" className="inline-flex items-center text-primary font-medium hover:text-primary-dark">
                Learn More <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
            
            <div className="card p-6 border-t-4 border-secondary hover:translate-y-[-5px] transition-transform duration-300">
              <h3 className="font-heading font-semibold text-xl mb-3 text-secondary">Programs</h3>
              <p className="text-gray-600 mb-4">
                Explore our diverse range of undergraduate and graduate programs.
              </p>
              <Link to="/academics" className="inline-flex items-center text-secondary font-medium hover:text-secondary-dark">
                Learn More <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
            
            <div className="card p-6 border-t-4 border-accent hover:translate-y-[-5px] transition-transform duration-300">
              <h3 className="font-heading font-semibold text-xl mb-3 text-accent">Campus Life</h3>
              <p className="text-gray-600 mb-4">
                Discover the vibrant community, facilities, and activities available on campus.
              </p>
              <Link to="/campus" className="inline-flex items-center text-accent font-medium hover:text-accent-dark">
                Learn More <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
            
            <div className="card p-6 border-t-4 border-primary hover:translate-y-[-5px] transition-transform duration-300">
              <h3 className="font-heading font-semibold text-xl mb-3 text-primary">Research</h3>
              <p className="text-gray-600 mb-4">
                Learn about our cutting-edge research initiatives and opportunities.
              </p>
              <a href="#" className="inline-flex items-center text-primary font-medium hover:text-primary-dark">
                Learn More <ArrowRight size={16} className="ml-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                alt="College campus building" 
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
            <div>
              <h2 className="heading-lg text-primary mb-4">About Global College</h2>
              <p className="text-gray-600 mb-6">
                Founded in 1980, Global College has established itself as a leading institution of higher education, 
                committed to academic excellence, innovative research, and community engagement. Our diverse 
                community of scholars, researchers, and students are dedicated to addressing the challenges of 
                our rapidly changing world.
              </p>
              <p className="text-gray-600 mb-6">
                With a rich history spanning over four decades, our institution continues to evolve and adapt to 
                meet the demands of the 21st century while maintaining our core values of integrity, 
                innovation, inclusion, and impact.
              </p>
              <Link to="#" className="btn btn-primary">
                Discover Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-primary text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="bg-white/10 rounded-full w-16 h-16 mx-auto flex items-center justify-center mb-4">
                <Users size={28} className="text-secondary" />
              </div>
              <h3 className="text-4xl font-bold font-heading mb-2">15,000+</h3>
              <p className="text-gray-300">Students Enrolled</p>
            </div>
            
            <div className="p-6">
              <div className="bg-white/10 rounded-full w-16 h-16 mx-auto flex items-center justify-center mb-4">
                <BookOpen size={28} className="text-secondary" />
              </div>
              <h3 className="text-4xl font-bold font-heading mb-2">200+</h3>
              <p className="text-gray-300">Academic Programs</p>
            </div>
            
            <div className="p-6">
              <div className="bg-white/10 rounded-full w-16 h-16 mx-auto flex items-center justify-center mb-4">
                <Award size={28} className="text-secondary" />
              </div>
              <h3 className="text-4xl font-bold font-heading mb-2">92%</h3>
              <p className="text-gray-300">Graduate Employment</p>
            </div>
            
            <div className="p-6">
              <div className="bg-white/10 rounded-full w-16 h-16 mx-auto flex items-center justify-center mb-4">
                <MapPin size={28} className="text-secondary" />
              </div>
              <h3 className="text-4xl font-bold font-heading mb-2">50+</h3>
              <p className="text-gray-300">Global Partnerships</p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg text-primary mb-4">Latest News & Events</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Stay up to date with the latest happenings, events, and news from our campus community.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card overflow-hidden hover:shadow-hover transition-shadow duration-300">
              <img 
                src="https://images.pexels.com/photos/2305098/pexels-photo-2305098.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                alt="Research award ceremony" 
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar size={16} className="mr-2" />
                  June 15, 2025
                </div>
                <h3 className="font-heading font-semibold text-xl mb-3">
                  Professor Johnson Receives Prestigious Research Award
                </h3>
                <p className="text-gray-600 mb-4">
                  Our esteemed faculty member Dr. Johnson has been recognized for groundbreaking research in renewable energy.
                </p>
                <a href="#" className="inline-flex items-center text-primary font-medium hover:text-primary-dark">
                  Read More <ArrowRight size={16} className="ml-1" />
                </a>
              </div>
            </div>
            
            <div className="card overflow-hidden hover:shadow-hover transition-shadow duration-300">
              <img 
                src="https://images.pexels.com/photos/4691290/pexels-photo-4691290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                alt="Student innovation project" 
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar size={16} className="mr-2" />
                  June 10, 2025
                </div>
                <h3 className="font-heading font-semibold text-xl mb-3">
                  Students Win National Innovation Challenge
                </h3>
                <p className="text-gray-600 mb-4">
                  A team of engineering students have developed an AI solution that earned first place in a national competition.
                </p>
                <a href="#" className="inline-flex items-center text-primary font-medium hover:text-primary-dark">
                  Read More <ArrowRight size={16} className="ml-1" />
                </a>
              </div>
            </div>
            
            <div className="card overflow-hidden hover:shadow-hover transition-shadow duration-300">
              <img 
                src="https://images.pexels.com/photos/1708936/pexels-photo-1708936.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                alt="New campus building" 
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar size={16} className="mr-2" />
                  June 5, 2025
                </div>
                <h3 className="font-heading font-semibold text-xl mb-3">
                  New State-of-the-Art Science Building Opens
                </h3>
                <p className="text-gray-600 mb-4">
                  Our campus expands with a cutting-edge facility featuring advanced laboratories and learning spaces.
                </p>
                <a href="#" className="inline-flex items-center text-primary font-medium hover:text-primary-dark">
                  Read More <ArrowRight size={16} className="ml-1" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <Link to="#" className="btn btn-primary">
              View All News & Events
            </Link>
          </div>
        </div>
      </section>

      {/* Student Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg text-primary mb-4">Student Testimonials</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Hear from our students about their experiences and journeys at Global College.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card p-8 hover:shadow-hover transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <img 
                  src="https://images.pexels.com/photos/845434/pexels-photo-845434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                  alt="Student portrait" 
                  className="w-16 h-16 rounded-full object-cover mr-4"
                  loading="lazy"
                />
                <div>
                  <h3 className="font-heading font-semibold text-lg">Sarah Johnson</h3>
                  <p className="text-gray-600 text-sm">Computer Science, Class of 2024</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "The faculty at Global College are incredibly supportive and knowledgeable. The hands-on learning opportunities 
                in my program prepared me well for my internship at a major tech company."
              </p>
            </div>
            
            <div className="card p-8 hover:shadow-hover transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <img 
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                  alt="Student portrait" 
                  className="w-16 h-16 rounded-full object-cover mr-4"
                  loading="lazy"
                />
                <div>
                  <h3 className="font-heading font-semibold text-lg">David Martinez</h3>
                  <p className="text-gray-600 text-sm">Business Administration, Class of 2023</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "The diverse student community and global perspective in our courses have been invaluable. The networking 
                opportunities and career services helped me secure my dream job before graduation."
              </p>
            </div>
            
            <div className="card p-8 hover:shadow-hover transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <img 
                  src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                  alt="Student portrait" 
                  className="w-16 h-16 rounded-full object-cover mr-4"
                  loading="lazy"
                />
                <div>
                  <h3 className="font-heading font-semibold text-lg">Emily Chen</h3>
                  <p className="text-gray-600 text-sm">Environmental Science, Class of 2025</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "The research opportunities at Global College are outstanding. I've been able to work directly with faculty 
                on important climate initiatives and present our findings at international conferences."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white bg-cover bg-center" style={{ 
        backgroundImage: 'linear-gradient(rgba(0, 51, 102, 0.9), rgba(0, 51, 102, 0.9)), url("https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750")'
      }}>
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Join our community of scholars and innovators. Apply now to become part of the Global College family.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/admissions" className="btn btn-secondary">
              Apply Now
            </Link>
            <Link to="/contact" className="btn bg-white text-primary hover:bg-gray-100">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;