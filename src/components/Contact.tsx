import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { useState } from 'react';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactFormData) => {
    console.log('Form submitted:', data);
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

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
    <section id="contact" className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          className="section-heading text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </motion.h2>

        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-slate-50 dark:bg-slate-800 rounded-xl p-8 shadow-lg"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Name Field */}
          <motion.div variants={itemVariants} className="mb-6">
            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
              Name
            </label>
            <input
              {...register('name')}
              type="text"
              className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo transition-all"
              placeholder="Your name"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
          </motion.div>

          {/* Email Field */}
          <motion.div variants={itemVariants} className="mb-6">
            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
              Email
            </label>
            <input
              {...register('email')}
              type="email"
              className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo transition-all"
              placeholder="your.email@example.com"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </motion.div>

          {/* Message Field */}
          <motion.div variants={itemVariants} className="mb-6">
            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
              Message
            </label>
            <textarea
              {...register('message')}
              rows={5}
              className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo transition-all resize-none"
              placeholder="Your message..."
            />
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
          </motion.div>

          {/* Submit Button */}
          <motion.button
            variants={itemVariants}
            type="submit"
            className="w-full btn-primary mb-4"
          >
            Send Message
          </motion.button>

          {/* Success Message */}
          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 rounded-lg text-center font-semibold"
            >
              Thank you for your message. I'll get back to you soon.
            </motion.div>
          )}
        </motion.form>

        {/* Social Links */}
        <motion.div
          className="flex justify-center gap-6 mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.a
            variants={itemVariants}
            href="#"
            className="p-3 bg-slate-900 dark:bg-slate-700 rounded-lg hover:bg-indigo dark:hover:bg-indigo transition-colors"
            aria-label="GitHub"
          >
            <Github size={24} className="text-white" />
          </motion.a>
          <motion.a
            variants={itemVariants}
            href="#"
            className="p-3 bg-slate-900 dark:bg-slate-700 rounded-lg hover:bg-indigo dark:hover:bg-indigo transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} className="text-white" />
          </motion.a>
          <motion.a
            variants={itemVariants}
            href="#"
            className="p-3 bg-slate-900 dark:bg-slate-700 rounded-lg hover:bg-indigo dark:hover:bg-indigo transition-colors"
            aria-label="Twitter"
          >
            <Twitter size={24} className="text-white" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
