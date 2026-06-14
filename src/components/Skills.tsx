import { motion } from 'framer-motion';
import { Code2, Globe, Database } from 'lucide-react';
import { SiPython, SiC, SiGit, SiNodedotjs, SiReact } from 'react-icons/si';

const Skills = () => {
  const skills = [
    { name: 'Python', icon: SiPython, color: '#3776ab' },
    { name: 'C', icon: SiC, color: '#a8b9cc' },
    { name: 'Git', icon: SiGit, color: '#f34f29' },
    { name: 'VS Code', icon: Code2, color: '#0078d4' },
    { name: 'Node.js', icon: SiNodedotjs, color: '#68a063' },
    { name: 'React', icon: SiReact, color: '#61dafb' },
    { name: 'API', icon: Globe, color: '#4f46e5' },
    { name: 'SQL', icon: Database, color: '#f59e0b' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="section-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Skills & Tools
        </motion.h2>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card flex flex-col items-center justify-center py-8 hover:scale-110"
              >
                <Icon size={48} style={{ color: skill.color }} className="mb-3" />
                <p className="font-semibold text-slate-900 dark:text-white text-center">{skill.name}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
