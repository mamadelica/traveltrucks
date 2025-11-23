"use client";

import { Camper, loadCampers } from "@/lib/api/api";
import CardMeta from "../CardMeta/CardMeta";
import css from "./CampersGrid.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import FeaturesList from "@/components/sections/FeaturesList/FeaturesList";
import { useFavoritesStore } from "@/lib/Store/FavoriteContext";
import { useCampersStore } from "@/lib/Store/campersStore";
import { useEffect, useState } from "react";
import { usePaginationStore } from "@/lib/Store/paginationStore";

export default function CampersGrid() {
  const [page, setPage] = useState(1);
  const router = useRouter();
  const { favoriteIds, toggleFavorite } = useFavoritesStore();
  const { loading, error, total } = useCampersStore();
  const { results: campersList, loadMore } = usePaginationStore();
  const limit = 4;
  const totalPages = Math.ceil(total / limit);

  const handleClick = (id: string) => {
    router.push(`/catalog/${id}`);
  };

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
    loadMore();
  };

  useEffect(() => {
    loadMore();
  }, []);

  useEffect(() => {
    loadCampers({ page, limit: 4 });
  }, [page]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className={css.campersListWrapper}>
      <ul className={css.campersList}>
        {campersList.map((camper: Camper, index) => {
          const isActive = favoriteIds.includes(camper.id);

          return (
            <li key={`${camper.id}-${index}`} className={css.campersItem}>
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

      {totalPages > page && (
        <button className={css.loadmoreBtn} onClick={handleLoadMore}>
          Load more
        </button>
      )}
    </div>
  );
}
