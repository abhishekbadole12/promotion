import DataCardsStyles from "./DataCards.module.css";
import Graph from "../../assets/cards/Task_Paper.svg";
import DataCardImg from "../../assets/icons/health-data.svg"

export default function DataCards() {
  const cards = [
    {
      id: 1,
      image:  DataCardImg ,
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
    <section className={DataCardsStyles.DataCards}>
      <div className={DataCardsStyles.cardsContainer}>
        {cards.map((item) => (
          <div className={DataCardsStyles.card}>
            <div className={DataCardsStyles.imgContainer}>
              <img src={item.image} alt="" />
            </div>
            <div className={DataCardsStyles.cardTitle}>
              <p>{item.title}</p>
            </div>
            <div className={DataCardsStyles.cardSubTitle}>
              <p>{item.subTitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
