import LandingHero from './home-components/landingHero'
import PopularProcedureSection from './home-components/popularProcedureSection'
import SurgeryCategorySection from './home-components/surgeryCategorySection';
import HomeNavBar from './home-components/homeNavBar';
import HowItWorksSection from './home-components/howItWorksSection';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className='flex flex-col'>
      <HomeNavBar />
      <div className='flex justify-center bg-stone-50 py-6'>
        <div className='flex flex-col max-w-[1250px] mx-2 md:mx-4 lg:mx-10 space-y-12'>
          <div id="home">
            <LandingHero />
          </div>
          <div id="popularProcedures">
            <PopularProcedureSection />
          </div>
          <div id="surgeryCategory">
            <SurgeryCategorySection />
          </div>
          <div id="howItWorks">
            <HowItWorksSection />
          </div>
        </div>
      </div>
      <Footer />

    </div>
  )
}