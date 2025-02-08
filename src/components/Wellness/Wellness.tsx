import WellnessStyles from "./Wellness.module.css";

export default function Wellness() {
  return (
    <section className={WellnessStyles.Wellness}>
      <div className={WellnessStyles.imageContainer}>
        {/* Content */}
        <div className={WellnessStyles.content}>
          <h2 className={WellnessStyles.title}>wellness is in your hands</h2>
        </div>
      </div>
    </section>
  );
}
