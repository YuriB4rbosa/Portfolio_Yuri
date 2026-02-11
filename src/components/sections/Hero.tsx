import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Sparkles } from 'lucide-react';
import { ReactTyped } from 'react-typed';

const Hero: React.FC = () => {
  const scrollToNext = () => {
    const nextSection = document.getElementById('projects');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 transition-colors duration-500">
      
      {/* Partículas de fundo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400 dark:bg-purple-300 rounded-full shadow-[0_0_8px_rgba(168,85,247,0.4)]"
            initial={{
              x: typeof window !== 'undefined' ? Math.random() * window.innerWidth : 0,
              y: typeof window !== 'undefined' ? Math.random() * window.innerHeight : 0,
            }}
            animate={{
              y: [null, -30, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* --- NOVO: ESPAÇO PARA SUA FOTO --- */}
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 260, damping: 20 }}
            className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-8"
          >
            {/* Círculo de gradiente atrás da foto para dar brilho */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full blur-sm opacity-50 animate-pulse"></div>
            
            {/* Borda e Foto */}
            <div className="relative w-full h-full rounded-full border-4 border-white dark:border-gray-800 overflow-hidden shadow-2xl">
              <img 
                src="/minha-foto.png" // Coloque sua foto na pasta public com este nome!
                alt="Minha Foto"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
          {/* ---------------------------------- */}

          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 text-sm font-medium border border-purple-100 dark:border-purple-900/30">
            <Sparkles className="w-4 h-4" />
            Desenvolvedor Python | API Rest | Sqlite3
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900 dark:text-white">
            <span className="block">Programando Sistemas</span>
            <span className="block bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              <ReactTyped
                strings={[
                  'Dev Python',
                  'API Rest',
                  'Banco de Dados',
                  'Sistemas CRUD'
                ]}
                typeSpeed={50}
                backSpeed={30}
                loop
              />
            </span>
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
            Desenvolvedor focado em backend com Python. Experiência em criação de APIs, sistemas CRUD e integração com banco de dados SQLite. Estudante de Análise e Desenvolvimento de Sistemas.
          </p>

         <div className="flex flex-col sm:flex-row gap-4 justify-center">
  <motion.a
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    href="#projects"
    className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-full font-semibold shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-all flex items-center justify-center gap-2"
  >
    Ver Projetos
  </motion.a>
  
  <motion.a
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    href="/Curriculo.pdf" // Nome do arquivo na pasta public
    target="_blank"
    rel="noopener noreferrer"
    className="px-8 py-3 border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-full font-semibold hover:border-purple-500 dark:hover:border-purple-500 hover:text-purple-600 dark:hover:text-purple-400 transition-colors flex items-center justify-center gap-2"
  >
    <svg 
      className="w-5 h-5" 
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="浸9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
    Baixar Currículo
  </motion.a>
</div> 
        </motion.div>

        <motion.button
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={scrollToNext}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 p-2 group"
        >
          <ArrowDown className="w-6 h-6 text-gray-400 group-hover:text-purple-500 transition-colors" />
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;