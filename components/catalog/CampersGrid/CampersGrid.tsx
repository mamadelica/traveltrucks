"use client";

import { Camper, getCampersData } from "@/lib/api/api";
import CardMeta from "../CardMeta/CardMeta";
import css from "./CampersGrid.module.css";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";


const featureIcons: Record<string, string> = {
  AC: "/icons/categories-sprite.svg#icon-ac",
  Bathroom: "/icons/categories-sprite.svg#icon-bathroom",
  Kitchen: "/icons/categories-sprite.svg#icon-kitchen",
  TV: "/icons/categories-sprite.svg#icon-tv",
  Radio: "/icons/categories-sprite.svg#icon-radio",
  Refrigerator: "/icons/categories-sprite.svg#icon-refrigerator",
  Microwave: "/icons/categories-sprite.svg#icon-microwave",
  Gas: "/icons/categories-sprite.svg#icon-gas",
  Water: "/icons/categories-sprite.svg#icon-water",
};


export default function CampersGrid() {
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["campers"],
    queryFn: async () => await getCampersData({ page: 1, limit: 10 }),
    refetchOnMount: false,
  });

  const campersList = data?.items ?? [];

  const toggleFavorite = (id: string) => {
    setFavoriteIds((prev) =>
      prev.includes(id) ? prev.filter((fid) => fid !== id) : [...prev, id]
    );
  };

  return (
    <div className={css.campersListWrapper}>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Sorry, we fell...</p>}

      <ul className={css.campersList}>
        {campersList.map((camper: Camper) => {
          const isActive = favoriteIds.includes(camper.id);

          return (
            <li key={camper.id} className={css.campersItem}>
              <div className={css.camperImgWrapper}>
                <Image
                  src={camper.gallery[0]?.thumb}
                  alt={camper.name}
                  width={292}
                  height={320}
                  className={css.camperImg}
                />
              </div>

              <div className={css.camperInfo}>
                <div className={css.cardHeader}>
                  <div className={css.cardHeaderWrapper}>
                    <h3 className={css.cardHeaderTitle}>{camper.name.length > 20 ? camper.name.slice(0, 20) + "...": camper.name}</h3>

                    <div className={css.priceWrapper}>
                      <p className={css.camperPrise}>€{camper.price}.00</p>
                      <button
                        type="button"
                        className={css.btnFavorite}
                        onClick={() => toggleFavorite(camper.id)}
                        aria-pressed={isActive}
                        aria-label="Toggle favorite"
                      >
                        <svg className={css.iconHeart} width="24" height="24">
                          <use
                            href={
                              isActive
                                ? "/icons/categories-sprite.svg#icon-heart-red"
                                : "/icons/categories-sprite.svg#icon-heart-dark"
                            }
                          />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <CardMeta
                    rating={camper.rating}
                    location={camper.location}
                    reviewsCount={camper.reviews.length}
                  />
                </div>

                <p className={css.camperDescr}>{camper.description.slice(0, 60)+ "..."}</p>

                <div>
                  <ul className={css.featuresList}>
  {[
    camper.AC && "AC",
    camper.bathroom && "Bathroom",
    camper.kitchen && "Kitchen",
    camper.TV && "TV",
    camper.radio && "Radio",
    camper.refrigerator && "Refrigerator",
    camper.microwave && "Microwave",
    camper.gas && "Gas",
    camper.water && "Water",
  ]
    .filter(Boolean)
    .map((feature, idx) => (
      <li key={idx} className={css.featuresItem}>
        <svg className={css.featureIcon} width="20" height="20">
          <use href={featureIcons[feature]} />
        </svg>
        <span>{feature}</span>
      </li>
    ))}
</ul>

                </div>

                <button className={css.showmoreBtn}>Show more</button>
              </div>
            </li>
          );
        })}
      </ul>

      <button className={css.loadmoreBtn}>Load more</button>
    </div>
  );
}