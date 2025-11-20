import React from 'react';
import { Mail, Linkedin, Phone } from 'lucide-react';
import { CONTACT_INFO, PERSONAL_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          <div>
            <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
            <p className="text-slate-400 mb-8 max-w-md">
              I'm always open to discussing new opportunities in Business Operations, Sales Ops, and Data Analytics.
            </p>
            
            <div className="space-y-4">
              <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center text-slate-300 hover:text-white transition-colors group">
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-blue-600 transition-colors mr-4">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-lg">{CONTACT_INFO.email}</span>
              </a>
              
              <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center text-slate-300 hover:text-white transition-colors group">
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-blue-600 transition-colors mr-4">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="text-lg">{CONTACT_INFO.phone}</span>
              </a>

              <a href={CONTACT_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center text-slate-300 hover:text-white transition-colors group">
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-blue-600 transition-colors mr-4">
                  <Linkedin className="w-5 h-5" />
                </div>
                <span className="text-lg">LinkedIn Profile</span>
              </a>
            </div>
          </div>

          <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
             <h3 className="text-xl font-bold mb-6">Send a Message</h3>
             <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
               <div>
                 <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-1">Name</label>
                 <input type="text" id="name" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Your Name" />
               </div>
               <div>
                 <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-1">Email</label>
                 <input type="email" id="email" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-blue-500 outline-none" placeholder="your@email.com" />
               </div>
               <div>
                 <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-1">Message</label>
                 <textarea id="message" rows={4} className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Hello, I'd like to discuss..."></textarea>
               </div>
               <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-colors">
                 Send Message
               </button>
             </form>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;