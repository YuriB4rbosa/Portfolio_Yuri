import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart, Target } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold mb-4">Vamos trabalhar juntos?</h3>
            <p className="text-gray-400 mb-6">
              Construindo soluções digitais incríveis
            </p>
            
            <div className="flex justify-center space-x-6 mb-8">
              {[
                { icon: Github, href: 'https://github.com/YuriB4rbosa' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/yuri-horta-barbosa-386464295/' },
                
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.2, y: -5 }}
                  className="p-3 bg-gray-800 rounded-full hover:bg-purple-600 transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>

            <div className="text-gray-400 text-sm">
              <p className="flex items-center justify-center gap-1">
                 Criado por Yuri Barbosa
              </p>
              <p className="mt-2">© 2026 Todos os direitos reservados</p>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;