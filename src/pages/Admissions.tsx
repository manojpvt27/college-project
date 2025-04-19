import React, { useState } from 'react';
import { ChevronDown, ChevronUp, CheckCircle, AlertCircle, Calendar, Clock, DollarSign } from 'lucide-react';

// Fee structure data
const feeData = [
  {
    level: "Undergraduate Programs",
    tuition: "$25,000",
    housing: "$8,500",
    meals: "$5,200",
    books: "$1,200",
    fees: "$3,000",
    total: "$42,900"
  },
  {
    level: "Graduate Programs",
    tuition: "$32,000",
    housing: "$9,500",
    meals: "$5,200",
    books: "$1,500",
    fees: "$3,500",
    total: "$51,700"
  },
  {
    level: "International Students (Undergraduate)",
    tuition: "$28,000",
    housing: "$8,500",
    meals: "$5,200",
    books: "$1,200",
    fees: "$4,000",
    total: "$46,900"
  },
  {
    level: "International Students (Graduate)",
    tuition: "$35,000",
    housing: "$9,500",
    meals: "$5,200",
    books: "$1,500",
    fees: "$4,500",
    total: "$55,700"
  }
];

// Important dates
const datesData = [
  {
    term: "Fall 2025",
    events: [
      {
        id: 1,
        name: "Early Decision Application Deadline",
        date: "November 15, 2024"
      },
      {
        id: 2,
        name: "Early Decision Notification",
        date: "December 15, 2024"
      },
      {
        id: 3,
        name: "Regular Application Deadline",
        date: "January 15, 2025"
      },
      {
        id: 4,
        name: "Financial Aid Priority Deadline",
        date: "February 1, 2025"
      },
      {
        id: 5,
        name: "Regular Decision Notification",
        date: "March 31, 2025"
      },
      {
        id: 6,
        name: "Enrollment Deposit Due",
        date: "May 1, 2025"
      }
    ]
  },
  {
    term: "Spring 2026",
    events: [
      {
        id: 7,
        name: "Application Deadline",
        date: "October 15, 2025"
      },
      {
        id: 8,
        name: "Financial Aid Priority Deadline",
        date: "October 31, 2025"
      },
      {
        id: 9,
        name: "Decision Notification",
        date: "November 30, 2025"
      },
      {
        id: 10,
        name: "Enrollment Deposit Due",
        date: "December 15, 2025"
      }
    ]
  }
];

// FAQ data
const faqData = [
  {
    id: 1,
    question: "What are the basic requirements for admission?",
    answer: "Admission requirements include a completed application form, high school transcripts, SAT or ACT scores (optional for 2025-2026), two letters of recommendation, and a personal statement. Some programs may have additional requirements."
  },
  {
    id: 2,
    question: "How do I apply for financial aid?",
    answer: "To apply for financial aid, you need to complete the Free Application for Federal Student Aid (FAFSA) and the College's institutional aid application. Both domestic and international students are eligible for institutional scholarships and grants."
  },
  {
    id: 3,
    question: "Is standardized testing required?",
    answer: "For the 2025-2026 academic year, standardized tests (SAT/ACT) are optional but recommended. Students can choose whether to submit scores as part of their application. If submitted, test scores will be considered as one component of a holistic review process."
  },
  {
    id: 4,
    question: "Can I visit the campus before applying?",
    answer: "Yes, we encourage prospective students to visit our campus. We offer guided tours, information sessions, and opportunities to sit in on classes and meet with faculty members. Virtual tours are also available for those unable to visit in person."
  },
  {
    id: 5,
    question: "What scholarships are available?",
    answer: "We offer merit-based scholarships, need-based grants, athletic scholarships, and departmental scholarships for specific areas of study. All applicants are automatically considered for merit scholarships based on their application materials."
  },
  {
    id: 6,
    question: "Is on-campus housing guaranteed?",
    answer: "On-campus housing is guaranteed for first-year students who submit their housing application by the deadline. Transfer and upper-class students can apply for housing, but availability may be limited."
  },
  {
    id: 7,
    question: "What is the acceptance rate?",
    answer: "Our acceptance rate typically ranges from 45-55%, depending on the program and applicant pool for each year. Admission is competitive, but we consider each application holistically."
  },
  {
    id: 8,
    question: "How can international students apply?",
    answer: "International students follow the same application process with a few additional requirements: English proficiency test results (TOEFL, IELTS, or Duolingo), financial certification documents, and a copy of their passport. We also provide specialized support for visa processing."
  }
];

const Admissions = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const toggleFaq = (id: number) => {
    setExpandedFaq(expandedFaq === id ? null : id);
  };

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section 
        className="relative py-20 bg-cover bg-center"
        style={{ 
          backgroundImage: 'linear-gradient(rgba(0, 51, 102, 0.85), rgba(0, 51, 102, 0.85)), url("https://images.pexels.com/photos/3769706/pexels-photo-3769706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750")'
        }}
      >
        <div className="container-custom text-center text-white">
          <h1 className="heading-xl mb-6">Admissions</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
            Begin your journey at Global College. Our admissions team is here to guide you through every step of the application process.
          </p>
          <button className="btn btn-secondary">
            Start Your Application
          </button>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="heading-lg text-primary mb-8 text-center">Application Process</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200 md:left-1/2 md:-ml-0.5"></div>
              
              {/* Step 1 */}
              <div className="relative mb-12">
                <div className="flex items-center md:justify-between md:flex-row-reverse">
                  <div className="flex-1 md:text-right md:pr-8">
                    <h3 className="font-heading font-semibold text-xl text-primary mb-2">Research Programs</h3>
                    <p className="text-gray-600">
                      Explore our academic offerings to find the program that matches your interests and career goals.
                    </p>
                  </div>
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center z-10 mr-4 md:mx-0">
                    1
                  </div>
                  <div className="hidden md:block flex-1 md:pl-8"></div>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="relative mb-12">
                <div className="flex items-center md:justify-between">
                  <div className="flex-1 md:pl-8">
                    <h3 className="font-heading font-semibold text-xl text-primary mb-2">Prepare Your Application</h3>
                    <p className="text-gray-600">
                      Gather necessary documents: transcripts, test scores, letters of recommendation, and personal statement.
                    </p>
                  </div>
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center z-10 mr-4 md:mx-0">
                    2
                  </div>
                  <div className="hidden md:block flex-1 md:text-right md:pr-8"></div>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="relative mb-12">
                <div className="flex items-center md:justify-between md:flex-row-reverse">
                  <div className="flex-1 md:text-right md:pr-8">
                    <h3 className="font-heading font-semibold text-xl text-primary mb-2">Submit Application</h3>
                    <p className="text-gray-600">
                      Complete the online application form and pay the application fee. Early applications are encouraged.
                    </p>
                  </div>
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center z-10 mr-4 md:mx-0">
                    3
                  </div>
                  <div className="hidden md:block flex-1 md:pl-8"></div>
                </div>
              </div>
              
              {/* Step 4 */}
              <div className="relative mb-12">
                <div className="flex items-center md:justify-between">
                  <div className="flex-1 md:pl-8">
                    <h3 className="font-heading font-semibold text-xl text-primary mb-2">Apply for Financial Aid</h3>
                    <p className="text-gray-600">
                      Complete the FAFSA and institutional aid applications to be considered for scholarships and grants.
                    </p>
                  </div>
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center z-10 mr-4 md:mx-0">
                    4
                  </div>
                  <div className="hidden md:block flex-1 md:text-right md:pr-8"></div>
                </div>
              </div>
              
              {/* Step 5 */}
              <div className="relative mb-12">
                <div className="flex items-center md:justify-between md:flex-row-reverse">
                  <div className="flex-1 md:text-right md:pr-8">
                    <h3 className="font-heading font-semibold text-xl text-primary mb-2">Receive Decision</h3>
                    <p className="text-gray-600">
                      Admission decisions are typically sent within 4-6 weeks after your application is complete.
                    </p>
                  </div>
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center z-10 mr-4 md:mx-0">
                    5
                  </div>
                  <div className="hidden md:block flex-1 md:pl-8"></div>
                </div>
              </div>
              
              {/* Step 6 */}
              <div className="relative">
                <div className="flex items-center md:justify-between">
                  <div className="flex-1 md:pl-8">
                    <h3 className="font-heading font-semibold text-xl text-primary mb-2">Submit Enrollment Deposit</h3>
                    <p className="text-gray-600">
                      If accepted, secure your spot by submitting your enrollment deposit by the deadline.
                    </p>
                  </div>
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center z-10 mr-4 md:mx-0">
                    6
                  </div>
                  <div className="hidden md:block flex-1 md:text-right md:pr-8"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements Checklist */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-lg text-primary mb-8 text-center">Requirements Checklist</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="font-heading font-semibold text-xl mb-4">Undergraduate Admission Requirements</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-success mr-3 flex-shrink-0" />
                    <span>Completed online application form</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-success mr-3 flex-shrink-0" />
                    <span>Official high school transcripts</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-success mr-3 flex-shrink-0" />
                    <span>SAT or ACT scores (optional for 2025-2026)</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-success mr-3 flex-shrink-0" />
                    <span>Two letters of recommendation</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-success mr-3 flex-shrink-0" />
                    <span>Personal statement (500-650 words)</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-success mr-3 flex-shrink-0" />
                    <span>Application fee ($50 domestic, $75 international)</span>
                  </div>
                </div>
              </div>
              
              <div className="border-t border-gray-100 p-6">
                <h3 className="font-heading font-semibold text-xl mb-4">Graduate Admission Requirements</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-success mr-3 flex-shrink-0" />
                    <span>Completed online application form</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-success mr-3 flex-shrink-0" />
                    <span>Official undergraduate transcripts</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-success mr-3 flex-shrink-0" />
                    <span>GRE or GMAT scores (program-specific)</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-success mr-3 flex-shrink-0" />
                    <span>Three letters of recommendation</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-success mr-3 flex-shrink-0" />
                    <span>Statement of purpose</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-success mr-3 flex-shrink-0" />
                    <span>Resume or CV</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-success mr-3 flex-shrink-0" />
                    <span>Application fee ($75 domestic, $100 international)</span>
                  </div>
                </div>
              </div>
              
              <div className="border-t border-gray-100 p-6 bg-gray-50">
                <h3 className="font-heading font-semibold text-xl mb-4">Additional Requirements for International Students</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <AlertCircle className="w-5 h-5 text-warning mr-3 flex-shrink-0" />
                    <span>English proficiency test scores (TOEFL, IELTS, or Duolingo)</span>
                  </div>
                  <div className="flex items-center">
                    <AlertCircle className="w-5 h-5 text-warning mr-3 flex-shrink-0" />
                    <span>Financial certification documents</span>
                  </div>
                  <div className="flex items-center">
                    <AlertCircle className="w-5 h-5 text-warning mr-3 flex-shrink-0" />
                    <span>Copy of passport</span>
                  </div>
                  <div className="flex items-center">
                    <AlertCircle className="w-5 h-5 text-warning mr-3 flex-shrink-0" />
                    <span>Credential evaluation for non-US academic documents</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="heading-lg text-primary mb-8 text-center">Important Dates & Deadlines</h2>
          
          <div className="max-w-4xl mx-auto">
            {datesData.map((term, index) => (
              <div key={term.term} className={index !== 0 ? 'mt-10' : ''}>
                <h3 className="font-heading font-semibold text-xl mb-6 flex items-center">
                  <Calendar className="w-5 h-5 text-secondary mr-2" /> {term.term}
                </h3>
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  {term.events.map((event, eventIndex) => (
                    <div 
                      key={event.id}
                      className={`p-4 flex justify-between items-center ${
                        eventIndex !== 0 ? 'border-t border-gray-100' : ''
                      }`}
                    >
                      <div className="flex items-center">
                        <Clock className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                        <span>{event.name}</span>
                      </div>
                      <span className="font-medium">{event.date}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-lg text-primary mb-8 text-center">Fee Structure</h2>
          
          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg shadow-md overflow-hidden">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="py-4 px-6 text-left">Program Level</th>
                  <th className="py-4 px-6 text-right">Tuition</th>
                  <th className="py-4 px-6 text-right">Housing</th>
                  <th className="py-4 px-6 text-right">Meals</th>
                  <th className="py-4 px-6 text-right">Books</th>
                  <th className="py-4 px-6 text-right">Fees</th>
                  <th className="py-4 px-6 text-right font-bold">Total</th>
                </tr>
              </thead>
              <tbody>
                {feeData.map((fee, index) => (
                  <tr 
                    key={fee.level}
                    className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                  >
                    <td className="py-4 px-6 border-t border-gray-100 font-medium">{fee.level}</td>
                    <td className="py-4 px-6 border-t border-gray-100 text-right">{fee.tuition}</td>
                    <td className="py-4 px-6 border-t border-gray-100 text-right">{fee.housing}</td>
                    <td className="py-4 px-6 border-t border-gray-100 text-right">{fee.meals}</td>
                    <td className="py-4 px-6 border-t border-gray-100 text-right">{fee.books}</td>
                    <td className="py-4 px-6 border-t border-gray-100 text-right">{fee.fees}</td>
                    <td className="py-4 px-6 border-t border-gray-100 text-right font-bold">{fee.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="max-w-4xl mx-auto mt-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-heading font-semibold text-xl mb-4 flex items-center">
                <DollarSign className="w-5 h-5 text-secondary mr-2" /> Financial Aid & Scholarships
              </h3>
              <p className="text-gray-600 mb-4">
                We're committed to making education accessible. Over 75% of our students receive some form of financial aid or scholarship.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="border border-gray-200 rounded-md p-4">
                  <h4 className="font-medium text-primary mb-2">Merit Scholarships</h4>
                  <p className="text-gray-600 text-sm">
                    Based on academic achievement, ranging from $5,000 to full tuition.
                  </p>
                </div>
                <div className="border border-gray-200 rounded-md p-4">
                  <h4 className="font-medium text-primary mb-2">Need-Based Grants</h4>
                  <p className="text-gray-600 text-sm">
                    Based on financial need, as determined by the FAFSA and institutional forms.
                  </p>
                </div>
                <div className="border border-gray-200 rounded-md p-4">
                  <h4 className="font-medium text-primary mb-2">Work-Study Programs</h4>
                  <p className="text-gray-600 text-sm">
                    Part-time employment opportunities on campus to help with educational expenses.
                  </p>
                </div>
                <div className="border border-gray-200 rounded-md p-4">
                  <h4 className="font-medium text-primary mb-2">Departmental Scholarships</h4>
                  <p className="text-gray-600 text-sm">
                    Specific to academic departments or programs, based on talent and qualifications.
                  </p>
                </div>
              </div>
              <button className="btn btn-primary">
                Explore Financial Aid Options
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="heading-lg text-primary mb-8 text-center">Frequently Asked Questions</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {faqData.map(faq => (
                <div key={faq.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <button
                    className="w-full text-left p-6 flex justify-between items-center focus:outline-none"
                    onClick={() => toggleFaq(faq.id)}
                    aria-expanded={expandedFaq === faq.id}
                    aria-controls={`faq-answer-${faq.id}`}
                  >
                    <h3 className="font-heading font-semibold text-lg">{faq.question}</h3>
                    {expandedFaq === faq.id ? (
                      <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-primary flex-shrink-0" />
                    )}
                  </button>
                  <div
                    id={`faq-answer-${faq.id}`}
                    className={`px-6 pb-6 text-gray-600 transition-all duration-300 ${
                      expandedFaq === faq.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                    }`}
                  >
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-6">Ready to Apply?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Start your application today or contact our admissions team for more information.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="btn btn-secondary">
              Start Your Application
            </button>
            <button className="btn bg-white text-primary hover:bg-gray-100">
              Contact Admissions
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admissions;