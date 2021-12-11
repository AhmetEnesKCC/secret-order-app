const Footer = () => {
  const date = new Date();
  return (
    <footer className="bg-white text-center text-main-blue-v2 text-1xl pb-1">
      {date.getFullYear()} Ulastir.com © all rihts reserved
    </footer>
  );
};

export default Footer;
