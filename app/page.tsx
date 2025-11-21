"use client"
import { useRouter } from "next/navigation";
import css from "./page.module.css";


export default function HomePage() {

const router = useRouter()

  return (
    <main className={css.heroSection}>
      <div className={css.heroWrapper}>
        <h1 className={css.title}>Campers of your dreams</h1>
        <p className={css.subtitle}>
          You can find everything you want in our catalog
        </p>
        <button onClick={() => router.push("/catalog")} className={css.button} type="button">
          View Now
        </button>
      </div>
    </main>
  );
}
