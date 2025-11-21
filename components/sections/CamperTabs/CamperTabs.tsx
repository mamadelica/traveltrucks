"use client"
import css from './CamperTabs.module.css'
import { useState } from "react";

export default function CamperTabs() {

    const [activeTab, setActiveTab] = useState("features");

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
