import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Contact from './components/sections/Contact';
import { Project, NavItem } from './types';

const App: React.FC = () => {
  const navItems: NavItem[] = [
    { label: 'Início', href: '#home' },
    { label: 'Projetos', href: '#projects' },
    { label: 'Habilidades', href: '#skills' },
    { label: 'Contato', href: '#contact' },
  ];

  const projects: Project[] = [
    {
      id: '1',
      title: 'Gym-manager-API',
      description: 'Gym Manager API Uma API robusta para gerenciamento de academias, focada em controle de acessos, rotas autenticadas e gestão de dados. Este projeto utiliza uma arquitetura organizada para separar responsabilidades de autenticação, lógica de rotas e utilitários.',
      technologies: ['Python', 'Flask', 'Sqlite3', 'HTML5', 'CSS3', 'JavaScript'],
      imageUrl: 'https://imgs.search.brave.com/xladY9jLbk2IZs9DdxESUM0CO0ULpV59JCJUtetjzYM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTIy/NzA1NjUyNC9mci9w/aG90by9hcGktaW50/ZXJmYWNlLWRlLXBy/b2dyYW1tYXRpb24t/ZGFwcGxpY2F0aW9u/cy1vdXRpbC1kZS1k/JUMzJUE5dmVsb3Bw/ZW1lbnQtbG9naWNp/ZWwtYnVzaW5lc3Mu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PU5tVzg2YkZMZ2dR/MVpIVjJ4NFlmODdE/Rm5pc0dWNHZwRTFl/SE1HZkQyQlk9',
      githubUrl: 'https://github.com/YuriB4rbosa/Gym-Manager-API',
      liveUrl: 'https://gym-manager-api-8lp9.onrender.com/',
      featured: true,
    },
    {
      id: '2',
      title: 'Projeto de extensão Faculdade',
      description: 'Site de aprendizado sobre a religião da Umbanda com o intuito de ajudar tanto professores a ensinarem, quanto alunos a aprenderem mais sobre a religião. ',
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
      imageUrl: 'https://imgs.search.brave.com/qXT8-yHdpu825SBllsvcieDKymoVtKe5IdxSYO86nGs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YXN0cm9jZW50cm8u/Y29tLmJyL2Jsb2cv/d3AtY29udGVudC91/cGxvYWRzLzIwMjIv/MDkvQ29tby1lbnRy/YXItbmEtdW1iYW5k/YS5qcGc',
      githubUrl: 'https://github.com/YuriB4rbosa/Projeto-Extensao',
      liveUrl: 'https://yurib4rbosa.github.io/Projeto-Extensao/',
      featured: true,
    },
    {
      id: '3',
      title: 'Sistema de estoque ',
      description: 'Programação de sistema simulando um carrinho e um estoque.',
      technologies: ['Python', 'Json', 'Sqlite3'],
      imageUrl: 'https://imgs.search.brave.com/Na0Yu-3J40IGVVoJZGuvbMWiSMMxJf7fWcoX4JXBGMg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Z3J1cG9jcGNvbi5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjMvMDEvU2lzdGVt/YXMtZGUtY29udHJv/bGUtZGUtZXN0b3F1/ZS00LTEwMjR4Njgz/LnBuZw',
      githubUrl: 'https://github.com/YuriB4rbosa/Sistema_de_loja_Python/tree/main',
      liveUrl: 'https://demo.com',
      featured: false,
    },
    
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-500">
      <Header navItems={navItems} />
      <main>
        <Hero />
        <Projects projects={projects} />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;