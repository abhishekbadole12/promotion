import FooterStyles from "./Footer.module.css";

export default function Footer() {
  const sections = [
    { title: "POLICIES", items: ["instagram", "twitter", "facebook"] },
    { title: "SOCIAL", items: ["instagram", "twitter", "facebook"] },
    { title: "COMPANY", items: ["about", "team", "career"] },
    { title: "CONTACT US", items: ["about", "team", "career"] },
  ];

  return (
    <section className={FooterStyles.Footer}>
      <div className={FooterStyles.leftCard}>
        <h4>we take health <br/> seriously.</h4>
        <h2>grwn.life</h2>
      </div>

      <div className={FooterStyles.footerListCards}>
        {sections.map((section, index) => (
          <div key={index} className={FooterStyles.listCard}>
            <p className={FooterStyles.listTitle}>{section.title}</p>
            <ul>
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex} className={FooterStyles.listText}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
