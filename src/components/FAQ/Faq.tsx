import FaqStyles from "./Faq.module.css";
import ArrowUp from "../../assets/icons/arrow-up.svg";

export default function Faq() {
  return (
    <section className={FaqStyles.Faq}>
      <div className={FaqStyles.headerContainer}>
        <h5>FREQUENTLY ASKED QUESTION</h5>
        <div className={FaqStyles.imageContainer}>
          <img src={ArrowUp} alt="" />{" "}
        </div>
      </div>

      {/* Box */}
      <div className={FaqStyles.cardContainer}>
        <div className={FaqStyles.listContainer}>
          <p>is there any subscription?</p>
          <p>how is it better than other apps?</p>
          <p>is AI reliable with health?</p>
          <p>how will old elderly people be assisted?</p>
        </div>

        <div className={FaqStyles.listActiveContainer}>
          <p>
            Grwn.life enables you to track, analyse, and reflect on your health,
            so you can align it with what truly matters to you - be it peak
            fitness or simply feeling your best every day,{" "}
          </p>
        </div>
      </div>
    </section>
  );
}
