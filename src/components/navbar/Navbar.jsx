import styles from './Navbar.module.css';
import logo from '../../assets/images/double-exclamation.jpeg'

const Header = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src={logo} />
      </div>
      <ul className={styles['nav-links']}>
        <li><a href="#about">ABOUT</a></li>
        <li><a href="#projects">PROJECTS</a></li>
        <li><a href="#contact">CONTACT</a></li>
      </ul>
    </nav>
  )
}
export default Header