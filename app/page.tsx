import css from "./page.module.css";

export default function HomePage() {
  return <main>
  <section className={css.heroSection}>
  <div className={css.mainSection}>
    
    <div className={css.content}>
      <h1 className={css.title}>Campers of your dreams</h1>
      <p className={css.subtitle}>You can find everything you want in our catalog</p>
      <button className={css.button} type="button">
  View Now
</button>
      </div>
      
  </div>;
    </section>
    </main>
}
