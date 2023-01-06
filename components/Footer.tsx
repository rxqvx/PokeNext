import { FC } from "react";
import styles from "../styles/Footer.module.css";

const Footer: FC = () => {
	return (
		<footer className={styles.footer}>
			<p>
				<span>Made PokeNext with ❤️ by Henrique Kenji</span> &copy; 2022
			</p>
		</footer>
	);
};

export default Footer;
