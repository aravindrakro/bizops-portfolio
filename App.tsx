import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-blue-100 selection:text-blue-900">
      <Header />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Education />
      </main>
      <Footer />
    </div>
  );
}

export default App;