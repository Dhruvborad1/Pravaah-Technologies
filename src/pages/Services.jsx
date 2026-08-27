import React from 'react';
import { ArrowRight, Code, Smartphone, Cloud, Palette, ChartColumn, Shield, Database, Zap, Headphones, Monitor, Settings, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesPage = () => {
  return (
    <>
      <section className="section-padding bg-primary text-primary-foreground py-28">
        <div className="container mx-auto text-center">
          <span className="inline-block px-4 py-1.5 bg-primary-foreground/10 border border-primary-foreground/20 rounded-full text-sm font-medium mb-6">Our Services</span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mt-2">
            <span className="inline-flex items-center justify-center text-center flex-wrap [perspective:500px]">
              <span className="text-reveal-span inline-block whitespace-normal">Comprehensive </span>
              <span className="text-reveal-span inline-block whitespace-normal">IT </span>
              <span className="text-reveal-span inline-block whitespace-normal">Solutions</span>
            </span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-primary-foreground/80 leading-relaxed">
            End-to-end IT solutions designed to accelerate your business growth and digital transformation. We combine innovation with expertise to deliver results that matter.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link className="inline-flex items-center gap-2 px-8 py-4 bg-primary-foreground text-primary rounded-xl font-semibold hover:opacity-90 transition-opacity" to="/contact">
              Get Started <ArrowRight className="w-[18px] h-[18px]" />
            </Link>
            <Link className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary-foreground/30 text-primary-foreground rounded-xl font-semibold hover:bg-primary-foreground/10 transition-colors" to="/projects">
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary-soft py-24">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">What We Do</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">Our Core Services</h2>
            <p className="text-muted-foreground mt-4 leading-relaxed">From concept to deployment, we provide a full spectrum of IT services to help your business thrive in the digital landscape.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glass-card p-8 h-full hover:shadow-xl transition-all duration-500 group hover:-translate-y-1 flex flex-col">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors"><Code className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" /></div>
              <h3 className="font-display text-xl font-bold text-foreground">Web Development</h3>
              <p className="text-muted-foreground text-sm mt-3 leading-relaxed flex-grow">Custom web applications, e-commerce platforms, and enterprise solutions built with React, Node.js, and modern frameworks.</p>
            </div>
            <div className="glass-card p-8 h-full hover:shadow-xl transition-all duration-500 group hover:-translate-y-1 flex flex-col">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors"><Smartphone className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" /></div>
              <h3 className="font-display text-xl font-bold text-foreground">Mobile App Development</h3>
              <p className="text-muted-foreground text-sm mt-3 leading-relaxed flex-grow">Native and cross-platform mobile apps for iOS and Android that deliver exceptional user experiences.</p>
            </div>
            <div className="glass-card p-8 h-full hover:shadow-xl transition-all duration-500 group hover:-translate-y-1 flex flex-col">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors"><Cloud className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" /></div>
              <h3 className="font-display text-xl font-bold text-foreground">Cloud Solutions</h3>
              <p className="text-muted-foreground text-sm mt-3 leading-relaxed flex-grow">Scalable cloud infrastructure, migration services, and DevOps solutions on AWS, Azure, and Google Cloud.</p>
            </div>
            <div className="glass-card p-8 h-full hover:shadow-xl transition-all duration-500 group hover:-translate-y-1 flex flex-col">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors"><Palette className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" /></div>
              <h3 className="font-display text-xl font-bold text-foreground">UI/UX Design</h3>
              <p className="text-muted-foreground text-sm mt-3 leading-relaxed flex-grow">User-centered design that combines aesthetics with functionality to create memorable digital experiences.</p>
            </div>
            <div className="glass-card p-8 h-full hover:shadow-xl transition-all duration-500 group hover:-translate-y-1 flex flex-col">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors"><ChartColumn className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" /></div>
              <h3 className="font-display text-xl font-bold text-foreground">Digital Marketing</h3>
              <p className="text-muted-foreground text-sm mt-3 leading-relaxed flex-grow">Data-driven digital marketing strategies that increase visibility, engagement, and conversions.</p>
            </div>
            <div className="glass-card p-8 h-full hover:shadow-xl transition-all duration-500 group hover:-translate-y-1 flex flex-col">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors"><Shield className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" /></div>
              <h3 className="font-display text-xl font-bold text-foreground">Cybersecurity</h3>
              <p className="text-muted-foreground text-sm mt-3 leading-relaxed flex-grow">Comprehensive security solutions to protect your business from digital threats and ensure compliance.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding py-24">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">Our Awesome Features</h2>
            <p className="text-muted-foreground mt-4 leading-relaxed">We deliver more than just code. Our solutions come packed with features that set us apart and ensure your success in the digital world.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card rounded-2xl p-8 border border-border shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-1 h-full flex flex-col">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6"><Monitor className="w-7 h-7 text-primary" /></div>
              <h3 className="font-display text-xl font-semibold text-foreground">Easy To Use</h3>
              <p className="text-muted-foreground text-sm mt-3 leading-relaxed flex-grow">Our solutions are designed with simplicity in mind. Intuitive interfaces ensure your team can get started quickly without extensive training or onboarding.</p>
            </div>
            <div className="bg-card rounded-2xl p-8 border border-border shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-1 h-full flex flex-col">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6"><Palette className="w-7 h-7 text-primary" /></div>
              <h3 className="font-display text-xl font-semibold text-foreground">Awesome Design</h3>
              <p className="text-muted-foreground text-sm mt-3 leading-relaxed flex-grow">We craft visually stunning designs that captivate users and strengthen your brand identity. Every pixel is placed with purpose and precision.</p>
            </div>
            <div className="bg-card rounded-2xl p-8 border border-border shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-1 h-full flex flex-col">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6"><Settings className="w-7 h-7 text-primary" /></div>
              <h3 className="font-display text-xl font-semibold text-foreground">Easy To Customize</h3>
              <p className="text-muted-foreground text-sm mt-3 leading-relaxed flex-grow">Flexible and modular architecture allows you to tailor every aspect of your solution to match your unique business requirements and workflows.</p>
            </div>
            <div className="bg-card rounded-2xl p-8 border border-border shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-1 h-full flex flex-col">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6"><Headphones className="w-7 h-7 text-primary" /></div>
              <h3 className="font-display text-xl font-semibold text-foreground">Any Time Support</h3>
              <p className="text-muted-foreground text-sm mt-3 leading-relaxed flex-grow">Our dedicated support team is available 24/7 to assist you. Whether it's a quick question or a complex issue, we're always here to help.</p>
            </div>
            <div className="bg-card rounded-2xl p-8 border border-border shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-1 h-full flex flex-col">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6"><Rocket className="w-7 h-7 text-primary" /></div>
              <h3 className="font-display text-xl font-semibold text-foreground">Fast Performance</h3>
              <p className="text-muted-foreground text-sm mt-3 leading-relaxed flex-grow">Lightning-fast load times and optimized performance ensure your users never have to wait. Speed is at the core of everything we build.</p>
            </div>
            <div className="bg-card rounded-2xl p-8 border border-border shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-1 h-full flex flex-col">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6"><Shield className="w-7 h-7 text-primary" /></div>
              <h3 className="font-display text-xl font-semibold text-foreground">Secure & Reliable</h3>
              <p className="text-muted-foreground text-sm mt-3 leading-relaxed flex-grow">Enterprise-grade security protocols and 99.9% uptime guarantee keep your data safe and your business running without interruption.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary-soft py-24">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">How We Work</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">Our Process</h2>
            <p className="text-muted-foreground mt-4 leading-relaxed">A proven methodology that ensures every project is delivered on time, within budget, and beyond expectations.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="relative text-center">
              <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg"><span className="text-primary-foreground font-display text-2xl font-bold">01</span></div>
              <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-primary/20"></div>
              <h3 className="font-display text-lg font-bold text-foreground">Discovery & Planning</h3>
              <p className="text-muted-foreground text-sm mt-3 leading-relaxed">We begin by understanding your business goals, target audience, and project requirements through detailed consultations and research.</p>
            </div>
            <div className="relative text-center">
              <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg"><span className="text-primary-foreground font-display text-2xl font-bold">02</span></div>
              <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-primary/20"></div>
              <h3 className="font-display text-lg font-bold text-foreground">Design & Prototype</h3>
              <p className="text-muted-foreground text-sm mt-3 leading-relaxed">Our design team creates wireframes and interactive prototypes, ensuring the user experience is intuitive and aligned with your brand.</p>
            </div>
            <div className="relative text-center">
              <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg"><span className="text-primary-foreground font-display text-2xl font-bold">03</span></div>
              <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-primary/20"></div>
              <h3 className="font-display text-lg font-bold text-foreground">Development & Testing</h3>
              <p className="text-muted-foreground text-sm mt-3 leading-relaxed">Our engineers build your solution using the latest technologies, with rigorous testing at every stage to ensure quality and reliability.</p>
            </div>
            <div className="relative text-center">
              <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg"><span className="text-primary-foreground font-display text-2xl font-bold">04</span></div>
              <h3 className="font-display text-lg font-bold text-foreground">Launch & Support</h3>
              <p className="text-muted-foreground text-sm mt-3 leading-relaxed">We deploy your project with zero downtime and provide ongoing maintenance, updates, and support to keep everything running smoothly.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding py-24">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Tech Stack</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">Technologies We Use</h2>
            <p className="text-muted-foreground mt-4 leading-relaxed">We leverage the latest and most reliable technologies to build robust, scalable, and future-proof solutions for our clients.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {['React', 'Node.js', 'TypeScript', 'Python', 'AWS', 'Azure', 'Docker', 'Kubernetes', 'MongoDB', 'PostgreSQL'].map(tech => (
              <div key={tech} className="px-6 py-3 bg-card border border-border rounded-xl text-foreground font-medium text-sm hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 cursor-default shadow-sm">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
