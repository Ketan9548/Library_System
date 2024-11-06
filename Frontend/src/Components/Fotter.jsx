const Footer = () => {
  return (
    <div className="w-screen">
      <footer className="bg-gray-800 text-white py-8 px-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h2 className="text-xl font-semibold">Library Management System</h2>
            <p className="text-sm mt-2">
              Efficiently manage your books and resources
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4 text-sm">
            <a href="#home" className="hover:text-gray-400">
              Home
            </a>
            <a href="#about" className="hover:text-gray-400">
              About Us
            </a>
            <a href="#contact" className="hover:text-gray-400">
              Contact
            </a>
            <a href="#privacy" className="hover:text-gray-400">
              Privacy Policy
            </a>
          </div>

          <div className="flex justify-center md:justify-start gap-4 text-lg">
            <a
              href="https://www.facebook.com"
              className="hover:text-gray-400"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f">facebook</i>
            </a>
            <a
              href="https://www.twitter.com"
              className="hover:text-gray-400"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter">twitter</i>
            </a>
            <a
              href="https://www.instagram.com"
              className="hover:text-gray-400"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram">insta</i>
            </a>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-6"></div>

        <div className="text-center text-xs text-gray-500 mt-4">
          &copy; {new Date().getFullYear()} Library Management System. All
          rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
