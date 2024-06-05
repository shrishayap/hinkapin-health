import LandingHero from './home-components/landingHero'
import PopularProcedureSection from './home-components/popularProcedureSection'
import SurgeryCategorySection from './home-components/surgeryCategorySection';
import Header from '@/components/header';
import HowItWorksSection from './home-components/howItWorksSection';
import MidPageCTA from './home-components/midPageCTA';
import PricingDisclaimerSection from './home-components/pricingDisclaimer';

export default function Home() {
  return (
    <div className='flex flex-col'>
      <Header />
      <div className='flex justify-center bg-stone-50 py-6'>
        <div className='flex flex-col max-w-[1200px] mx-2 md:mx-4 lg:mx-10 space-y-6 md:space-y-10 lg:space-y-12'>
          <div id="home">
            <LandingHero />
          </div>
          <div id="popularProcedures">
            <PopularProcedureSection />
          </div>
          <div id="surgeryCategory">
            <SurgeryCategorySection />
          </div>
          <MidPageCTA />
          <div id="howItWorks">
            <HowItWorksSection />
          </div>
          <div id="paymentOptions">
            <PricingDisclaimerSection />
          </div>
        </div>
      </div>
    </div>
  )
}