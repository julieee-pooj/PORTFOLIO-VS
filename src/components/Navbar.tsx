import { useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const navLinks = [
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-navy/80 backdrop-blur-md z-50 shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="font-mono text-2xl font-bold text-indigo">
          dev_portfolio
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="nav-link"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun size={20} className="text-yellow-500" />
            ) : (
              <Moon size={20} className="text-slate-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun size={20} className="text-yellow-500" />
            ) : (
              <Moon size={20} className="text-slate-700" />
            )}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Content */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 p-4 space-y-3">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="block w-full text-left nav-link py-2 px-4 rounded hover:bg-slate-100 dark:hover:bg-slate-700"
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
