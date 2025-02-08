import styles from "./AddMore.module.css";
import mobileCombine from "../../assets/icons/mobile-combine.svg";

export default function AddMore() {
  return (
    <section className={styles.addMore}>
      <div className={styles.innerContainer}>
        <div className={styles.imageContainer}>
          <img src={mobileCombine} alt="Mobile Illustration" />
        </div>
      </div>
    </section>
  );
}