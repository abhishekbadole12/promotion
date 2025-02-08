import PromotionCardStyles from "./PromotionCard.module.css";

interface PromotionItem {
  id: number;
  color: string;
  title: string;
  subtitle: string;
  image: string;
}

export default function PromotionCard({
  item,
  isReversed = false, // Default is normal layout
}: {
  item: PromotionItem;
  isReversed?: boolean;
}) {
  return (
    <section
      className={PromotionCardStyles.PromotionCard}
      style={{ backgroundColor: item.color }}
    >
      <div
        className={`${PromotionCardStyles.innerContainer} ${
          isReversed ? PromotionCardStyles.reversed : ""
        }`}
      >
        <div className={PromotionCardStyles.shade}>
        {/* Img Container */}
        <div className={PromotionCardStyles.imageContainer}>
          <img src={item.image} alt="mobile-screenshot" />
        </div>

        </div>

        {/* Content */}
        <div className={PromotionCardStyles.content}>
          <h3 className={PromotionCardStyles.title}>{item.title}</h3>
          <p className={PromotionCardStyles.subTitle}>{item.subtitle}</p>
        </div>
      </div>
    </section>
  );
}
