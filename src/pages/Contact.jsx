import React from 'react';
import { Mail, Phone, MapPin, Clock, Headphones, Send } from 'lucide-react';

const ContactPage = () => {
  return (
    <>
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-muted flex items-center justify-center">
            <span className="text-muted-foreground">Meeting Image Placeholder</span>
          </div>
          <div className="absolute inset-0 bg-foreground/75"></div>
        </div>
        <div className="container mx-auto text-center relative z-10 px-4">
          <span className="inline-block px-4 py-1.5 bg-primary/20 text-primary-foreground border border-primary/30 rounded-full text-sm font-medium mb-6">Contact Us</span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mt-2">
            <span className="inline-flex items-center justify-center text-center flex-wrap [perspective:500px]">
              <span className="text-reveal-span inline-block whitespace-normal">Let's </span>
              <span className="text-reveal-span inline-block whitespace-normal">Build </span>
              <span className="text-reveal-span inline-block whitespace-normal">Something </span>
              <span className="text-reveal-span inline-block whitespace-normal">Amazing</span>
            </span>
          </h1>
          <p className="text-primary-foreground/80 mt-6 max-w-2xl mx-auto text-lg leading-relaxed">
            Have a project in mind? We'd love to hear from you. Reach out and let's discuss how we can help your business grow.
          </p>
        </div>
      </section>

      <section className="py-16 bg-primary-soft">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-card rounded-2xl p-6 border border-border shadow-sm text-center h-full">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Mail className="w-[22px] h-[22px] text-primary" />
              </div>
              <h4 className="font-display font-semibold text-foreground">Email Us</h4>
              <p className="text-foreground font-medium text-sm mt-2">support@pravaahtechnology.in</p>
              <p className="text-xs text-muted-foreground mt-1">We reply within 24 hours</p>
            </div>
            <div className="bg-card rounded-2xl p-6 border border-border shadow-sm text-center h-full">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Phone className="w-[22px] h-[22px] text-primary" />
              </div>
              <h4 className="font-display font-semibold text-foreground">Call Us</h4>
              <p className="text-foreground font-medium text-sm mt-2">+91 8449274276</p>
              <p className="text-xs text-muted-foreground mt-1">Mon-Fri, 11AM-9PM</p>
            </div>
            <div className="bg-card rounded-2xl p-6 border border-border shadow-sm text-center h-full">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-[22px] h-[22px] text-primary" />
              </div>
              <h4 className="font-display font-semibold text-foreground">Location</h4>
              <p className="text-foreground font-medium text-sm mt-2">Amina Nagar, Padri Bazar, Gorakhpur - 273014</p>
              <p className="text-xs text-muted-foreground mt-1">Serving clients worldwide</p>
            </div>
            <div className="bg-card rounded-2xl p-6 border border-border shadow-sm text-center h-full">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-[22px] h-[22px] text-primary" />
              </div>
              <h4 className="font-display font-semibold text-foreground">Office Hours</h4>
              <p className="text-foreground font-medium text-sm mt-2">Mon - Fri: 11 AM - 9 PM</p>
              <p className="text-xs text-muted-foreground mt-1">Sat: 10AM - 2PM</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding py-24">
        <div className="container mx-auto grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <div className="space-y-8">
              <div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-4">Get in Touch</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Whether you have a question, need a quote, or want to discuss a potential project, our team is here to help. Fill out the form and we'll get back to you as soon as possible.
                </p>
              </div>
              <div className="space-y-4">
                <h4 className="font-display font-semibold text-foreground">What happens next?</h4>
                <div className="flex gap-3 items-start">
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center shrink-0"><span className="text-primary-foreground font-bold text-sm">1</span></div>
                  <p className="text-sm text-muted-foreground mt-1">We receive your message and review your requirements</p>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center shrink-0"><span className="text-primary-foreground font-bold text-sm">2</span></div>
                  <p className="text-sm text-muted-foreground mt-1">A team member reaches out to schedule a discovery call</p>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center shrink-0"><span className="text-primary-foreground font-bold text-sm">3</span></div>
                  <p className="text-sm text-muted-foreground mt-1">We prepare a detailed proposal and project estimate</p>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center shrink-0"><span className="text-primary-foreground font-bold text-sm">4</span></div>
                  <p className="text-sm text-muted-foreground mt-1">Upon approval, we kick off your project immediately</p>
                </div>
              </div>
              <div className="glass-card p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Headphones className="w-5 h-5 text-primary" />
                  <h4 className="font-display font-semibold text-foreground">Need Urgent Help?</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  For urgent inquiries or existing client support, call us directly at <span className="text-foreground font-medium">+91 8449274276</span> during business hours.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3">
            <div className="glass-card p-8">
              <form className="space-y-6">
                <h3 className="font-display text-xl font-bold text-foreground mb-2">Send Us a Message</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Full Name *</label>
                    <input required type="text" placeholder="John Doe" className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition" name="fullName" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Email *</label>
                    <input required type="email" placeholder="john@example.com" className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition" name="email" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Phone</label>
                    <input type="tel" placeholder="+1 (555) 000-0000" className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition" name="phone" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Company</label>
                    <input type="text" placeholder="Your Company" className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition" name="company" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Service Interested In</label>
                  <select name="serviceInterestedIn" className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition">
                    <option value="">Select a service</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Mobile App Development">Mobile App Development</option>
                    <option value="Cloud Solutions">Cloud Solutions</option>
                    <option value="UI/UX Design">UI/UX Design</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                    <option value="Cybersecurity">Cybersecurity</option>
                    <option value="IT Consulting">IT Consulting</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Project Details *</label>
                  <textarea name="projectDetails" required rows="5" placeholder="Tell us about your project, goals, and any specific requirements..." className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition resize-none"></textarea>
                </div>
                <button type="submit" className="w-full md:w-auto px-8 py-3.5 bg-primary text-primary-foreground rounded-xl font-semibold hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2 disabled:opacity-70 disabled:pointer-events-none min-w-[160px]">
                  Send Message <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary-soft py-24">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">FAQ</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">Frequently Asked Questions</h2>
            <p className="text-muted-foreground mt-4 leading-relaxed">Find answers to common questions about our services, process, and pricing.</p>
          </div>
          <div className="space-y-4">
            <div className="bg-card rounded-2xl border border-border shadow-sm overflow-hidden">
              <button className="w-full p-6 text-left flex items-center justify-between gap-4">
                <h4 className="font-display font-semibold text-foreground">How long does a typical project take?</h4>
                <span className="text-primary text-xl shrink-0">+</span>
              </button>
            </div>
            <div className="bg-card rounded-2xl border border-border shadow-sm overflow-hidden">
              <button className="w-full p-6 text-left flex items-center justify-between gap-4">
                <h4 className="font-display font-semibold text-foreground">What is your pricing model?</h4>
                <span className="text-primary text-xl shrink-0">+</span>
              </button>
            </div>
            <div className="bg-card rounded-2xl border border-border shadow-sm overflow-hidden">
              <button className="w-full p-6 text-left flex items-center justify-between gap-4">
                <h4 className="font-display font-semibold text-foreground">Do you provide ongoing support after launch?</h4>
                <span className="text-primary text-xl shrink-0">+</span>
              </button>
            </div>
            <div className="bg-card rounded-2xl border border-border shadow-sm overflow-hidden">
              <button className="w-full p-6 text-left flex items-center justify-between gap-4">
                <h4 className="font-display font-semibold text-foreground">What technologies do you specialize in?</h4>
                <span className="text-primary text-xl shrink-0">+</span>
              </button>
            </div>
            <div className="bg-card rounded-2xl border border-border shadow-sm overflow-hidden">
              <button className="w-full p-6 text-left flex items-center justify-between gap-4">
                <h4 className="font-display font-semibold text-foreground">Can you work with our existing team?</h4>
                <span className="text-primary text-xl shrink-0">+</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="h-80 bg-muted flex items-center justify-center">
        <div className="text-center">
          <MapPin className="w-10 h-10 mx-auto text-primary mb-3" />
          <p className="font-display font-semibold text-foreground">Amina Nagar , Padri Bazar, Gorakhpur - 273014</p>
          <p className="text-sm text-muted-foreground mt-1">Visit our office or schedule a virtual meeting</p>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
