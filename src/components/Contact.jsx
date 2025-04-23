import React, { useRef, useState } from 'react';
import { MdEmail } from 'react-icons/md';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Contact.css';

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const { name, email, message } = formData;
    if (!name || !email || !message) {
      toast.warn('⚠️ Please fill all fields.');
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.warn('⚠️ Please enter a valid email.');
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      formRef.current,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      toast.success('✅ Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    })
    .catch((error) => {
      console.error(error);
      toast.error('❌ Something went wrong. Try again later.');
    });
  };

  return (
    <section id="contact">
      <h2><MdEmail className="contact-icon" /> Contact Me</h2>

      {/* Toast Notification */}
      <ToastContainer position="top-center" autoClose={3000} theme="dark" />

      <div className="contact-container">
        <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <input
            type="hidden"
            name="time"
            value={new Date().toLocaleString()}
          />

          <button type="submit">Send Message</button>
        </form>

        <div className="image-container">
          <img src="/contact.jpg" alt="Contact Visual" className="animated-image" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
