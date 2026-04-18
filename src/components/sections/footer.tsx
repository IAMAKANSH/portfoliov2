export const Footer = () => {
  return (
    <footer className="relative border-t border-white/5 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
        <p>© 2026 Akansh Srivastava. Built with Next.js, Tailwind & Framer Motion.</p>
        <div className="flex gap-5">
          <a href="#" className="hover:text-white transition-colors">GitHub</a>
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="mailto:srivastavaak@microsoft.com" className="hover:text-white transition-colors">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};
