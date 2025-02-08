import QuoteStyles from "./Quote.module.css";

export default function Quote() {
  return (
    <section className={QuoteStyles.Quote}>
      <div className={QuoteStyles.contentContainer}>
        <p className={QuoteStyles.text}>
          Grwn.life enables you to track, analyse, and reflect on your health,
          so you can align it with what truly matters to you - be it peak
          fitness or simply feeling your best every day,
        </p>
        <p className={QuoteStyles.text}>
          we help you stay on top of your health <b>effortlessly.</b>
        </p>
      </div>
    </section>
  );
}
