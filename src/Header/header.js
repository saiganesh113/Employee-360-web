import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faBell} from '@fortawesome/free-solid-svg-icons';
import './header.css';
import Searchbar from '../Searchbar/searchbar';

function Header() {
  return (
    <>
    <div className='header'>
        <div className='htags'>
        <h1>Dashboard</h1>
        <h5>Hello, User. Welcome back</h5>
        </div>
        <div className='search'><Searchbar/></div>
        <div className='icon1'><FontAwesomeIcon icon={faComments} /></div>
        <div className='icon2'><FontAwesomeIcon icon={faBell} /></div>
        <img className='headerimage' src="user.png" style={{ width: "30px", height: "30px" }} alt="Mr. User"/>
    </div>
    </>
  );
}

export default Header;