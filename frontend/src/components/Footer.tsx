type FooterProps = {
  darkMode: boolean;
};

function Footer({ darkMode }: FooterProps) {
  return (
    <footer className={`glass mt-12 py-6 ${darkMode ? 'bg-black/30' : 'bg-white/20'}`}>
      <div className="container-max text-center text-sm text-gray-500">
        <p>© 2026 Sejoura — Built with ❤️</p>
      </div>
    </footer>
  );
}

export default Footer;