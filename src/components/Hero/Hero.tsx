import HeroStyles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={HeroStyles.Hero}>
      <div className={HeroStyles.edgeShade}>
        {/* Content */}
        <div className={HeroStyles.mainContent}>
          <h2 className={HeroStyles.title}>
            Adding 10+ healthy <br/> years to your life
          </h2>
          <h6 className={HeroStyles.subTitle}>join the revolution</h6>
        </div>
      </div>
    </section>
  );
}
{
  /* <div className={HeroStyles.edgeShade}/> */
}
