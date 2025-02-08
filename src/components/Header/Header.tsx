import HeaderStyles from "./Header.module.css";

export default function Header() {
  return (
    <div className={HeaderStyles.header}>
      <div className={HeaderStyles.navContainer}>
        <p className={HeaderStyles.brandName}>grwn.life</p>
        <button className={HeaderStyles.ctaButton}>GET STARTED</button>
      </div>
    </div>
  );
}
