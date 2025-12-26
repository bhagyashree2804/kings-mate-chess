import React, { useState } from 'react';
import ContactForm from '../components/ContactForm';
import './Home.css';

const Home = () => {
  const [showContactForm, setShowContactForm] = useState(false);

  // Why Kings Mate Academy section
  const whyKMC = [
    {
      icon: '♔',
      title: 'FIDE Rated Coaches',
      description: 'Learn from internationally recognized FIDE-rated chess masters with years of tournament experience'
    },
    {
      icon: '🎓',
      title: 'World-Class Platform',
      description: 'Interactive learning modules, real-time analysis, and comprehensive progress tracking'
    },
    {
      icon: '💰',
      title: 'Affordable Excellence',
      description: 'Premium chess education at accessible prices, with flexible enrollment options'
    },
    {
      icon: '👥',
      title: 'Small Batch Size',
      description: 'Personalized attention with carefully managed batch sizes for effective learning'
    },
    {
      icon: '🏆',
      title: 'Tournament Focus',
      description: 'Prepare for FIDE tournaments with dedicated tournament training programs'
    },
    {
      icon: '🎯',
      title: 'One-on-One Sessions',
      description: 'Get personalized coaching for targeted skill development and improvement'
    },
    {
      icon: '📊',
      title: 'Detailed Feedback',
      description: 'Regular performance analysis and detailed progress reports to track your growth'
    },
    {
      icon: '📚',
      title: 'Structured Curriculum',
      description: 'Comprehensive courses from beginner to master level with clear progression'
    }
  ];

  // Training programs
  const programs = [
    {
      level: 'BEGINNER',
      classes: '30+ Classes',
      tournaments: '8+ Tournaments',
      puzzles: '500+ Puzzles',
      outcome: 'Master basic chess principles and develop tactical skills',
      concepts: ['Board Basics', 'Piece Movement', 'Opening Principles', 'Basic Tactics', 'Endgame Fundamentals'],
      includes: ['Live Classes', 'Practice Puzzles', 'Recorded Sessions', 'Performance Tracking'],
      pricing: '₹4,999/month',
      color: '#FF6F3C'
    },
    {
      level: 'INTERMEDIATE',
      classes: '40+ Classes',
      tournaments: '12+ Tournaments',
      puzzles: '800+ Puzzles',
      outcome: 'Develop strong positional understanding and tournament readiness',
      concepts: ['Middle Game Strategy', 'Position Evaluation', 'Advanced Tactics', 'Opening Theory', 'Tournament Prep'],
      includes: ['Live Classes', 'One-on-One Sessions', 'Game Analysis', 'Tournament Practice'],
      pricing: '₹6,999/month',
      color: '#7FE3FF'
    },
    {
      level: 'ADVANCED',
      classes: '50+ Classes',
      tournaments: '15+ Tournaments',
      puzzles: '1200+ Puzzles',
      outcome: 'Achieve mastery in all aspects of chess and compete at higher levels',
      concepts: ['Deep Opening Preparation', 'Endgame Mastery', 'Complex Strategies', 'Psychological Play', 'FIDE Preparation'],
      includes: ['Personal Coach', 'Custom Game Plans', 'Elite Tournament Access', 'Personalized Analysis'],
      pricing: '₹9,999/month',
      color: '#5FCBF0'
    },
    {
      level: 'MASTER',
      classes: '60+ Classes',
      tournaments: '20+ Tournaments',
      puzzles: '2000+ Puzzles',
      outcome: 'Become an elite player ready for FIDE competitions and championships',
      concepts: ['Championship Preparation', 'Computer-Aided Analysis', 'Psychological Mastery', 'Advanced Strategies', 'Elite Tournament Focus'],
      includes: ['Elite Personal Coach', 'Championship Preparation', 'International Tournament Support', 'Lifetime Access'],
      pricing: '₹14,999/month',
      color: '#FFC107'
    }
  ];

  // Coaches
  const coaches = [
    {
      name: 'Ravichandran',
      title: 'Head Coach & FIDE Master',
      rating: '2200+ FIDE',
      bio: 'International chess master with 20+ years of coaching experience and 200+ rated students'
    },
    {
      name: 'Geethamani',
      title: 'Senior Coach',
      rating: 'FIDE Rated',
      bio: 'Specialist in tournament preparation, personalized improvement plans, and tactical sharpness'
    }
  ];

  // FAQs
  const faqs = [
    {
      question: 'What is the minimum age to start chess training?',
      answer: 'We accept students from age 4 onwards. Our curriculum is designed to be age-appropriate and engaging for young learners.'
    },
    {
      question: 'Do I need prior chess experience to join?',
      answer: 'Not at all! Our Beginner program is designed for complete novices. We start from the absolute basics.'
    },
    {
      question: 'What are your batch sizes?',
      answer: 'We maintain small batch sizes of 3-8 students per class to ensure personalized attention and better learning outcomes.'
    },
    {
      question: 'Can I switch programs or upgrade?',
      answer: 'Yes! You can upgrade to a higher program level at any time. We\'ll guide you based on your progress.'
    },
    {
      question: 'Do you provide tournament opportunities?',
      answer: 'Yes! Each program includes access to regular internal tournaments and FIDE tournament preparation.'
    },
    {
      question: 'What is your refund policy?',
      answer: 'We offer a 7-day satisfaction guarantee. If you\'re not satisfied, we provide a full refund within the first week.'
    }
  ];

  const [expandedFAQ, setExpandedFAQ] = useState(null);

  return (
    <div className="home-container">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="top-bar-content">
          <div className="logo">
            <img src="/logo.jpeg" alt="Kings Mate Chess Academy logo" className="logo-image" />
            <span className="logo-text">Kings Mate Chess Academy</span>
          </div>
          <div className="top-bar-links">
            <a className="contact-info" href="tel:+919489972286">📞 +91 94899 72286</a>
            <button className="book-demo-btn" onClick={() => setShowContactForm(true)}>Book Demo</button>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-inner">
          <div className="hero-content">
            <h1>Ready to Begin Your Chess Journey?</h1>
            <p>Learn from FIDE-rated coaches and master the game at your own pace</p>
            <button className="cta-button" onClick={() => setShowContactForm(true)}>
              Book Your Free Demo Class
            </button>
          </div>
        </div>
      </section>

      {/* Why Kings Mate Academy Section */}
      <section className="why-section">
        <div className="section-header">
          <h2>Why Kings Mate Academy?</h2>
          <p>Discover what makes us the premier chess training platform</p>
        </div>
        <div className="why-grid">
          {whyKMC.map((item, index) => (
            <div key={index} className="why-card">
              <div className="why-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Section with Stats */}
      <section className="about-section">
        <div className="about-content">
          <h2>Meet Kings Mate Chess Academy</h2>
          <p>
            We are dedicated to nurturing chess talent and building confident, strategic thinkers. 
            With FIDE-rated coaches, personalized training programs, and a community-focused approach, 
            we've helped hundreds of students achieve their chess goals.
          </p>
          <div className="stats-grid">
            <div className="stat-card">
              <h3>50+</h3>
              <p>Active Students</p>
            </div>
            <div className="stat-card">
              <h3>10+</h3>
              <p>Countries</p>
            </div>
            <div className="stat-card">
              <h3>2</h3>
              <p>FIDE Coaches</p>
            </div>
            <div className="stat-card">
              <h3>1000+</h3>
              <p>Classes Conducted</p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="programs-section">
        <div className="section-header">
          <h2>Our Training Programs</h2>
          <p>Choose the program that matches your skill level and goals</p>
        </div>
        <div className="programs-grid">
          {programs.map((program, index) => (
            <div key={index} className="program-card" style={{ borderTopColor: program.color }}>
              <h3>{program.level}</h3>
              <div className="program-stats">
                <div className="stat">{program.classes}</div>
                <div className="stat">{program.tournaments}</div>
                <div className="stat">{program.puzzles}</div>
              </div>
              <div className="program-details">
                <h4>Expected Outcome:</h4>
                <p>{program.outcome}</p>
                
                <h4>Key Concepts:</h4>
                <ul>
                  {program.concepts.map((concept, i) => (
                    <li key={i}>✓ {concept}</li>
                  ))}
                </ul>
                
                <h4>Includes:</h4>
                <ul>
                  {program.includes.map((item, i) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
              </div>
              <div className="program-pricing">
                <span className="price">{program.pricing}</span>
                <button className="enroll-btn" onClick={() => setShowContactForm(true)}>
                  Enquire Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Coaches Section */}
      <section id="masters" className="coaches-section">
        <div className="section-header">
          <h2>Meet Our Chess Masters</h2>
          <p>Learn from experts with international experience</p>
        </div>
        <div className="coaches-grid">
          {coaches.map((coach, index) => (
            <div key={index} className="coach-card">
              <div className="coach-avatar">{coach.name.charAt(0)}</div>
              <h3>{coach.name}</h3>
              <p className="coach-title">{coach.title}</p>
              <p className="coach-rating">{coach.rating}</p>
              <p className="coach-bio">{coach.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="section-header">
          <h2>Frequently Asked Questions</h2>
          <p>Find answers to common questions about our programs</p>
        </div>
        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <button
                className="faq-question"
                onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
              >
                <span>{faq.question}</span>
                <span className="faq-toggle">{expandedFAQ === index ? '−' : '+'}</span>
              </button>
              {expandedFAQ === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="section-header">
          <h2>Get in Touch</h2>
          <p>We'd love to hear from you!</p>
        </div>
        <div className="contact-grid">
          <div className="contact-card">
            <h3>📞 Phone</h3>
            <p>Ravichandran: <a href="tel:+919489972286">+91 94899 72286</a></p>
            <p>Geethamani: <a href="tel:+919894622286">+91 98946 22286</a></p>
          </div>
          <div className="contact-card">
            <h3>📍 Address</h3>
            <p>Iris Court, Mahindra World City, Chengalpattu, Chennai 603104</p>
          </div>
          <div className="contact-card">
            <h3>👤 Contact Persons</h3>
            <p>Ravichandran</p>
            <p>Geethamani</p>
          </div>
          <div className="contact-card">
            <h3>📧 Email</h3>
            <p>contact@kingsmatchess.com</p>
          </div>
        </div>
        <button className="contact-cta" onClick={() => setShowContactForm(true)}>
          Start Your Chess Journey Today
        </button>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Kings Mate Chess Academy</h4>
            <p>Iris Court, Mahindra World City, Chengalpattu, Chennai 603104</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#programs">Programs</a></li>
              <li><a href="#masters">Masters</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="#facebook">Facebook</a>
              <a href="#instagram">Instagram</a>
              <a href="#youtube">YouTube</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Kings Mate Chess Academy. All rights reserved.</p>
        </div>
      </footer>

      {/* WhatsApp Quick Chat */}
      <a
        className="whatsapp-button"
        href="https://wa.me/919489972286"
        target="_blank"
        rel="noopener noreferrer"
        title="Chat on WhatsApp"
      >
        <img src="/whatsapp.svg" alt="WhatsApp" className="whatsapp-icon" />
      </a>

      {/* Contact Form Modal */}
      {showContactForm && (
        <ContactForm onClose={() => setShowContactForm(false)} />
      )}
    </div>
  );
};

export default Home;
