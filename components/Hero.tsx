import React from 'react';
import { Download, Linkedin, Mail, MapPin } from 'lucide-react';
import { PERSONAL_INFO, CONTACT_INFO } from '../constants';

const Hero: React.FC = () => {
  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('contact');
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const handleDownloadResume = () => {
    window.print();
  };

  return (
    <section id="hero" className="pt-32 pb-16 md:pt-48 md:pb-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:justify-between">
          {/* Text Content */}
          <div className="lg:w-1/2 space-y-8">
            <div>
              <span className="inline-block px-3 py-1 text-sm font-semibold tracking-wide text-blue-600 uppercase bg-blue-100 rounded-full mb-4">
                Resume Portfolio
              </span>
              <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Hi, I'm <span className="text-blue-600">{PERSONAL_INFO.name.split(' ')[0]}</span>.
                <br />
                <span className="text-2xl md:text-4xl text-slate-600 font-semibold mt-2 block">
                  {PERSONAL_INFO.title}
                </span>
              </h1>
              <p className="mt-4 max-w-2xl text-xl text-slate-500 leading-relaxed">
                {PERSONAL_INFO.summary}
              </p>
            </div>

            {/* Action Buttons - Hidden during print */}
            <div className="flex flex-col sm:flex-row gap-4 print:hidden">
              <a
                href="#contact"
                onClick={scrollToContact}
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg transition-all shadow-lg hover:shadow-xl cursor-pointer"
              >
                Contact Me
              </a>
              <button
                onClick={handleDownloadResume}
                className="inline-flex items-center justify-center px-8 py-3 border border-slate-300 text-base font-medium rounded-md text-slate-700 bg-white hover:bg-slate-50 md:py-4 md:text-lg transition-all cursor-pointer"
              >
                <Download className="mr-2 h-5 w-5" />
                Save as PDF
              </button>
            </div>

            <div className="flex items-center space-x-6 text-slate-500 mt-8">
              <a href={CONTACT_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-blue-600 transition-colors">
                <Mail className="h-6 w-6" />
              </a>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                <span>{CONTACT_INFO.location}</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="mt-12 lg:mt-0 lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-100 rounded-full blur-2xl opacity-70 print:hidden"></div>
              <img
                className="relative rounded-full w-64 h-64 md:w-80 md:h-80 object-cover border-4 border-white shadow-2xl"
                src="https://raw.githubusercontent.com/aravindrakro/my-bizops-portfolio/main/aravind-profile.jpg"
                alt={PERSONAL_INFO.name}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&h=400&fit=crop";
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;