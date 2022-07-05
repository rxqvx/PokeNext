import Link from "next/link";
import Image from "next/image";
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Image
          src="/images/pokeball.png"
          alt="pokeball"
          width={30}
          height={30}
        />
        <h1>PokeNext</h1>
      </div>
      <ul className={styles.link_items}>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
