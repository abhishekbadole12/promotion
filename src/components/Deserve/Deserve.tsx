import DeserveStyles from "./Deserve.module.css";

export default function Deserve() {
  return (
    <section className={DeserveStyles.Deserve}>
      <div className={DeserveStyles.innerImageContainer}>
        <div className={DeserveStyles.contentContainer}>
          <h2 className={DeserveStyles.title}>everything you deserve</h2>
          <p className={DeserveStyles.subTitle}>
            our approach is built around <b>3 core essentials, </b><br/>
            that map your optimal health
          </p>
        </div>
      </div>
    </section>
  );
}
