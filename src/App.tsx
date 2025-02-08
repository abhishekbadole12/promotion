import AppStyles from "./App.module.css";
import AddMore from "./components/AddMore/AddMore";
import Deserve from "./components/Deserve/Deserve";
import Hero from "./components/Hero/Hero";
import Pillar from "./components/Pillar/Pillar";
import PromotionCard from "./components/PromotionCards/PromotionCard";
import Quote from "./components/Quote/Quote";
import Wellness from "./components/Wellness/Wellness";

// Data
import { promotions } from "./constants/promotions";

function App() {
  return (
    <div className={AppStyles.App}>
      <Hero />
      <Quote />
      <Deserve />
      {/* Card */}
      <Pillar />
      {/* Card */}
      <Wellness />
      <p className={AppStyles.personalisedText}>
        and is personalised for you in everyway
      </p>
      {promotions.map((promotion, index) => (
        <PromotionCard
          key={promotion.id}
          item={promotion}
          isReversed={index % 2 !== 0}
        />
      ))}
      <AddMore />
    </div>
  );
}

export default App;
