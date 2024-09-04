import React from 'react';
import { MidPageCTA } from '../home-components/midPageCTA';
import SurgicalNavSteps from './components/surgicalNavSteps';
import WorkWithNav from './components/workWithNav';
import CompareNav from './components/compareNav';
import Header from '@/components/header';

const SurgicalNavigationPage = () => {
    return (

        <div className='flex flex-col'>
            <Header />
            <div className='flex justify-center bg-stone-50 py-6'>
                <div className='flex flex-col max-w-[1200px] mx-2 md:mx-4 lg:mx-10 space-y-6 md:space-y-10 lg:space-y-12'>

                    {/* Explanation Section */}
                    <section>
                        <h1 className="text-4xl font-bold mb-6">Surgical Navigation Solution</h1>
                        <h2 className="text-2xl font-semibold mb-4">What is Surgical Navigation?</h2>
                        <p className="mb-4">
                            Hinkapin Health's Surgical Navigation Solution is an innovative service designed to enhance patient care, reduce healthcare costs, and improve overall client satisfaction. Our comprehensive solution offers a seamless process for surgical procedures, ensuring that patients receive the best care at the most affordable rates.
                        </p>
                        <p>
                            Our solution simplifies the surgical process, from initial patient contact to postoperative support, providing personalized care coordination, cost-effective options, and quality assurance throughout the journey.
                        </p>
                    </section>

                    <SurgicalNavSteps />

                    <WorkWithNav />

                    <CompareNav />

                    {/* CTA Section */}
                    <section>
                        <h2 className="text-2xl font-semibold mb-4">Ready to Get Started?</h2>
                        <MidPageCTA />
                    </section>
                </div>
            </div>
        </div>

    );
};

export default SurgicalNavigationPage;
