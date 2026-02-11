import React from 'react';
import { motion } from 'framer-motion';
import { Download, ExternalLink } from 'lucide-react';
import { ReactTyped } from 'react-typed';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-28 pb-12 md:pt-0 md:pb-0 bg-white dark:bg-gray-950 transition-colors duration-500">
      <div className="container mx-auto px-6 text-center">
        
        {/* Foto com ajuste de margem para não colar no Header no mobile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 mt-4 md:mt-0"
        >
          <div className="relative w-32 h-32 md:w-48 md:h-48 mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
            <img
              src="/minha-foto.png" // Caminho correto na pasta public
              alt="Yuri Barbosa"
              className="relative w-full h-full rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-2xl"
            />
          </div>
        </motion.div>

        {/* Badge de Tecnologias */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 text-sm font-medium mb-6 border border-purple-100 dark:border-purple-800"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
          </span>
          Desenvolvedor Python | API Rest | Sqlite3
        </motion.div>

        {/* Título Principal com Responsividade */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-4xl md:text-7xl font-bold mb-6 text-gray-900 dark:text-white leading-tight"
        >
          Programando Sistemas <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">
            <ReactTyped
              strings={["Dev", "Backend", "Python", "Banco de Dados"]}
              typeSpeed={50}
              backSpeed={30}
              loop
            />
          </span>
        </motion.h1>

        {/* Descrição baseada no seu currículo */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto px-4"
        >
          Desenvolvedor focado em backend com Python. Experiência em criação de APIs, 
          sistemas CRUD e integração com banco de dados SQLite. 
          Estudante de Análise e Desenvolvimento de Sistemas.
        </motion.p>

        {/* Botões - Ajustados para empilhar no mobile (flex-col) e alinhar no PC (sm:flex-row) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button 
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-xl font-bold shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-all flex items-center justify-center gap-2"
          >
            Ver Projetos
            <ExternalLink className="w-5 h-5" />
          </button>
          
          <a
            href="/Curriculo.pdf" // Nome exato do arquivo na pasta public
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-gray-900 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-800 rounded-xl font-bold hover:bg-gray-50 dark:hover:bg-gray-800 transition-all flex items-center justify-center gap-2"
          >
            Baixar Currículo
            <Download className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;