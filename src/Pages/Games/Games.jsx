import styles from "./Games.module.css";
import { Navbar } from "../../Components/Navbar/Navbar";
import { Footer } from "../../Components/Footer/Footer";

const gamesList = [
  { id: 1, title: "PUBG Mobile", url: "https://docs.google.com/forms/d/e/1FAIpQLSc.../viewform" },
  { id: 2, title: "PES 2026", url: "https://docs.google.com/forms/d/e/1FAIpQLSd.../viewform" },
  { id: 3, title: "Valorant", url: "https://docs.google.com/forms/d/e/1FAIpQLSe.../viewform" },
  { id: 4, title: "FIFA", url: "https://docs.google.com/forms/d/e/1FAIpQLSf.../viewform" },
  { id: 5, title: "Call of Duty", url: "https://docs.google.com/forms/d/e/1FAIpQLSg.../viewform" },
  { id: 6, title: "Free Fire", url: "https://docs.google.com/forms/d/e/1FAIpQLSh.../viewform" },
  { id: 7, title: "Clash Royale", url: "https://docs.google.com/forms/d/e/1FAIpQLSi.../viewform" },
  { id: 8, title: "Minecraft", url: "https://docs.google.com/forms/d/e/1FAIpQLSj.../viewform" },
  { id: 9, title: "League of Legends", url: "https://docs.google.com/forms/d/e/1FAIpQLSk.../viewform" },
  { id: 10, title: "Chess", url: "https://docs.google.com/forms/d/e/1FAIpQLSl.../viewform" },
];

export const Games = () => {
  const handleCardClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>The Triwizard Tournament</h1>
          <p className={styles.subtitle}>Register for the Magical Games</p>
        </header>

        <div className={styles.grid}>
          {gamesList.map((game) => (
            <div
              key={game.id}
              className={styles.card}
              onClick={() => handleCardClick(game.url)}
            >
              <h2 className={styles.gameTitle}>{game.title}</h2>
              <span className={styles.registerText}>Click to Register</span>
              <div className={styles.waxSeal}>TACS</div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};
