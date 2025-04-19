import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Search, BookOpen, Users, Clock, Award, Briefcase } from 'lucide-react';

const programData = [
  {
    id: 1,
    name: "Computer Science",
    department: "Engineering",
    level: "Undergraduate",
    duration: "4 years",
    intake: "Fall, Spring",
    description: "Our Computer Science program provides students with a strong foundation in computing principles, algorithms, programming languages, and software development. Students explore emerging areas such as artificial intelligence, data science, and cybersecurity.",
    eligibility: "High school diploma with strong math background, SAT/ACT scores, personal statement",
    careers: "Software Developer, Data Scientist, Systems Analyst, Cybersecurity Specialist, AI Engineer",
    image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
  },
  {
    id: 2,
    name: "Business Administration",
    department: "Business",
    level: "Undergraduate",
    duration: "4 years",
    intake: "Fall, Spring",
    description: "The Business Administration program develops future business leaders with a comprehensive understanding of management principles, marketing, finance, and entrepreneurship. Students gain practical experience through case studies and internships.",
    eligibility: "High school diploma, SAT/ACT scores, personal statement, interview",
    careers: "Business Analyst, Marketing Manager, Financial Advisor, Human Resources Manager, Entrepreneur",
    image: "https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
  },
  {
    id: 3,
    name: "Environmental Science",
    department: "Science",
    level: "Undergraduate",
    duration: "4 years",
    intake: "Fall",
    description: "The Environmental Science program focuses on understanding the natural environment and the impact of human activities. Students study ecology, conservation biology, environmental policy, and sustainable resource management.",
    eligibility: "High school diploma with strong science background, SAT/ACT scores, personal statement",
    careers: "Environmental Consultant, Conservation Scientist, Sustainability Specialist, Policy Analyst, Research Scientist",
    image: "https://images.pexels.com/photos/2990650/pexels-photo-2990650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
  },
  {
    id: 4,
    name: "Psychology",
    department: "Social Sciences",
    level: "Undergraduate",
    duration: "4 years",
    intake: "Fall, Spring",
    description: "Our Psychology program explores human behavior, cognition, and mental processes. Students gain insights into clinical, developmental, social, and cognitive psychology through coursework, research, and practical experiences.",
    eligibility: "High school diploma, SAT/ACT scores, personal statement",
    careers: "Counselor, Research Assistant, Human Resources Specialist, Social Services Coordinator, Graduate studies in Clinical Psychology",
    image: "https://images.pexels.com/photos/6238050/pexels-photo-6238050.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
  },
  {
    id: 5,
    name: "Electrical Engineering",
    department: "Engineering",
    level: "Undergraduate",
    duration: "4 years",
    intake: "Fall",
    description: "The Electrical Engineering program provides a strong foundation in circuit design, electronics, signal processing, and power systems. Students participate in hands-on laboratory experiences and team-based design projects.",
    eligibility: "High school diploma with strong math and physics background, SAT/ACT scores, personal statement",
    careers: "Electrical Engineer, Electronics Engineer, Power Systems Engineer, Telecommunications Engineer, Control Systems Engineer",
    image: "https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
  },
  {
    id: 6,
    name: "Data Science",
    department: "Engineering",
    level: "Graduate",
    duration: "2 years",
    intake: "Fall",
    description: "The Master's in Data Science program prepares students for careers in analyzing and interpreting complex data. Coursework covers statistics, machine learning, data visualization, and big data technologies.",
    eligibility: "Bachelor's degree in a related field, GRE scores, letters of recommendation, statement of purpose",
    careers: "Data Scientist, Machine Learning Engineer, Data Analyst, Business Intelligence Developer, Research Scientist",
    image: "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
  },
  {
    id: 7,
    name: "MBA",
    department: "Business",
    level: "Graduate",
    duration: "2 years",
    intake: "Fall, Spring",
    description: "Our MBA program develops strategic leaders ready to excel in a global business environment. The curriculum balances theory and practice, covering management, finance, marketing, operations, and leadership.",
    eligibility: "Bachelor's degree, 2+ years work experience preferred, GMAT/GRE scores, essays, interview",
    careers: "Business Executive, Management Consultant, Investment Banker, Marketing Director, Entrepreneur",
    image: "https://images.pexels.com/photos/3153201/pexels-photo-3153201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
  },
  {
    id: 8,
    name: "Nursing",
    department: "Health Sciences",
    level: "Undergraduate",
    duration: "4 years",
    intake: "Fall",
    description: "The Nursing program combines theoretical knowledge with clinical practice to prepare compassionate and skilled nurses. Students gain experience in various healthcare settings under supervision.",
    eligibility: "High school diploma with strong science background, SAT/ACT scores, personal statement, health clearance",
    careers: "Registered Nurse, Pediatric Nurse, Critical Care Nurse, Surgical Nurse, Public Health Nurse",
    image: "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
  }
];

const Academics = () => {
  const [expandedProgram, setExpandedProgram] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterDepartment, setFilterDepartment] = useState('All');
  const [filterLevel, setFilterLevel] = useState('All');
  
  const departments = ['All', ...Array.from(new Set(programData.map(program => program.department)))];
  const levels = ['All', ...Array.from(new Set(programData.map(program => program.level)))];

  const filteredPrograms = programData.filter(program => {
    const matchesSearch = program.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          program.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = filterDepartment === 'All' || program.department === filterDepartment;
    const matchesLevel = filterLevel === 'All' || program.level === filterLevel;
    
    return matchesSearch && matchesDepartment && matchesLevel;
  });

  const toggleProgram = (id: number) => {
    setExpandedProgram(expandedProgram === id ? null : id);
  };

  return (
    <div className="pt-24 pb-16">
      <section 
        className="py-16 bg-primary text-white bg-cover bg-center"
        style={{ 
          backgroundImage: 'linear-gradient(rgba(0, 51, 102, 0.9), rgba(0, 51, 102, 0.9)), url("https://images.pexels.com/photos/159775/library-la-trobe-study-students-159775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750")'
        }}
      >
        <div className="container-custom text-center">
          <h1 className="heading-xl mb-6">Academic Programs</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Explore our diverse range of undergraduate and graduate programs designed to prepare you for success.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar with filters */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-white rounded-lg shadow-md p-6">
                <h2 className="font-heading font-semibold text-xl mb-4 text-primary">Find Your Program</h2>
                
                {/* Search */}
                <div className="mb-6">
                  <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
                    Search
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="search"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      placeholder="Search programs..."
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <Search className="absolute right-3 top-2.5 text-gray-400" size={18} />
                  </div>
                </div>
                
                {/* Department Filter */}
                <div className="mb-6">
                  <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-1">
                    Department
                  </label>
                  <select
                    id="department"
                    value={filterDepartment}
                    onChange={(e) => setFilterDepartment(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    {departments.map(department => (
                      <option key={department} value={department}>{department}</option>
                    ))}
                  </select>
                </div>
                
                {/* Level Filter */}
                <div className="mb-6">
                  <label htmlFor="level" className="block text-sm font-medium text-gray-700 mb-1">
                    Level
                  </label>
                  <select
                    id="level"
                    value={filterLevel}
                    onChange={(e) => setFilterLevel(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    {levels.map(level => (
                      <option key={level} value={level}>{level}</option>
                    ))}
                  </select>
                </div>
                
                <button 
                  onClick={() => {
                    setSearchTerm('');
                    setFilterDepartment('All');
                    setFilterLevel('All');
                  }}
                  className="w-full px-4 py-2 text-sm text-primary border border-primary rounded-md hover:bg-primary hover:text-white transition-colors"
                >
                  Reset Filters
                </button>
              </div>
            </div>
            
            {/* Program listings */}
            <div className="lg:col-span-3">
              <h2 className="font-heading font-semibold text-2xl mb-6 text-primary">Available Programs</h2>
              
              {filteredPrograms.length === 0 ? (
                <div className="bg-gray-50 p-8 rounded-lg text-center">
                  <p className="text-gray-600">No programs match your current filters. Please try different criteria.</p>
                </div>
              ) : (
                <div className="space-y-6">
                  {filteredPrograms.map(program => (
                    <div key={program.id} className="card overflow-hidden transition-all duration-300">
                      <div 
                        className="p-6 flex flex-col md:flex-row md:items-center justify-between cursor-pointer"
                        onClick={() => toggleProgram(program.id)}
                      >
                        <div className="flex-grow">
                          <div className="flex items-center mb-1">
                            <h3 className="font-heading font-semibold text-xl text-primary">{program.name}</h3>
                            <span className="ml-3 px-3 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-800">
                              {program.level}
                            </span>
                          </div>
                          <p className="text-gray-600 text-sm mb-2">
                            <span className="font-medium">{program.department}</span> • {program.duration}
                          </p>
                          <p className="text-gray-700 line-clamp-2">
                            {program.description}
                          </p>
                        </div>
                        <div className="flex items-center mt-4 md:mt-0">
                          <button
                            aria-label={expandedProgram === program.id ? "Collapse program details" : "Expand program details"}
                            className="ml-4 p-2 text-primary hover:bg-primary hover:text-white rounded-full transition-colors"
                          >
                            {expandedProgram === program.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                          </button>
                        </div>
                      </div>
                      
                      {expandedProgram === program.id && (
                        <div className="border-t border-gray-100 p-6 bg-gray-50 animate-fade-in">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <img 
                                src={program.image}
                                alt={program.name}
                                className="w-full h-64 object-cover rounded-lg mb-4"
                                loading="lazy"
                              />
                              <div className="space-y-3">
                                <div className="flex items-center">
                                  <Clock className="w-5 h-5 text-primary mr-2" />
                                  <span className="text-gray-700"><strong>Duration:</strong> {program.duration}</span>
                                </div>
                                <div className="flex items-center">
                                  <BookOpen className="w-5 h-5 text-primary mr-2" />
                                  <span className="text-gray-700"><strong>Intake:</strong> {program.intake}</span>
                                </div>
                              </div>
                            </div>
                            
                            <div className="space-y-4">
                              <div>
                                <h4 className="font-heading font-semibold text-lg flex items-center">
                                  <Users className="w-5 h-5 text-secondary mr-2" /> Eligibility Criteria
                                </h4>
                                <p className="text-gray-700 mt-1">{program.eligibility}</p>
                              </div>
                              
                              <div>
                                <h4 className="font-heading font-semibold text-lg flex items-center">
                                  <Briefcase className="w-5 h-5 text-secondary mr-2" /> Career Prospects
                                </h4>
                                <p className="text-gray-700 mt-1">{program.careers}</p>
                              </div>
                              
                              <div className="mt-6 pt-4">
                                <button className="btn btn-primary">Apply for this Program</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 text-white">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-6">Ready to Begin Your Academic Journey?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Contact our admissions team to learn more about our programs, application process, and financial aid options.
          </p>
          <button className="btn bg-white text-primary hover:bg-gray-100">
            Contact Admissions
          </button>
        </div>
      </section>
    </div>
  );
};

export default Academics;