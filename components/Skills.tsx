import React from 'react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Tooltip } from 'recharts';
import { SKILL_CATEGORIES, CATEGORY_ICONS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Technical Expertise</h2>
          <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
            A comprehensive toolkit spanning CRM management, data analytics, and process automation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Chart Column */}
          <div className="lg:col-span-1 h-80 w-full bg-slate-50 rounded-2xl p-4 shadow-inner border border-slate-100">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="70%" data={SKILL_CATEGORIES}>
                <PolarGrid stroke="#cbd5e1" />
                <PolarAngleAxis dataKey="name" tick={{ fill: '#64748b', fontSize: 11 }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                <Radar
                  name="Proficiency"
                  dataKey="score"
                  stroke="#2563eb"
                  strokeWidth={2}
                  fill="#3b82f6"
                  fillOpacity={0.5}
                />
                <Tooltip 
                  contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  itemStyle={{ color: '#1e293b', fontWeight: 'bold' }}
                />
              </RadarChart>
            </ResponsiveContainer>
            <p className="text-center text-xs text-slate-400 mt-2">Skill Distribution Visualization</p>
          </div>

          {/* Skills List Column */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {SKILL_CATEGORIES.map((category) => {
              // Get icon dynamically based on category name if available, else default to circle
              const IconComponent = CATEGORY_ICONS[category.name as keyof typeof CATEGORY_ICONS];
              
              return (
                <div key={category.name} className="bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-blue-50 rounded-lg mr-3">
                      {IconComponent && <IconComponent className="w-5 h-5 text-blue-600" />}
                    </div>
                    <h3 className="font-bold text-slate-800">{category.name}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-slate-50 text-slate-600 text-sm rounded-full border border-slate-100"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;