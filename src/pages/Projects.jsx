import React from 'react';
import { ArrowRight, Star, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProjectsPage = () => {
  return (
    <>
      <section className="section-padding bg-primary text-primary-foreground py-28">
        <div className="container mx-auto text-center">
          <span className="inline-block px-4 py-1.5 bg-primary-foreground/10 border border-primary-foreground/20 rounded-full text-sm font-medium mb-6">Our Portfolio</span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mt-2">
            <span className="inline-flex items-center justify-center text-center flex-wrap [perspective:500px]">
              <span className="text-reveal-span inline-block whitespace-normal">Featured </span>
              <span className="text-reveal-span inline-block whitespace-normal">Projects</span>
            </span>
          </h1>
          <p className="text-primary-foreground/80 mt-6 max-w-2xl mx-auto text-lg leading-relaxed">
            Explore our growing portfolio of real client projects in web development and e-commerce. Each project represents our focus on clear goals, clean code, and dependable delivery.
          </p>
        </div>
      </section>

      <section className="py-16 bg-primary-soft">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-display font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground mt-1">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-display font-bold text-primary">30+</div>
              <div className="text-sm text-muted-foreground mt-1">Clients Served</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-display font-bold text-primary">10+</div>
              <div className="text-sm text-muted-foreground mt-1">Industries Served</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-display font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground mt-1">Projects Delivered On Time</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding py-24">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Browse Projects</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">Our Recent Work</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            <button className="px-5 py-2.5 rounded-full text-sm font-medium transition-colors bg-primary text-primary-foreground">All</button>
            <button className="px-5 py-2.5 rounded-full text-sm font-medium transition-colors bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary">Web Development</button>
            <button className="px-5 py-2.5 rounded-full text-sm font-medium transition-colors bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary">Mobile Apps</button>
            <button className="px-5 py-2.5 rounded-full text-sm font-medium transition-colors bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary">Cloud Solutions</button>
            <button className="px-5 py-2.5 rounded-full text-sm font-medium transition-colors bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary">UI/UX Design</button>
            <button className="px-5 py-2.5 rounded-full text-sm font-medium transition-colors bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary">Digital Marketing</button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glass-card overflow-hidden group hover:shadow-xl transition-all duration-500 hover:-translate-y-1 h-full flex flex-col">
              <div className="h-56 overflow-hidden relative bg-muted flex items-center justify-center">
                <span className="text-muted-foreground">Powerex Image Placeholder</span>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <span className="text-xs text-primary font-semibold uppercase tracking-wider">Web Development</span>
                <h3 className="font-display text-lg font-bold text-foreground mt-1">B2B E-Commerce Platform</h3>
                <p className="text-xs text-muted-foreground mt-1">Client: Powerex Petrochem</p>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed flex-grow">
                  Custom online ordering platform for petrochemical products with secure payments, role-based access, and an admin panel to track quotes and orders in real time.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="px-2.5 py-1 bg-primary/5 text-primary text-xs rounded-md font-medium">React</span>
                  <span className="px-2.5 py-1 bg-primary/5 text-primary text-xs rounded-md font-medium">Next.js</span>
                  <span className="px-2.5 py-1 bg-primary/5 text-primary text-xs rounded-md font-medium">Node.js</span>
                  <span className="px-2.5 py-1 bg-primary/5 text-primary text-xs rounded-md font-medium">PostgreSQL</span>
                </div>
              </div>
            </div>
            
            <div className="glass-card overflow-hidden group hover:shadow-xl transition-all duration-500 hover:-translate-y-1 h-full flex flex-col">
              <div className="h-56 overflow-hidden relative bg-muted flex items-center justify-center">
                <span className="text-muted-foreground">ShippingDrop Image Placeholder</span>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <span className="text-xs text-primary font-semibold uppercase tracking-wider">Web Development</span>
                <h3 className="font-display text-lg font-bold text-foreground mt-1">Logistics E-Commerce Website</h3>
                <p className="text-xs text-muted-foreground mt-1">Client: ShippingDrop</p>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed flex-grow">
                  Customer-facing website for booking shipping services, managing orders, and tracking deliveries with automated email updates.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="px-2.5 py-1 bg-primary/5 text-primary text-xs rounded-md font-medium">React</span>
                  <span className="px-2.5 py-1 bg-primary/5 text-primary text-xs rounded-md font-medium">Next.js</span>
                  <span className="px-2.5 py-1 bg-primary/5 text-primary text-xs rounded-md font-medium">Node.js</span>
                  <span className="px-2.5 py-1 bg-primary/5 text-primary text-xs rounded-md font-medium">PostgreSQL</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary-soft py-20">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Trusted By</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">Our Valued Clients</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="px-8 py-4 bg-card border border-border rounded-xl shadow-sm">
              <span className="font-display font-semibold text-muted-foreground">Powerex Petrochem</span>
            </div>
            <div className="px-8 py-4 bg-card border border-border rounded-xl shadow-sm">
              <span className="font-display font-semibold text-muted-foreground">ShippingDrop</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding py-24">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Client Feedback</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">What Clients Say About Our Work</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-card p-8 h-full flex flex-col">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-warning fill-warning" />)}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed italic flex-grow">
                "Pravaah Technology helped us move our B2B sales online with a fast, easy-to-use platform. The team was responsive and handled everything from design to deployment."
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-display font-semibold text-foreground text-sm">Pushpak Goti</p>
                  <p className="text-muted-foreground text-xs">CEO, Powerex Petrochem</p>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-8 h-full flex flex-col">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-warning fill-warning" />)}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed italic flex-grow">
                "From the first call to launch, Pravaah Technology handled our website professionally. The new site is simple for our team to manage and easy for our customers to use."
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-display font-semibold text-foreground text-sm">Gausiya Fatima</p>
                  <p className="text-muted-foreground text-xs">Founder, ShippingDrop</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding py-24">
        <div className="container mx-auto">
          <div className="bg-primary rounded-3xl p-12 md:p-16 text-center text-primary-foreground">
            <h2 className="font-display text-3xl md:text-4xl font-bold">Have a Project in Mind?</h2>
            <p className="text-primary-foreground/80 mt-4 max-w-xl mx-auto leading-relaxed">
              Let's turn your idea into a successful digital product. Get a free project consultation and estimate today.
            </p>
            <Link className="inline-flex items-center gap-2 mt-8 px-8 py-4 bg-primary-foreground text-primary rounded-xl font-semibold hover:opacity-90 transition-opacity" to="/contact">
              Start Your Project <ArrowRight className="w-[18px] h-[18px]" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectsPage;
