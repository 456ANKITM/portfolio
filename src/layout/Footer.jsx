
import { FaGithub, FaLinkedin } from "react-icons/fa";

const socialLinks = [
  { icon: FaGithub, href: "https://github.com/456ANKITM", label: "GitHub" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/ankit-mishra-8537433aa/", label: "LinkedIn" },
];

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-gradient-to-b from-transparent to-black/40 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-10 items-center">
          {/* Branding */}
          <div className="text-center md:text-left space-y-2">
            <h2 className="text-2xl font-bold tracking-tight">
              AM<span className="text-primary">.</span>
            </h2>
            <p className="text-sm text-muted-foreground">
              Crafting modern web experiences with performance and precision.
            </p>
            <p className="text-xs text-muted-foreground">
              © {currentYear} Ankit Mishra
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex justify-center flex-wrap gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-sm text-muted-foreground hover:text-white transition-colors group"
              >
                {link.label}
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-primary transition-all group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Social */}
          <div className="flex justify-center md:justify-end gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="p-3 rounded-full bg-white/5 hover:bg-primary/20 hover:text-primary transition-all hover:scale-110"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-white/10 text-center text-xs text-muted-foreground flex items-center justify-center gap-1">
          {/* Made with <GitBranch className="w-4 h-4 text-red-500" /> by Ankit */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
