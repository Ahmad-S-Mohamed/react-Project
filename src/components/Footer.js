/*
us module to  css file Name to Access this only file.
or give it father Element with special class
*/



import  fotter from "./footer.module.css";


const Footer = () => {
  return (
    <div>
      <footer className={fotter.style}>
       developed by Ahmad Salah.com
        <span>🧡</span>
      </footer>
    </div>
  );
};

export default Footer;



