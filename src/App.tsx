import AppStyles from "./App.module.css";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <div className={AppStyles.App}>
      <Hero />
    </div>
  );
}

export default App;
