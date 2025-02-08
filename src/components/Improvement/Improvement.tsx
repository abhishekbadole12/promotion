import ImprovementStyles from "./Improvement.module.css";

export default function Improvement() {
  return (
    <section className={ImprovementStyles.Improvement}>
      <div className={ImprovementStyles.innerContainer}>
        <div className={ImprovementStyles.header}>
          <h5 className={ImprovementStyles.title}>
            with this we have
            <br /> brought about
          </h5>
        </div>

        <div className={ImprovementStyles.content}>
          <div className={ImprovementStyles.content1}>
            <h1 className={ImprovementStyles.contentTitle}>
              78<span>%</span>
            </h1>
            <div className={ImprovementStyles.moreInfo}>
              <p className={ImprovementStyles.moreInfoText}>
                improvement in user <br/> health outcomes
              </p>
            </div>
          </div>
          <div className={ImprovementStyles.content1}>
            <h1 className={ImprovementStyles.contentTitle}>
              10<span>+</span>
            </h1>
            <div className={ImprovementStyles.moreInfo}>
              <p className={ImprovementStyles.moreInfoText}>
              years added to <br/>
              healthy life
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
