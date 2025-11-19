export default function CamperPage({ params }: { params: { id: string } }) {
    return <main>
        <h1>Camper {params.id}</h1>
    </main>;
}
