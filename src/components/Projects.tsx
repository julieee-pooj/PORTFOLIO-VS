import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Women\'s Safety System',
      description: 'An emergency safety application that uses voice control to trigger quick assistance during critical situations. Designed to provide fast, hands-free activation for women in emergencies through voice-based commands.',
      tags: ['Python', 'Voice Recognition', 'API', 'React'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Search Filter Application',
      description: 'A dynamic web application that enables users to efficiently search, filter, and organize information in real time. Features intuitive filtering controls and a clean UI for a smooth user experience.',
      tags: ['React', 'JavaScript', 'SQL', 'Node.js'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Personal Portfolio Website',
      description: 'A fully responsive personal portfolio website built with React and Tailwind CSS. Features smooth scroll animations, dark mode toggle, a skills showcase, project cards, and a contact form.',
      tags: ['React', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
      github: '#',
      demo: '#',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="projects" className="py-20 px-4 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="section-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Some Things I've Built
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card flex flex-col h-full"
            >
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">{project.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4 flex-grow leading-relaxed">{project.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-indigo/20 text-indigo dark:bg-indigo/30 dark:text-indigo-300 rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4">
                <a
                  href={project.github}
                  className="flex items-center gap-2 text-indigo hover:text-accent font-semibold transition-colors"
                >
                  <Github size={18} />
                  GitHub
                </a>
                <a
                  href={project.demo}
                  className="flex items-center gap-2 text-indigo hover:text-accent font-semibold transition-colors"
                >
                  <ExternalLink size={18} />
                  Live Demo
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
