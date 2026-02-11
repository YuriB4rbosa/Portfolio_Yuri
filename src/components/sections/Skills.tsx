import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Wrench, Brain } from 'lucide-react';

const Skills: React.FC = () => {
  const skills = {
    frontend: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'HTML', 'CSS', 'JavaScript'],
    backend: ['Python', 'Sqlite3', 'Flask', 'Node.js'],
    tools: ['Git', 'GitHub', 'Vscode', 'Figma'],
    soft: ['Comunicação', 'Resolução de problemas', 'Trabalho em equipe']
  };

  const icons = {
    frontend: Code,
    backend: Database,
    tools: Wrench,
    soft: Brain
  };

  return (
    // Ajuste: Background da seção se adapta ao tema
    <section id="skills" className="py-20 bg-white dark:bg-gray-950 transition-colors duration-500">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          {/* Ajuste: Cores de texto adaptáveis */}
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Habilidades</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Tecnologias e ferramentas que utilizo no dia a dia
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skills).map(([category, items], index) => {
            const Icon = icons[category as keyof typeof icons];
            
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                
                className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 hover:shadow-lg dark:hover:shadow-purple-500/10 transition-all border border-transparent dark:border-gray-800"
              >
                
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                
                <h3 className="text-lg font-bold mb-4 capitalize text-gray-900 dark:text-white">
                  {category}
                </h3>
                
                <ul className="space-y-2">
                  {items.map((skill) => (
                    <li key={skill} className="text-gray-600 dark:text-gray-400 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;