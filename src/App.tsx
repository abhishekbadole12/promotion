import AppStyles from "./App.module.css";
import Hero from "./components/Hero/Hero";
import Quote from "./components/Quote/Quote";

function App() {
  return (
    <div className={AppStyles.App}>
      <Hero />
      <Quote/>
    </div>
  );
}

export default App;
