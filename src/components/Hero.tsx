import { motion } from 'framer-motion';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Glowing background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo/10 via-transparent to-accent/10 animate-glow"></div>

      <motion.div
        className="max-w-4xl mx-auto px-4 z-10 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p variants={itemVariants} className="text-lg text-slate-600 dark:text-slate-400 mb-4 font-mono">
          Hi, my name is
        </motion.p>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-indigo via-accent to-indigo bg-clip-text text-transparent mb-6"
        >
          Adulla Pooja.
        </motion.h1>

        <motion.h2 variants={itemVariants} className="text-2xl md:text-4xl font-bold text-slate-700 dark:text-slate-300 mb-6">
          B.Tech Student & Developer.
        </motion.h2>

        <motion.p variants={itemVariants} className="text-base md:text-lg text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          I'm a B.Tech third-year student exploring programming languages and web development. I enjoy learning how software is built and applying it through hands-on projects. Currently, I'm gaining practical experience through an internship and improving my development skills. In the future, I aim to work in product-based development and build impactful software products.
        </motion.p>

        <motion.button
          variants={itemVariants}
          onClick={() => scrollToSection('projects')}
          className="btn-primary text-lg"
        >
          Check out my work
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;
