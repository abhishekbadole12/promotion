import FeatureCardsStyles from "./FeatureCards.module.css";
import Graph from "../../assets/cards/Task_Paper.svg";

export default function FeatureCards() {
  const cards = [
    {
      id: 1,
      image:  Graph ,
      title: "Making health data simple to understand",
      subTitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut Lorem ipsum dolor sit amet",
    },
    {
      id: 2,
      image:  Graph ,
      title: "Tasks modify dynamically to meet personal goals",
      subTitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut Lorem ipsum dolor sit amet",
    },
    {
      id: 3,
      image:  Graph ,
      title: "Multi-Source Health Data Integration",
      subTitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut Lorem ipsum dolor sit amet",
    },
  ];
  return (
    <section className={FeatureCardsStyles.DataCards}>
      <div className={FeatureCardsStyles.cardsContainer}>
        {cards.map((item) => (
          <div className={FeatureCardsStyles.card}>
            <div className={FeatureCardsStyles.imgContainer}>
              <img src={item.image} alt="" />
            </div>
            <div className={FeatureCardsStyles.cardTitle}>
              <p>{item.title}</p>
            </div>
            <div className={FeatureCardsStyles.cardSubTitle}>
              <p>{item.subTitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
