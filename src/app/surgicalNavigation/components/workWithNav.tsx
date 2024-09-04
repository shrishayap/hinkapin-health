
export default function WorkWithNav() {
    return (
        <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Who We Work With</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 border border-gray-300 rounded-lg">
                    <h3 className="text-xl font-semibold mb-2">TPA (Third Party Administration)</h3>
                    <p>We collaborate with TPAs to streamline the administrative process and ensure efficient claim management.</p>
                </div>
                <div className="bg-white p-6 border border-gray-300 rounded-lg">
                    <h3 className="text-xl font-semibold mb-2">Health Brokers</h3>
                    <p>Our partnership with health brokers helps in providing comprehensive solutions to their clients.</p>
                </div>
                <div className="bg-white p-6 border border-gray-300 rounded-lg">
                    <h3 className="text-xl font-semibold mb-2">Insurance Patients</h3>
                    <p>We work directly with insured patients to navigate their coverage and find the best surgical options.</p>
                </div>
            </div>
        </section>
    )
}