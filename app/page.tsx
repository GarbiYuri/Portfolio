'use client';
import { motion, HTMLMotionProps, Variants } from 'framer-motion';
import { Github, Linkedin, Mail, MessageCircle } from 'lucide-react';
import BurgerMenu from './components/Menu';

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
};

interface AnimatedSectionProps extends HTMLMotionProps<"section"> {
  children: React.ReactNode;
}

const AnimatedSection = ({ children, className = '', id, ...props }: AnimatedSectionProps) => (
  <motion.section
    id={id}
    initial="initial"
    whileInView="whileInView"
    viewport={{ once: true, amount: 0.3 }}
    variants={fadeInUp}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className={`py-20 px-6 md:px-10 ${className}`}
    {...props}
  >
    {children}
  </motion.section>
);

export default function Home() {
  const projetos = [
    { title: 'Blog BackendJava', desc: 'Criação de api para Blog Estilo Rede Social.', tech: ['Java', 'SpringBoot', 'Docker', 'PostgreSQL', 'JWT'] },
    { title: 'Seu Doce Pedido', desc: 'Site Moderno para Venda de Doces. TCC de Curso técnico.', tech: ['Laravel', 'PHP','React', 'Tailwind', 'Javascript'] },
    { title: 'Escape Room', desc: 'Projeto de Jogo de Sala de Escape durante Curso Técnico.', tech: ['Javascript', 'PHP', 'SQL'] },
  ];

  return (
    <div id="outer-container" className="min-h-screen bg-zinc-50 font-sans text-zinc-900 dark:bg-black dark:text-zinc-100">
      

      <BurgerMenu />

      <div id="page-wrap">
        
        {/* --- NAVBAR --- */}
        <nav className="fixed top-0 z-50 w-full border-b border-zinc-200 bg-zinc-50/80 backdrop-blur-sm dark:border-zinc-800 dark:bg-black/80">
          <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
            <span className="text-xl font-bold tracking-tight">Francisco<span className="text-blue-600">.vps</span></span>
          </div> 
        </nav>

        <main className="max-w-7xl mx-auto pt-24">
          
          {/* --- SEÇÃO SOBRE --- */}
          <AnimatedSection id="sobre" className="flex flex-col items-center text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.2 }}
              className="mb-6 h-32 w-32 rounded-full bg-zinc-200 ring-2 ring-blue-600 dark:bg-zinc-800 overflow-hidden"
            >
              <img src='/eu.jpeg' className="w-full h-full object-cover" alt="Foto de Francisco"/>
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter mb-4">
              Olá, eu sou o <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Francisco</span>
            </h1>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mb-8">
              Estudante de ADS. Apaixonado por transformar lógica em experiências digitais incríveis, do backend ao frontend.
            </p>
            <div className="flex gap-4">
              <a href="#projetos" className="px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition shadow-lg shadow-blue-500/20">
                Ver Projetos
              </a>
              <a href="https://wa.me/5519996206053" target="_blank" className="px-6 py-3 bg-zinc-200 dark:bg-zinc-800 rounded-full font-semibold hover:bg-zinc-300 dark:hover:bg-zinc-700 transition">
                WhatsApp
              </a>
            </div>
          </AnimatedSection>

          <AnimatedSection id="projetos" className="bg-zinc-100/50 dark:bg-zinc-900/50 rounded-3xl my-10">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold tracking-tight mb-2">Projetos em Destaque</h2>
              <p className="text-zinc-600 dark:text-zinc-400">O que ando desenvolvendo na FATEC.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projetos.map((proj, index) => (
                <motion.div
                  key={proj.title}
                  initial="initial"
                  whileInView="whileInView"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-2xl shadow-sm hover:border-blue-300 dark:hover:border-blue-700 transition-all hover:-translate-y-1"
                >
                  <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4">{proj.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {proj.tech.map(tech => (
                      <span key={tech} className="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-700 rounded-full dark:bg-blue-900/30 dark:text-blue-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection id="contato" className="text-center">
            <h2 className="text-4xl font-bold tracking-tight mb-4">Vamos Conversar?</h2>
            <div className="flex justify-center gap-8 text-zinc-500 dark:text-zinc-400">
              <a href="https://github.com/GarbiYuri" target='_blank' className="hover:text-blue-600 transition transform hover:scale-110"><Github size={32} /></a>
              <a href="https://www.linkedin.com/in/franciscogarbi" target='_blank' className="hover:text-blue-600 transition transform hover:scale-110"><Linkedin size={32} /></a>
              <a href="mailto:franciscoyuri145@gmail.com" className="hover:text-blue-600 transition transform hover:scale-110"><Mail size={32} /></a>
              <a href="https://wa.me/5519996206053" target="_blank" className="hover:text-green-500 transition transform hover:scale-110"><MessageCircle size={32} /></a>
            </div>
          </AnimatedSection>

        </main>

        <footer className="border-t border-zinc-100 dark:border-zinc-800 mt-20 py-8 text-center text-sm text-zinc-500 dark:text-zinc-600">
          <p>&copy; {new Date().getFullYear()} Francisco. VPS Portfólio.</p>
          <p className="mt-1">Next.js + Framer Motion + Tailwind + IA.</p>
        </footer>
      </div> 
    </div> 
  );
}