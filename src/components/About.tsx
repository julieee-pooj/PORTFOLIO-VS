import { motion } from 'framer-motion';

const About = () => {
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
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="py-20 px-4 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="section-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-12 items-start">
          {/* Avatar Block */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center md:justify-start"
          >
            <div className="w-48 h-48 bg-gradient-to-br from-indigo to-accent rounded-xl flex items-center justify-center shadow-xl">
              <span className="text-6xl font-bold text-white font-mono">AP</span>
            </div>
          </motion.div>

          {/* Bio Text */}
          <motion.div
            className="md:col-span-2 space-y-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p variants={itemVariants} className="text-slate-700 dark:text-slate-300 leading-relaxed">
              Hello! I'm Adulla Pooja, a B.Tech third-year student passionate about learning programming and web development to build practical, real-world solutions.
            </motion.p>

            <motion.p variants={itemVariants} className="text-slate-700 dark:text-slate-300 leading-relaxed">
              I started exploring software development recently during my engineering studies, and it has grown into a strong interest in creating useful and user-friendly applications.
            </motion.p>

            <motion.p variants={itemVariants} className="text-slate-700 dark:text-slate-300 leading-relaxed">
              Currently, I'm gaining hands-on experience through an internship and working on projects like a Women's Safety System using Voice Control and a Search Filter Application.
            </motion.p>

            <motion.p variants={itemVariants} className="text-slate-700 dark:text-slate-300 leading-relaxed">
              My focus is on improving my development skills and moving toward building impactful, user-centered software in the future.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
