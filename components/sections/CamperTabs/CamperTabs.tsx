"use client"
import css from './CamperTabs.module.css'

interface Props {
  activeTab: string,
  setActiveTab: (v:string) => void
}

export default function CamperTabs({activeTab, setActiveTab}: Props) {

   

  return (
    <div className={css.tabsWrapper}>
      <div className={css.tabList}>
        <button
          className={`${css.tabBtn} ${activeTab === "features" ? css.active : ""}`}
          onClick={() => setActiveTab("features")}
        >
          Features
        </button>
        <button
          className={`${css.tabBtn} ${activeTab === "reviews" ? css.active : ""}`}
          onClick={() => setActiveTab("reviews")}
        >
          Reviews
        </button>
      </div>
    </div>

  );
}
