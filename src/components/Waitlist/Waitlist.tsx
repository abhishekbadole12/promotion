import WaitlistStyles from "./Waitlist.module.css";

export default function Waitlist() {
  return (
    <section className={WaitlistStyles.Waitlist}>
      <div className={WaitlistStyles.innerContainer}>
        <div className={WaitlistStyles.content}>
          <h3>
            and since you <br /> only live once
          </h3>

          {/* Big Button */}
          <button className={WaitlistStyles.bigButton}>
            join the waitlist
          </button>
        </div>
      </div>
    </section>
  );
}
