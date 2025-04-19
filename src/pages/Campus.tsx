import React, { useState } from 'react';
import { Play } from 'lucide-react';

// Campus facilities data
const facilitiesData = [
  {
    id: 1,
    name: "Modern Library",
    icon: "📚",
    description: "Our state-of-the-art library houses over 500,000 physical volumes and provides access to millions of digital resources."
  },
  {
    id: 2,
    name: "Research Labs",
    icon: "🔬",
    description: "Advanced research laboratories equipped with the latest technology for scientific investigation and innovation."
  },
  {
    id: 3,
    name: "Student Center",
    icon: "🏢",
    description: "A central hub for student activities, dining, meetings, and relaxation between classes."
  },
  {
    id: 4,
    name: "Sports Complex",
    icon: "🏆",
    description: "Olympic-sized swimming pool, fitness center, basketball courts, and athletic fields for recreational and competitive sports."
  },
  {
    id: 5,
    name: "Performing Arts Center",
    icon: "🎭",
    description: "A 500-seat theater, music practice rooms, and dance studios for creative expression and cultural events."
  },
  {
    id: 6,
    name: "Technology Hub",
    icon: "💻",
    description: "Cutting-edge computer labs, maker spaces, and technology resources available to all students."
  },
  {
    id: 7,
    name: "Health Center",
    icon: "🏥",
    description: "Comprehensive healthcare services including medical care, counseling, and wellness programs."
  },
  {
    id: 8,
    name: "Residence Halls",
    icon: "🏠",
    description: "Modern, comfortable housing options with amenities to support student life and academic success."
  }
];

// Student clubs data
const clubsData = [
  {
    id: 1,
    name: "Student Government Association",
    category: "Leadership",
    description: "Represent student interests, organize events, and advocate for campus improvements.",
    image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
  },
  {
    id: 2,
    name: "Robotics Club",
    category: "Academic",
    description: "Design, build, and program robots for competitions and demonstrations.",
    image: "https://images.pexels.com/photos/8566531/pexels-photo-8566531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
  },
  {
    id: 3,
    name: "Environmental Club",
    category: "Service",
    description: "Promote sustainability initiatives and environmental awareness on campus and beyond.",
    image: "https://images.pexels.com/photos/6591154/pexels-photo-6591154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
  },
  {
    id: 4,
    name: "Drama Society",
    category: "Arts",
    description: "Produce theatrical performances ranging from classic plays to student-written works.",
    image: "https://images.pexels.com/photos/7095506/pexels-photo-7095506.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
  },
  {
    id: 5,
    name: "International Students Association",
    category: "Cultural",
    description: "Celebrate diverse cultures and support international students in their transition to campus life.",
    image: "https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
  },
  {
    id: 6,
    name: "Debate Team",
    category: "Academic",
    description: "Participate in competitive debate tournaments on a variety of contemporary topics.",
    image: "https://images.pexels.com/photos/8422057/pexels-photo-8422057.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
  }
];

// Campus gallery images
const galleryImages = [
  {
    id: 1,
    url: "https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    alt: "Campus main building",
    width: "wide"
  },
  {
    id: 2,
    url: "https://images.pexels.com/photos/159490/yale-university-landscape-universities-schools-159490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    alt: "Historic campus architecture",
    width: "normal"
  },
  {
    id: 3,
    url: "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    alt: "Modern lecture hall",
    width: "normal"
  },
  {
    id: 4,
    url: "https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    alt: "Campus library interior",
    width: "normal"
  },
  {
    id: 5,
    url: "https://images.pexels.com/photos/159775/library-la-trobe-study-students-159775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    alt: "Students studying in library",
    width: "wide"
  },
  {
    id: 6,
    url: "https://images.pexels.com/photos/1516440/pexels-photo-1516440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    alt: "Research laboratory",
    width: "normal"
  },
  {
    id: 7,
    url: "https://images.pexels.com/photos/2027563/pexels-photo-2027563.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    alt: "Campus dormitory room",
    width: "normal"
  },
  {
    id: 8,
    url: "https://images.pexels.com/photos/5818614/pexels-photo-5818614.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    alt: "Student recreation center",
    width: "normal"
  },
  {
    id: 9,
    url: "https://images.pexels.com/photos/1181233/pexels-photo-1181233.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    alt: "Students collaborating",
    width: "wide"
  }
];

const Campus = () => {
  const [showVirtualTour, setShowVirtualTour] = useState(false);
  const [clubFilter, setClubFilter] = useState('All');

  const clubCategories = ['All', ...Array.from(new Set(clubsData.map(club => club.category)))];
  
  const filteredClubs = clubsData.filter(club => 
    clubFilter === 'All' || club.category === clubFilter
  );

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section 
        className="relative py-20 bg-cover bg-center"
        style={{ 
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750")'
        }}
      >
        <div className="container-custom text-center text-white">
          <h1 className="heading-xl mb-6">Campus Life</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
            Experience a vibrant campus community with state-of-the-art facilities, diverse student organizations, and endless opportunities for growth.
          </p>
          <button 
            onClick={() => setShowVirtualTour(true)}
            className="btn bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm focus:ring-white"
          >
            <Play size={16} className="mr-2" /> Virtual Tour
          </button>
        </div>
      </section>

      {/* Virtual Tour Modal */}
      {showVirtualTour && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4" onClick={() => setShowVirtualTour(false)}>
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden" onClick={e => e.stopPropagation()}>
            <div className="p-4 border-b flex justify-between items-center">
              <h3 className="font-heading font-semibold text-xl">Virtual Campus Tour</h3>
              <button 
                onClick={() => setShowVirtualTour(false)}
                className="text-gray-500 hover:text-gray-700"
                aria-label="Close virtual tour"
              >
                &times;
              </button>
            </div>
            <div className="p-6 text-center">
              <div className="aspect-video bg-gray-100 mb-4 flex items-center justify-center">
                <p className="text-gray-500">Virtual tour video would appear here</p>
              </div>
              <p className="text-gray-600">
                Our interactive virtual tour is currently being updated with new features. 
                Please check back soon or schedule an in-person campus visit through our admissions office.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Campus Gallery */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="heading-lg text-primary mb-8 text-center">Campus Gallery</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map(image => (
              <div 
                key={image.id} 
                className={`overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ${
                  image.width === 'wide' ? 'md:col-span-2' : ''
                }`}
              >
                <img 
                  src={image.url} 
                  alt={image.alt}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-lg text-primary mb-8 text-center">Campus Facilities</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilitiesData.map(facility => (
              <div key={facility.id} className="card p-6 hover:shadow-hover transition-shadow duration-300">
                <div className="text-4xl mb-4">{facility.icon}</div>
                <h3 className="font-heading font-semibold text-xl mb-3 text-primary">{facility.name}</h3>
                <p className="text-gray-600">{facility.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Clubs & Activities */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="heading-lg text-primary mb-8 text-center">Student Clubs & Activities</h2>
          
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {clubCategories.map(category => (
              <button
                key={category}
                onClick={() => setClubFilter(category)}
                className={`px-4 py-2 rounded-full text-sm transition-colors ${
                  clubFilter === category
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredClubs.map(club => (
              <div key={club.id} className="card overflow-hidden hover:shadow-hover transition-all duration-300">
                <img 
                  src={club.image} 
                  alt={club.name}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-heading font-semibold text-lg text-primary">{club.name}</h3>
                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-800">
                      {club.category}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{club.description}</p>
                  <button className="text-primary font-medium hover:text-primary-dark">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <button className="btn btn-primary">
              View All Clubs & Organizations
            </button>
          </div>
        </div>
      </section>

      {/* Campus Map */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-lg text-primary mb-8 text-center">Campus Map</h2>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="aspect-[16/9] bg-gray-200 relative">
              <img 
                src="https://images.pexels.com/photos/4090599/pexels-photo-4090599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                alt="Campus map"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <p className="text-white text-xl font-bold">Interactive Campus Map</p>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">
                Explore our campus layout and locate important buildings, facilities, and landmarks.
                For a detailed interactive map experience, visit our campus in person or contact the admissions office.
              </p>
              <button className="btn btn-primary">
                Download Printable Map
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-6">Experience Campus Life Firsthand</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            The best way to understand our vibrant community is to visit in person. Schedule a campus tour today!
          </p>
          <button className="btn bg-white text-primary hover:bg-gray-100">
            Schedule a Visit
          </button>
        </div>
      </section>
    </div>
  );
};

export default Campus;