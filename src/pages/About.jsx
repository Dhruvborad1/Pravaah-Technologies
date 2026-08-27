import React from 'react';
import { Target, Eye, CircleCheckBig, Lightbulb, Heart, Users, Award, Shield, Zap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <>
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-muted flex items-center justify-center">
            {/* Fallback box if image is missing */}
            <span className="text-muted-foreground">Office Image Placeholder</span>
          </div>
          <div className="absolute inset-0 bg-foreground/75"></div>
        </div>
        <div className="container mx-auto text-center relative z-10 px-4">
          <span className="inline-block px-4 py-1.5 bg-primary/20 text-primary-foreground border border-primary/30 rounded-full text-sm font-medium mb-6">About Us</span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mt-2">
            <span className="inline-flex items-center justify-center text-center flex-wrap [perspective:500px]">
              <span className="text-reveal-span inline-block whitespace-normal">Building </span>
              <span className="text-reveal-span inline-block whitespace-normal">the </span>
              <span className="text-reveal-span inline-block whitespace-normal">Digital </span>
              <span className="text-reveal-span inline-block whitespace-normal">Future</span>
            </span>
          </h1>
          <p className="text-primary-foreground/80 mt-6 max-w-2xl mx-auto text-lg leading-relaxed">
            Pravaah Technology is a full-service IT company dedicated to helping businesses thrive in the digital age through innovative technology solutions and expert guidance.
          </p>
        </div>
      </section>

      <section className="section-padding py-24">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Who We Are</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">A Team of Passionate Innovators</h2>
              <p className="text-muted-foreground mt-4 leading-relaxed">
                Pravaah Technology is a growing web and software studio focused on delivering clean, dependable solutions for small and medium businesses. Our core team covers development, design, and digital strategy — united by a shared passion for creating practical, high-quality products.
              </p>
              <p className="text-muted-foreground mt-3 leading-relaxed">
                We have completed our first client projects and are steadily expanding our portfolio. Rather than chasing big numbers, we focus on understanding each client's goals, shipping on time, and supporting the solutions we build.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-primary/5 rounded-xl p-4 text-center">
                  <div className="text-2xl font-display font-bold text-primary">50+</div>
                  <div className="text-xs text-muted-foreground mt-1">Projects Completed</div>
                </div>
                <div className="bg-primary/5 rounded-xl p-4 text-center">
                  <div className="text-2xl font-display font-bold text-primary">30+</div>
                  <div className="text-xs text-muted-foreground mt-1">Clients Served</div>
                </div>
                <div className="bg-primary/5 rounded-xl p-4 text-center">
                  <div className="text-2xl font-display font-bold text-primary">15+</div>
                  <div className="text-xs text-muted-foreground mt-1">Team Members</div>
                </div>
                <div className="bg-primary/5 rounded-xl p-4 text-center">
                  <div className="text-2xl font-display font-bold text-primary">100%</div>
                  <div className="text-xs text-muted-foreground mt-1">Client Satisfaction</div>
                </div>
              </div>
            </div>
            <div>
              <div className="rounded-3xl overflow-hidden shadow-2xl relative h-[450px] bg-muted flex items-center justify-center">
                <span className="text-muted-foreground">Culture Image Placeholder</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary-soft py-24">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Purpose</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">Mission & Vision</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card rounded-2xl p-10 border border-border shadow-sm h-full">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-[28px] h-[28px] text-primary" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground">Our Mission</h3>
              <p className="text-muted-foreground mt-4 leading-relaxed">
                To empower businesses with cutting-edge technology solutions that drive growth, efficiency, and innovation. We believe every company — regardless of size — deserves access to world-class digital tools and expertise that can transform their operations and accelerate their success.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-center gap-2 text-sm text-muted-foreground"><CircleCheckBig className="w-4 h-4 text-primary shrink-0" />Deliver innovative solutions</li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground"><CircleCheckBig className="w-4 h-4 text-primary shrink-0" />Empower business growth</li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground"><CircleCheckBig className="w-4 h-4 text-primary shrink-0" />Build lasting partnerships</li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground"><CircleCheckBig className="w-4 h-4 text-primary shrink-0" />Drive digital transformation</li>
              </ul>
            </div>
            
            <div className="bg-card rounded-2xl p-10 border border-border shadow-sm h-full">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <Eye className="w-[28px] h-[28px] text-primary" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground">Our Vision</h3>
              <p className="text-muted-foreground mt-4 leading-relaxed">
                To be the most trusted technology partner for businesses worldwide, known for delivering transformative solutions that make a lasting impact. We envision a future where technology is accessible, intuitive, and empowers every organization to reach its full potential.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-center gap-2 text-sm text-muted-foreground"><CircleCheckBig className="w-4 h-4 text-primary shrink-0" />Become the go-to IT partner</li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground"><CircleCheckBig className="w-4 h-4 text-primary shrink-0" />Set industry standards</li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground"><CircleCheckBig className="w-4 h-4 text-primary shrink-0" />Foster innovation globally</li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground"><CircleCheckBig className="w-4 h-4 text-primary shrink-0" />Create meaningful impact</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding py-24">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Values</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">What Drives Us</h2>
            <p className="text-muted-foreground mt-4 leading-relaxed">Our core values guide every decision we make and every project we deliver.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card rounded-2xl p-8 border border-border shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-1 h-full">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6"><Lightbulb className="w-7 h-7 text-primary" /></div>
              <h4 className="font-display text-lg font-semibold text-foreground">Innovation</h4>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">We embrace new technologies and creative approaches to solve complex problems and deliver cutting-edge solutions.</p>
            </div>
            <div className="bg-card rounded-2xl p-8 border border-border shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-1 h-full">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6"><Heart className="w-7 h-7 text-primary" /></div>
              <h4 className="font-display text-lg font-semibold text-foreground">Passion</h4>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">We love what we do and it shows in every project. Our enthusiasm drives us to go above and beyond for our clients.</p>
            </div>
            <div className="bg-card rounded-2xl p-8 border border-border shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-1 h-full">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6"><Users className="w-7 h-7 text-primary" /></div>
              <h4 className="font-display text-lg font-semibold text-foreground">Collaboration</h4>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">We work closely with clients as true partners, ensuring transparency and open communication throughout every project.</p>
            </div>
            <div className="bg-card rounded-2xl p-8 border border-border shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-1 h-full">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6"><Award className="w-7 h-7 text-primary" /></div>
              <h4 className="font-display text-lg font-semibold text-foreground">Excellence</h4>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">We deliver nothing less than the best. Our rigorous quality standards ensure every deliverable exceeds expectations.</p>
            </div>
            <div className="bg-card rounded-2xl p-8 border border-border shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-1 h-full">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6"><Shield className="w-7 h-7 text-primary" /></div>
              <h4 className="font-display text-lg font-semibold text-foreground">Integrity</h4>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">We operate with complete honesty and transparency. Trust is the foundation of every client relationship we build.</p>
            </div>
            <div className="bg-card rounded-2xl p-8 border border-border shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-1 h-full">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6"><Zap className="w-7 h-7 text-primary" /></div>
              <h4 className="font-display text-lg font-semibold text-foreground">Agility</h4>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">We adapt quickly to changing requirements and market conditions, ensuring your project stays on track and relevant.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary-soft py-24">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Journey</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">Company Milestones</h2>
            <p className="text-muted-foreground mt-4 leading-relaxed">A look at how we've grown from a small startup to a trusted global technology partner.</p>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="flex gap-6 items-start">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shrink-0 shadow-lg"><span className="text-primary-foreground font-display font-bold text-sm">2020</span></div>
              <div className="bg-card rounded-2xl p-6 border border-border shadow-sm flex-grow">
                <h4 className="font-display font-semibold text-foreground">Company Founded</h4>
                <p className="text-sm text-muted-foreground mt-1 leading-relaxed">Pravaah Technology was started as a small web development studio with a focus on practical, reliable solutions.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shrink-0 shadow-lg"><span className="text-primary-foreground font-display font-bold text-sm">2021</span></div>
              <div className="bg-card rounded-2xl p-6 border border-border shadow-sm flex-grow">
                <h4 className="font-display font-semibold text-foreground">First Client Engagements</h4>
                <p className="text-sm text-muted-foreground mt-1 leading-relaxed">Delivered initial projects and refined our delivery process around real client feedback.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shrink-0 shadow-lg"><span className="text-primary-foreground font-display font-bold text-sm">2023</span></div>
              <div className="bg-card rounded-2xl p-6 border border-border shadow-sm flex-grow">
                <h4 className="font-display font-semibold text-foreground">E-Commerce Experience</h4>
                <p className="text-sm text-muted-foreground mt-1 leading-relaxed">Started working on production-ready e-commerce solutions tailored to specific business needs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding py-24 bg-primary">
        <div className="container mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground">Want to Work With Us?</h2>
          <p className="text-primary-foreground/80 mt-4 max-w-xl mx-auto leading-relaxed">Whether you have a project in mind or want to join our team, we'd love to hear from you.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link className="inline-flex items-center gap-2 px-8 py-4 bg-primary-foreground text-primary rounded-xl font-semibold hover:opacity-90 transition-opacity" to="/contact">
              Start a Project <ArrowRight className="w-4 h-4" />
            </Link>
            <Link className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary-foreground/30 text-primary-foreground rounded-xl font-semibold hover:bg-primary-foreground/10 transition-colors" to="/careers">
              View Careers
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
