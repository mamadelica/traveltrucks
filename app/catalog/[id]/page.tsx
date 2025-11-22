import CamperCard from "@/components/catalog/CamperCard/CamperCard";
import BookingForm from "@/components/sections/BookingForm/BookingForm";
import CamperTabs from "@/components/sections/CamperTabs/CamperTabs";
import Features from "@/components/sections/Features/Features";
import RatingStars from "@/components/ui/RatingStars/RaitingStars";

import css from "./page.module.css";



export default function CamperPage({ params }: { params: { id: string } }) {
    return <main>
        <div>
          
        <CamperCard />
            <CamperTabs />
            <div className={css.wrapper}>
        <Features />
                <BookingForm />
                </div>
            {/* <RatingStars/> */}
            </div>
    </main>;
}
