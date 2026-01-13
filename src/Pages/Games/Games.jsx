import styles from "./Games.module.css";
import { Navbar } from "../../Components/Navbar/Navbar";
import { Footer } from "../../Components/Footer/Footer";

import pubgImg from "../../assets/pubg.png";
import skribbleImg from "../../assets/skribble.png";
import memoryGameImg from "../../assets/memorygame.png";
import efootballImg from "../../assets/efootball.png";
import speedImg from "../../assets/speed.png";
import quizImg from "../../assets/quiz.png";
import guessImg from "../../assets/guess.png";
import debuggingImg from "../../assets/debugging.png";
import crackImg from "../../assets/crack.png";

const gamesList = [
  { id: 1, title: "PUBG Mobile", image: pubgImg, url: "https://docs.google.com/forms/d/e/1FAIpQLSdUbMaPN1oym7IRQXgWqKy4sitDc89hr2vJyE6nNewuDWd0FQ/viewform?fbzx=-9075471622441032002" },
  { id: 2, title: "Skribbl", image: skribbleImg, url: "https://docs.google.com/forms/d/e/1FAIpQLSdUbMaPN1oym7IRQXgWqKy4sitDc89hr2vJyE6nNewuDWd0FQ/viewform?fbzx=-9075471622441032002" },
  { id: 3, title: "Memory Game", image: memoryGameImg, url: "https://docs.google.com/forms/d/e/1FAIpQLSdUbMaPN1oym7IRQXgWqKy4sitDc89hr2vJyE6nNewuDWd0FQ/viewform?fbzx=-9075471622441032002" },
  { id: 4, title: "eFootball", image: efootballImg, url: "https://docs.google.com/forms/d/e/1FAIpQLSdUbMaPN1oym7IRQXgWqKy4sitDc89hr2vJyE6nNewuDWd0FQ/viewform?fbzx=-9075471622441032002" },
  { id: 5, title: "Speed Cubing", image: speedImg, url: "https://docs.google.com/forms/d/e/1FAIpQLSe2C9blNsvvn1_S3bstHPO83hqnzlqtQEhNzQjIZiY-oi0IhQ/viewform" },
  { id: 6, title: "Tech Quiz", image: quizImg, url: "https://docs.google.com/forms/d/e/1FAIpQLSe2C9blNsvvn1_S3bstHPO83hqnzlqtQEhNzQjIZiY-oi0IhQ/viewform" },
  { id: 7, title: "Guess The Tech", image: guessImg, url: "https://docs.google.com/forms/d/e/1FAIpQLSe2C9blNsvvn1_S3bstHPO83hqnzlqtQEhNzQjIZiY-oi0IhQ/viewform" },
  { id: 8, title: "Debugging", image: debuggingImg, url: "https://docs.google.com/forms/d/e/1FAIpQLSe2C9blNsvvn1_S3bstHPO83hqnzlqtQEhNzQjIZiY-oi0IhQ/viewform" },
  { id: 9, title: "Crack It", image: crackImg, url: "https://docs.google.com/forms/d/e/1FAIpQLSe2C9blNsvvn1_S3bstHPO83hqnzlqtQEhNzQjIZiY-oi0IhQ/viewform" },
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
          <h1 className={styles.title}>Register for the Magical Games</h1>
          <p className={styles.subtitle}>The Triwizard Tournament</p>
        </header>

        <div className={styles.grid}>
          {gamesList.map((game) => (
            <div
              key={game.id}
              className={styles.card}
              onClick={() => handleCardClick(game.url)}
            >
              <img src={game.image} alt={game.title} className={styles.gameImage} />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};
