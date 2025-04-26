import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"
import logo from "../assets/SharanLogo.png"
const Navbar = () => {
  return (
   <nav className="flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
      <a href="/" aria-label="home">
      <img src={logo} className="mx-2" width={50} height={50} alt="Logo"/>
      </a>
    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl">
      <a href="https://www.linkedin.com/in/sharan-madhavan-dadigela-a63b4a35b" 
      target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <FaLinkedin />
      </a>
      <a href="https://github.com/SharanMadhavan/" 
      target="_blank" rel="noopener noreferrer" aria-label="Github">
        <FaGithub />
      </a>
      <a href="https://www.linkedin.com/in/sharan-madhavan-dadigela-a63b4a35b"
      target="_blank" rel="noopener noreferrer" aria-label="Instagram">
        <FaInstagram />
      </a>
      <a href="https://twitter.com/@sharan_madhavan" 
      target="_blank" rel="noopener noreferrer" aria-label="Twitter">
        <FaTwitter />
      </a>
    </div>
   </nav>
  )
}

export default Navbar