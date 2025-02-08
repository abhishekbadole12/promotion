import PillarStyles from "./Pillar.module.css";

export default function Pillar() {
  return (
    <section className={PillarStyles.Pillar}>
      <div className={PillarStyles.rightPillar} />
      <div className={PillarStyles.contentContainer}>
        <h2 className={PillarStyles.title}>our pillars</h2>
        <p className={PillarStyles.subTitle}>
          our approach is built around <b>3 core essentials, </b>
          that map your optimal health
        </p>
      </div>
      <div className={PillarStyles.leftPillar} />
    </section>
  );
}
