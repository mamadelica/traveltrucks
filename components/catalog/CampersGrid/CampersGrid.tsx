"use client";

import { Camper, getCampersData } from "@/lib/api/api";
import CardMeta from "../CardMeta/CardMeta";
import css from "./CampersGrid.module.css";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useRouter } from "next/navigation";
import FeaturesList from "@/components/sections/FeaturesList/FeaturesList";
import { useFavorites } from "@/lib/Store/FavoriteContext";

export default function CampersGrid() {
  const router = useRouter();

const { favoriteIds, toggleFavorite } = useFavorites(); 
  const { data, isError } = useQuery({
    queryKey: ["campers"],
    queryFn: async () => await getCampersData({ page: 1, limit: 10 }),
    refetchOnMount: false,
  });

  const campersList = data?.items ?? [];

  

  const handleClick = (id: string) => {
    router.push(`/catalog/${id}`);
  };

  return (
    <div className={css.campersListWrapper}>
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
                    <h3 className={css.cardHeaderTitle}>
                      {camper.name.length > 20
                        ? camper.name.slice(0, 20) + "..."
                        : camper.name}
                    </h3>

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
                    reviews={camper.reviews.length}
                  />
                </div>

                <p className={css.camperDescr}>
                  {camper.description.slice(0, 60) + "..."}
                </p>

                <div className={css.featuresListWrapper}>
                  <FeaturesList camper={camper} />
                </div>

                <button
                  onClick={() => handleClick(camper.id)}
                  className={css.showmoreBtn}
                >
                  Show more
                </button>
              </div>
            </li>
          );
        })}
      </ul>

      <button className={css.loadmoreBtn}>Load more</button>
    </div>
  );
}
