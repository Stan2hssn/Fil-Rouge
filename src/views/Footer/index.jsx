import {Link} from 'react-router-dom'
import './style.scss'

function Footer() {
  return (
    <footer>
        <Link to="/">Home</Link>
        <Link to="/cards">Cards</Link>
    </footer>
  );
}

export default Footer;
