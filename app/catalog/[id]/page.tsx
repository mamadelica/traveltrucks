"use client";

import CamperCard from "@/components/catalog/CamperCard/CamperCard";
import BookingForm from "@/components/sections/BookingForm/BookingForm";
import CamperTabs from "@/components/sections/CamperTabs/CamperTabs";
import Features from "@/components/sections/Features/Features";
import RatingStars from "@/components/ui/RatingStars/RaitingStars";
import css from "./page.module.css";
import { useState } from "react";
import { Camper, getCamperById } from "@/lib/api/api";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

export default function CamperPage() {
  const [activeTab, setActiveTab] = useState("features");

  const params = useParams();
  const id = params?.id as string;

  const {
    data: camper,
    isLoading,
    isError,
  } = useQuery<Camper>({
    queryKey: ["camper", id],
    queryFn: () => getCamperById(id),
    refetchOnMount: false,
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError || !camper) return <p>Something went wrong...</p>;

  return (
    <main>
      <div>
        <CamperCard camper={camper} />
        <CamperTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className={css.wrapper}>
          {activeTab === "features" ? (
            <Features camper={camper} />
          ) : (
            <RatingStars reviews={camper.reviews} />
          )}
          <BookingForm />
        </div>
      </div>
    </main>
  );
}
