type FooterProps = {
  darkMode: boolean;
};

function Footer({ darkMode }: FooterProps) {
  return (
    <footer
      className={
        darkMode
          ? "bg-blue-600 text-white text-center py-4 mt-10"
          : "bg-gray-900 text-white text-center py-4 mt-10"
      }
    >
      <p>© 2026 Sejoura</p>
    </footer>
  );
}

export default Footer;