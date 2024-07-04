import '../styles/Header.css'; 
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <div className="header px-4">
      <img src={logo} alt="Logo" className="logo" />
      <h1>Swimlane UI</h1>
    </div>
  );
};

export default Header;