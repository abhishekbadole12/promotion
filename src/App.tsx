import AppStyles from "./App.module.css";
import Deserve from "./components/Deserve/Deserve";
import Hero from "./components/Hero/Hero";
import Pillar from "./components/Pillar/Pillar";
import Quote from "./components/Quote/Quote";
import Wellness from "./components/Wellness/Wellness";

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
    </div>
  );
}

export default App;
