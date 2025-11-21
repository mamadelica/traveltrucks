import CamperCard from "@/components/catalog/CamperCard/CamperCard";
import BookingForm from "@/components/sections/BookingForm/BookingForm";
import Features from "@/components/sections/Features/Features";
import RatingStars from "@/components/ui/RatingStars/RaitingStars";

export default function CamperPage({ params }: { params: { id: string } }) {
    return <main>
        <CamperCard />
        
        <Features />
        <BookingForm />
        <RatingStars/>
    </main>;
}
