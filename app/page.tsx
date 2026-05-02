'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Mail, Linkedin, Phone } from 'lucide-react';

export default function Portfolio() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary">Fardy Abid</h1>
            <div className="hidden md:flex gap-8">
              <button
                onClick={() => scrollToSection('about')}
                className="text-sm font-medium hover:text-accent transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('experience')}
                className="text-sm font-medium hover:text-accent transition-colors"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className="text-sm font-medium hover:text-accent transition-colors"
              >
                Skills
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background to-secondary py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Image */}
            <div className="relative w-full max-w-sm h-[450px] md:h-[550px] rounded-2xl overflow-hidden shadow-2xl mx-auto">
              <Image
                src="/profile.jpg"
                alt="Fardy Abid"
                fill
                className="object-cover object-center"
                priority
              />
            </div>

            {/* Right Content */}
            <div className="space-y-6">
              <div>
                <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-2">Welcome</p>
                <h2 className="text-5xl md:text-6xl font-bold text-primary leading-tight text-balance">
                  Zoology Graduate & PTE Instructor
                </h2>
              </div>
              <p className="text-lg text-foreground/80 leading-relaxed max-w-lg">
                Building expertise in research, education, and technical skills. Passionate about helping students excel and contributing to meaningful organizational growth.
              </p>
              <div className="flex gap-4 pt-4">
                <a
                  href="mailto:zannatulferdous272002@gmail.com"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
                >
                  <Mail size={18} />
                  Get in touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-28 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-balance">About Me</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <p className="text-lg text-foreground/80 leading-relaxed">
                I&apos;m a passionate professional with a Bachelor of Science in Zoology from Eden Mohila College in Dhaka. I combine my academic expertise in biological sciences with practical technical skills to create meaningful impact.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Recently, I worked as a consultant and PTE instructor at ESi Global Services, where I guided students through exam preparation and helped them pursue their study abroad dreams.
              </p>
            </div>
            <div className="space-y-6">
              <div className="border-l-4 border-accent pl-6">
                <h4 className="text-xl font-semibold text-primary mb-2">Academic Excellence</h4>
                <p className="text-foreground/70">Consistently achieved high grades throughout education, with 3.53/4.00 CGPA in B.Sc.</p>
              </div>
              <div className="border-l-4 border-accent pl-6">
                <h4 className="text-xl font-semibold text-primary mb-2">Student-Focused</h4>
                <p className="text-foreground/70">Dedicated to helping students improve their English proficiency and achieve their academic goals.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 md:py-28 bg-secondary/30">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-balance">Experience</h3>
          <div className="space-y-8">
            {/* Experience Card 1 */}
            <div className="bg-card rounded-lg border border-border p-8 hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h4 className="text-2xl font-semibold text-primary">Consultant & PTE Instructor</h4>
                  <p className="text-accent font-medium mt-1">ESi Global Services</p>
                </div>
                <p className="text-sm text-muted-foreground mt-2 md:mt-0">May 2025 – Jan 2026</p>
              </div>
              <p className="text-foreground/70 mb-4">Dhaka, Bangladesh</p>
              <ul className="space-y-2 text-foreground/80">
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Provided consultation on study abroad opportunities and PTE preparation strategies</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Conducted comprehensive PTE training sessions to improve English proficiency and test performance</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Assisted students with applications, documentation, and university selection</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Evaluated student progress and provided personalized feedback for continuous improvement</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Organized class schedules and prepared comprehensive study materials</span>
                </li>
              </ul>
            </div>

            {/* Experience Card 2 */}
            <div className="bg-card rounded-lg border border-border p-8 hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h4 className="text-2xl font-semibold text-primary">Biology Teacher</h4>
                  <p className="text-accent font-medium mt-1">Green Hope Study Zone</p>
                </div>
                <p className="text-sm text-muted-foreground mt-2 md:mt-0">April 2024 – May 2024</p>
              </div>
              <p className="text-foreground/70">Dhaka, Bangladesh</p>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-balance">Education</h3>
          <div className="space-y-6">
            {/* Degree 1 */}
            <div className="bg-card rounded-lg border border-border p-8">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                <div>
                  <h4 className="text-xl font-semibold text-primary">Bachelor of Science (Hons.) in Zoology</h4>
                  <p className="text-accent font-medium mt-1">Dhaka Central University (Eden Mohila College)</p>
                </div>
                <p className="text-sm text-muted-foreground mt-2 md:mt-0">2023</p>
              </div>
              <p className="text-foreground/70">CGPA: 3.53/4.00</p>
            </div>

            {/* Degree 2 */}
            <div className="bg-card rounded-lg border border-border p-8">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                <div>
                  <h4 className="text-xl font-semibold text-primary">Higher Secondary Certificate (HSC)</h4>
                  <p className="text-accent font-medium mt-1">Dhaka City College</p>
                </div>
                <p className="text-sm text-muted-foreground mt-2 md:mt-0">2019</p>
              </div>
              <p className="text-foreground/70">GPA: 5.00/5.00</p>
            </div>

            {/* Degree 3 */}
            <div className="bg-card rounded-lg border border-border p-8">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                <div>
                  <h4 className="text-xl font-semibold text-primary">Secondary School Certificate (SSC)</h4>
                  <p className="text-accent font-medium mt-1">YWCA School & College, Dhaka</p>
                </div>
                <p className="text-sm text-muted-foreground mt-2 md:mt-0">2017</p>
              </div>
              <p className="text-foreground/70">GPA: 5.00/5.00</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 md:py-28 bg-secondary/30">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-balance">Skills & Expertise</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Technical Skills */}
            <div className="space-y-6">
              <h4 className="text-xl font-semibold text-primary border-b border-accent pb-3">Technical Skills</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-accent"></span>
                  <span className="text-foreground/80">Microsoft Office (Word, Excel, PowerPoint)</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-accent"></span>
                  <span className="text-foreground/80">Google Sheets & Data Management</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-accent"></span>
                  <span className="text-foreground/80">HTML & CSS</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-accent"></span>
                  <span className="text-foreground/80">Data Entry & Reporting</span>
                </div>
              </div>
            </div>

            {/* Professional Skills */}
            <div className="space-y-6">
              <h4 className="text-xl font-semibold text-primary border-b border-accent pb-3">Professional Skills</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-accent"></span>
                  <span className="text-foreground/80">PTE Test Preparation & Instruction</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-accent"></span>
                  <span className="text-foreground/80">Student Guidance & Mentorship</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-accent"></span>
                  <span className="text-foreground/80">Research & Analysis</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-accent"></span>
                  <span className="text-foreground/80">Administrative & Leadership</span>
                </div>
              </div>
            </div>

            {/* Languages */}
            <div className="md:col-span-2 space-y-6">
              <h4 className="text-xl font-semibold text-primary border-b border-accent pb-3">Languages</h4>
              <div className="flex gap-8">
                <div>
                  <p className="text-foreground/80 font-medium">Bengali</p>
                  <p className="text-sm text-muted-foreground">Native Speaker</p>
                </div>
                <div>
                  <p className="text-foreground/80 font-medium">English</p>
                  <p className="text-sm text-muted-foreground">Fluent</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-12 text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6 text-balance">Let&apos;s Work Together</h3>
            <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              I&apos;m interested in opportunities where I can contribute my expertise and grow professionally. Feel free to reach out!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="mailto:zannatulferdous272002@gmail.com"
                className="inline-flex items-center gap-2 px-8 py-3 bg-primary-foreground text-primary rounded-lg font-semibold hover:shadow-lg transition-shadow"
              >
                <Mail size={20} />
                Email Me
              </a>
              <a
                href="tel:+8801925407323"
                className="inline-flex items-center gap-2 px-8 py-3 border-2 border-primary-foreground text-primary-foreground rounded-lg font-semibold hover:bg-primary-foreground/10 transition-colors"
              >
                <Phone size={20} />
                Call Me
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background py-12">
        <div className="max-w-6xl mx-auto px-6 text-center text-muted-foreground">
          <p>© 2025 Fardy Abid. All rights reserved.</p>
          <p className="text-sm mt-2">Based in Dhaka, Bangladesh</p>
        </div>
      </footer>
    </div>
  );
}
