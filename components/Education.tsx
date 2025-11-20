import React from 'react';
import { Award, BookOpen, ShieldCheck } from 'lucide-react';
import { EDUCATION, CERTIFICATIONS } from '../constants';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Education Column */}
          <div>
            <div className="flex items-center mb-8">
              <BookOpen className="w-8 h-8 text-blue-600 mr-3" />
              <h2 className="text-3xl font-bold text-slate-900">Education</h2>
            </div>
            
            <div className="space-y-6">
              {EDUCATION.map((edu) => (
                <div key={edu.id} className="group relative bg-slate-50 p-6 rounded-xl border border-slate-100 transition-colors hover:bg-white hover:shadow-lg">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">{edu.degree}</h3>
                      <p className="text-blue-600 font-medium mt-1">{edu.institution}</p>
                    </div>
                    <span className="mt-2 sm:mt-0 text-sm text-slate-500 font-mono bg-white px-2 py-1 rounded border border-slate-200">
                      {edu.period}
                    </span>
                  </div>
                  <p className="mt-4 text-sm text-slate-500 font-medium">
                    {edu.details}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Column */}
          <div>
            <div className="flex items-center mb-8">
              <Award className="w-8 h-8 text-blue-600 mr-3" />
              <h2 className="text-3xl font-bold text-slate-900">Certifications</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {CERTIFICATIONS.map((cert) => (
                <div key={cert.id} className="p-4 border border-slate-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all">
                  <div className="flex items-start justify-between mb-2">
                    <ShieldCheck className="w-5 h-5 text-green-500" />
                    <span className="text-[10px] uppercase tracking-wider font-bold text-slate-400">{cert.category}</span>
                  </div>
                  <h4 className="font-semibold text-slate-800 text-sm leading-tight mb-1">
                    {cert.name}
                  </h4>
                  <p className="text-xs text-slate-500">Issued by {cert.issuer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Education;