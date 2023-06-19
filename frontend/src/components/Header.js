import Navbar from './Navbar';
// ...
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={{ marginTop: '20px' }}>
      <div className="top-section">
        <div className="logo-text-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className="logo-container">
            <Link to="/" className="logo">
              <img src="emb.png" alt="Logo" className="logo-image" style={{ width: '50px', height: 'auto' }} />
            </Link>
          </div>
          <div className="text-container" style={{ marginLeft: '20px', marginRight: '20px' }}>
            <h1 className="heading" style={{ fontFamily: 'Georgia, serif', fontSize: '26px', fontWeight: 'bold', color: '#333' }}>
              MULTI-STATE CO-OPERATIVE SOCIETIES
              <br />
            </h1>

            <h1 className="heading" style={{ fontFamily: 'Lato, sans-serif', fontSize: '26px', fontWeight: 'bold', color: '#333' }}>
              Ministry of Cooperation, Govt. of India
              <br />
            </h1>
          </div>

          <div className="logo-container">
            <Link to="/" className="logo">
              <img src="MSCS_LOGO.png" alt="Logo" className="logo-image" style={{ width: '80px', height: 'auto' }} />
            </Link>
          </div>
          
        </div>
      </div>
      <div className="nav-area">
        <Navbar />
      </div>
    </header>
  );
};

export default Header;