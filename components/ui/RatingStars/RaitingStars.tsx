import css from "./RatingStars.module.css";
import { Reviews } from "@/lib/api/api";

interface Props {
  reviews: Reviews[];
}

export default function RatingStars({ reviews }: Props) {
  return (
    <div className={css.reviewsList}>
      {reviews.map((review, idx) => (
        <article key={idx} className={css.reviewCard}>
          <div className={css.reviewMeta}>
            <div className={css.reviewCircle}>
              {review.reviewer_name.slice(0, 1)}
            </div>
            
            <div className={css.reviewerWrapper}>
              <p className={css.reviewerName}>{review.reviewer_name}</p>

              <div className={css.stars}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className={css.star}>
                    <use
                      href={
                        i < review.reviewer_rating
                          ? "/icons/categories-sprite.svg#icon-star-yellow"
                          : "/icons/categories-sprite.svg#icon-star-gray"
                      }
                    />
                  </svg>
                ))}
              </div>

            </div>
          </div>

          <p className={css.reviewText}>{review.comment}</p>
        </article>
      ))}
    </div>
  );
}
