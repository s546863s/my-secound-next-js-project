import Image from "next/image";
import cena from '../../assets/images/cena.jpg'

const AboutPage = () => {
    return (
        <div>
            <h2>This is About page</h2>
            <Image width = "500" height = "300" src="https://i.ibb.co/Xp3sL2h/1.png" alt="egg pic"></Image>
            <Image width="500" height="300" src="https://plus.unsplash.com/premium_photo-1677337458939-84d622293793" alt="egg pic"></Image>
            <Image width="500" height="300"  src="/don.jpg" alt="don pic"></Image>
            <Image width="300" height="500" src={cena} alt="cena vai"></Image>
        </div>
    );
};

export default AboutPage;