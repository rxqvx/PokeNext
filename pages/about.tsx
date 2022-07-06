import Image from 'next/image'
import styles from '../styles/About.module.css'


const About = () => {
    return (
        <div className={styles.about}>
            <h1>About project</h1>
            <p>
                Projeto de uma Pokedex realizado com framework Next.js, utilizando a api do pokemon(PokeAPI), que foi seguido pelo curso do Matheus Battisti.
            </p>
            <Image src="/images/gengar.png" width="300" height="300" alt="Charizard" />
        </div>
    );
}

export default About;