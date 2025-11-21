'use client';

import FiltersPanel from "@/components/catalog/FiltersPanel/FiltersPanel";
import CampersGrid from "@/components/catalog/CampersGrid/CampersGrid";
import css from "./page.module.css";

export default function CatalogPage() {
    return <main>
        <div className={css.catalogWrapper}>
        <FiltersPanel />
            <CampersGrid />
            </div>
    </main>;
}
