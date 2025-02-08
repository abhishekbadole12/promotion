import HeroStyles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={HeroStyles.Hero}>
      {/* Rotating SVG Container */}
      <div className={HeroStyles.rotatingContainer}>
        {/* Outer */}
        <div className={HeroStyles.outerSvg}>
          {/* Middle */}
          <div className={HeroStyles.middleSvg}>
            {/* Inner */}
            <div className={HeroStyles.innerSvg} />
          </div>
        </div>
      </div>

      {/* Fixed Content (Text) */}
      <div className={HeroStyles.mainContent}>
        <h2 className={HeroStyles.title}>
          Adding 10+ healthy <br /> years to your life
        </h2>
        <h6 className={HeroStyles.subTitle}>join the revolution</h6>
      </div>

      {/* Top Shade */}
      <div className={HeroStyles.topShade} />
      
      {/* Bottom Shade */}
      <div className={HeroStyles.bottomShade} />
    </section>
  );
}
