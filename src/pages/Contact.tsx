import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, CheckCircle } from 'lucide-react';

// Department contacts data
const departmentContacts = [
  {
    id: 1,
    name: "Admissions Office",
    email: "admissions@globalcollege.edu",
    phone: "+1 (555) 123-4567",
    hours: "Monday-Friday: 8:30 AM - 5:00 PM"
  },
  {
    id: 2,
    name: "Financial Aid Office",
    email: "finaid@globalcollege.edu",
    phone: "+1 (555) 123-4568",
    hours: "Monday-Friday: 9:00 AM - 4:30 PM"
  },
  {
    id: 3,
    name: "Registrar's Office",
    email: "registrar@globalcollege.edu",
    phone: "+1 (555) 123-4569",
    hours: "Monday-Friday: 8:30 AM - 5:00 PM"
  },
  {
    id: 4,
    name: "Student Affairs",
    email: "studentaffairs@globalcollege.edu",
    phone: "+1 (555) 123-4570",
    hours: "Monday-Friday: 9:00 AM - 5:00 PM"
  },
  {
    id: 5,
    name: "Career Services",
    email: "careers@globalcollege.edu",
    phone: "+1 (555) 123-4571",
    hours: "Monday-Friday: 9:00 AM - 5:00 PM"
  },
  {
    id: 6,
    name: "Information Technology",
    email: "helpdesk@globalcollege.edu",
    phone: "+1 (555) 123-4572",
    hours: "Monday-Friday: 8:00 AM - 6:00 PM"
  }
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    type: 'general'
  });
  
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when field is changed
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: ''
      });
    }
  };
  
  const validateForm = () => {
    const errors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    
    if (!formData.subject.trim()) {
      errors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      errors.message = 'Message must be at least 10 characters';
    }
    
    return errors;
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const errors = validateForm();
    
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    
    // Form is valid, submit it
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      type: 'general'
    });
  };

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section 
        className="relative py-16 bg-cover bg-center"
        style={{ 
          backgroundImage: 'linear-gradient(rgba(0, 51, 102, 0.85), rgba(0, 51, 102, 0.85)), url("https://images.pexels.com/photos/693859/pexels-photo-693859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750")'
        }}
      >
        <div className="container-custom text-center text-white">
          <h1 className="heading-xl mb-6">Contact Us</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            We're here to help you with any questions about our programs, admissions process, campus life, or general inquiries.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary text-white rounded-full mb-4">
                <MapPin size={24} />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">Our Location</h3>
              <p className="text-gray-600">
                123 Education Ave<br />
                Academic City, State 12345<br />
                United States
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary text-white rounded-full mb-4">
                <Mail size={24} />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">Email Us</h3>
              <p className="text-gray-600">
                General Inquiries<br />
                <a href="mailto:info@globalcollege.edu" className="text-primary hover:text-primary-dark">
                  info@globalcollege.edu
                </a>
              </p>
              <p className="text-gray-600 mt-2">
                Admissions<br />
                <a href="mailto:admissions@globalcollege.edu" className="text-primary hover:text-primary-dark">
                  admissions@globalcollege.edu
                </a>
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary text-white rounded-full mb-4">
                <Phone size={24} />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">Call Us</h3>
              <p className="text-gray-600">
                Main Office<br />
                <a href="tel:+15551234567" className="text-primary hover:text-primary-dark">
                  +1 (555) 123-4567
                </a>
              </p>
              <p className="text-gray-600 mt-2">
                Toll-Free<br />
                <a href="tel:+18001234567" className="text-primary hover:text-primary-dark">
                  +1 (800) 123-4567
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="heading-lg text-primary mb-6">Get in Touch</h2>
              
              {formSubmitted ? (
                <div className="bg-success/10 border border-success rounded-lg p-6 text-center animate-fade-in">
                  <CheckCircle className="w-16 h-16 text-success mx-auto mb-4" />
                  <h3 className="font-heading font-semibold text-xl mb-2">Thank You!</h3>
                  <p className="text-gray-700">
                    Your message has been sent successfully. We'll get back to you as soon as possible.
                  </p>
                  <button 
                    onClick={() => setFormSubmitted(false)} 
                    className="mt-4 btn btn-primary"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Name <span className="text-error">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${
                          formErrors.name ? 'border-error' : 'border-gray-300'
                        }`}
                      />
                      {formErrors.name && (
                        <p className="mt-1 text-sm text-error">{formErrors.name}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address <span className="text-error">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${
                          formErrors.email ? 'border-error' : 'border-gray-300'
                        }`}
                      />
                      {formErrors.email && (
                        <p className="mt-1 text-sm text-error">{formErrors.email}</p>
                      )}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">
                        Inquiry Type
                      </label>
                      <select
                        id="type"
                        name="type"
                        value={formData.type}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value="general">General Inquiry</option>
                        <option value="admissions">Admissions</option>
                        <option value="financial">Financial Aid</option>
                        <option value="academics">Academic Programs</option>
                        <option value="campus">Campus Visit</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject <span className="text-error">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${
                        formErrors.subject ? 'border-error' : 'border-gray-300'
                      }`}
                    />
                    {formErrors.subject && (
                      <p className="mt-1 text-sm text-error">{formErrors.subject}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message <span className="text-error">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${
                        formErrors.message ? 'border-error' : 'border-gray-300'
                      }`}
                    ></textarea>
                    {formErrors.message && (
                      <p className="mt-1 text-sm text-error">{formErrors.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <button type="submit" className="btn btn-primary flex items-center">
                      <Send size={16} className="mr-2" /> Send Message
                    </button>
                  </div>
                </form>
              )}
            </div>
            
            {/* Map */}
            <div>
              <h2 className="heading-lg text-primary mb-6">Find Us</h2>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="aspect-video bg-gray-200 relative">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.33750346623!2d-73.97968099999999!3d40.6974881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sca!4v1623181268117!5m2!1sen!2sca" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy"
                    title="Campus Map"
                    className="absolute inset-0"
                  ></iframe>
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-semibold text-lg mb-3">Campus Information</h3>
                  <div className="space-y-2 text-gray-600">
                    <p className="flex items-start">
                      <MapPin className="w-5 h-5 text-primary mt-1 mr-2 flex-shrink-0" />
                      <span>123 Education Ave, Academic City, State 12345, United States</span>
                    </p>
                    <p>
                      Our campus is conveniently located in the heart of Academic City, easily accessible by public transportation and with ample parking available for visitors.
                    </p>
                    <p className="font-medium mt-2">
                      Campus Operating Hours:
                    </p>
                    <ul className="list-disc list-inside ml-2">
                      <li>Monday-Friday: 7:00 AM - 10:00 PM</li>
                      <li>Saturday: 8:00 AM - 6:00 PM</li>
                      <li>Sunday: 10:00 AM - 4:00 PM</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Department Directory */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-lg text-primary mb-8 text-center">Department Directory</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departmentContacts.map(dept => (
              <div key={dept.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                <h3 className="font-heading font-semibold text-lg mb-3 text-primary">{dept.name}</h3>
                <div className="space-y-2 text-gray-600">
                  <p className="flex items-center">
                    <Mail className="w-4 h-4 text-secondary mr-2 flex-shrink-0" />
                    <a href={`mailto:${dept.email}`} className="hover:text-primary transition-colors">
                      {dept.email}
                    </a>
                  </p>
                  <p className="flex items-center">
                    <Phone className="w-4 h-4 text-secondary mr-2 flex-shrink-0" />
                    <a href={`tel:${dept.phone}`} className="hover:text-primary transition-colors">
                      {dept.phone}
                    </a>
                  </p>
                  <p className="flex items-center">
                    <Clock className="w-4 h-4 text-secondary mr-2 flex-shrink-0" />
                    <span>{dept.hours}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Links */}
      <section className="py-16">
        <div className="container-custom text-center">
          <h2 className="heading-lg text-primary mb-6">Connect With Us</h2>
          <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
            Stay updated with the latest news, events, and announcements by following us on social media.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#" className="inline-flex items-center justify-center w-14 h-14 bg-[#1877F2] text-white rounded-full hover:opacity-90 transition-opacity">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            
            <a href="#" className="inline-flex items-center justify-center w-14 h-14 bg-[#1DA1F2] text-white rounded-full hover:opacity-90 transition-opacity">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </a>
            
            <a href="#" className="inline-flex items-center justify-center w-14 h-14 bg-[#E4405F] text-white rounded-full hover:opacity-90 transition-opacity">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>
            </a>
            
            <a href="#" className="inline-flex items-center justify-center w-14 h-14 bg-[#0A66C2] text-white rounded-full hover:opacity-90 transition-opacity">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect width="4" height="12" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            
            <a href="#" className="inline-flex items-center justify-center w-14 h-14 bg-[#FF0000] text-white rounded-full hover:opacity-90 transition-opacity">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-youtube">
                <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
                <path d="m10 15 5-3-5-3z"></path>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;