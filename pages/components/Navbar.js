import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <div>
        <Image
          src="/images/pokeball.png"
          alt="pokeball"
          width={30}
          height={30}
        />
        <h1>PokeNext</h1>
      </div>
      <ul>
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
