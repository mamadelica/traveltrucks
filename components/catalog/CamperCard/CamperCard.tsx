"use client";

import { Camper } from "@/lib/api/api";
import CardMeta from "../CardMeta/CardMeta";
import css from "./CamperCard.module.css";
import Image from "next/image";

interface CamperCardProps {
  camper: Camper;
}

export default function CamperCard({ camper }: CamperCardProps) {
  return (
    <div className={css.cardWrapper}>
      <h3 className={css.cardHeaderTitle}>{camper.name}</h3>

      <CardMeta
        rating={camper.rating}
        location={camper.location}
        reviews={camper.reviews.length}
      />

      <p className={css.camperPrise}>€{camper.price}.00</p>

      <ul className={css.cardGallery}>
        {camper.gallery.map((img, idx) => (
          <li key={idx}>
            <Image
              src={img.original}
              alt={`${camper.name} photo ${idx + 1}`}
              width={292}
              height={320}
              className={css.cardPhoto}
              unoptimized
              loading="eager"
            />
          </li>
        ))}
      </ul>

      <p className={css.cardDescription}>{camper.description}</p>
    </div>
  );
}
