import React from 'react';
import { Briefcase } from 'lucide-react';
import { EXPERIENCES } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Work Experience</h2>
          <p className="mt-4 text-lg text-slate-500">
            A track record of improving operational efficiency and driving data-backed decisions.
          </p>
        </div>

        <div className="relative border-l-2 border-slate-200 ml-4 md:ml-6 space-y-12">
          {EXPERIENCES.map((exp, index) => (
            <div key={exp.id} className="relative pl-8 md:pl-12">
              {/* Timeline Dot */}
              <div className="absolute -left-[9px] top-1 bg-blue-600 h-5 w-5 rounded-full border-4 border-slate-50"></div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-800">{exp.role}</h3>
                    <div className="flex items-center text-blue-600 font-medium mt-1">
                      <Briefcase className="w-4 h-4 mr-2" />
                      {exp.company}
                    </div>
                  </div>
                  <div className="mt-2 md:mt-0 px-3 py-1 bg-slate-100 rounded-full text-sm font-semibold text-slate-600 whitespace-nowrap">
                    {exp.period}
                  </div>
                </div>

                <ul className="space-y-3">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="mr-3 text-blue-500 mt-1.5 text-xs">•</span>
                      <span className="text-slate-600 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
