import AppStyles from "./App.module.css";
import Deserve from "./components/Deserve/Deserve";
import Hero from "./components/Hero/Hero";
import Pillar from "./components/Pillar/Pillar";
import Quote from "./components/Quote/Quote";

function App() {
  return (
    <div className={AppStyles.App}>
      <Hero />
      <Quote />
      <Deserve />
      {/* Card */}
      <Pillar />
    </div>
  );
}

export default App;
