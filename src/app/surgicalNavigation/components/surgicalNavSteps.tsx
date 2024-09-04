import InfoCard from "@/app/home-components/infoCard";

export default function SurgicalNavSteps() {
    return (
        <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <InfoCard
                    title="Initial Patient Contact"
                    content="Patients can reach out to us as soon as surgery is recommended, allowing for proactive engagement."
                    image="https://images.unsplash.com/photo-1520923642038-b4259acecbd7"
                    number={1}
                />
                <InfoCard
                    title="Personalized Care Coordination"
                    content="Dedicated coordinators manage all aspects of the patient's surgical journey, improving outcomes and reducing stress."
                    image="https://images.unsplash.com/photo-1580795478844-5ed694336c90"
                    number={2}
                />
                <InfoCard
                    title="Insurance Verification"
                    content="We identify and verify the patient's surgical coverage details, ensuring clear communication of benefits and potential costs."
                    image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
                    number={3}
                />
                <InfoCard
                    title="Cost-Effective Options"
                    content="Patients are provided with multiple surgical options, detailing cost differences and considering travel if necessary."
                    image="https://images.unsplash.com/photo-1600007283728-22abc97b9318"
                    number={4}
                />
                <InfoCard
                    title="Second Opinion Service"
                    content="For significant procedures, we offer a second opinion service (at a cost) to enhance decision-making confidence."
                    image="https://images.unsplash.com/photo-1666214277657-e60f05c40b04"
                    number={5}
                />
                <InfoCard
                    title="Postoperative Support"
                    content="Our navigators provide ongoing support until the first postoperative visit, ensuring proper recovery and addressing any issues."
                    image="https://images.unsplash.com/photo-1597764690523-15bea4c581c9"
                    number={6}
                />
            </div>
        </section>
    )
}