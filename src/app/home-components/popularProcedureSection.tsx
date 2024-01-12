import gallBladderIcon from '@/../public/popular-procedures-icons/gallbladder.png'
//Neeed to ref <a href="https://www.flaticon.com/free-icons/gallbladder" title="gallbladder icons">Gallbladder icons created by Eucalyp - Flaticon</a>
import colonIcon from '@/../public/popular-procedures-icons/colon.png'
// ref as <a href="https://www.flaticon.com/free-icons/stomach" title="stomach icons">Stomach icons created by iconixarPro - Flaticon</a>
import herniaIcon from '@/../public/popular-procedures-icons/hernia.png'
// ref as <a href="https://www.flaticon.com/free-icons/inguinal-hernia" title="inguinal hernia icons">Inguinal hernia icons created by Freepik - Flaticon</a>
import kidneyStoneIcon from '@/../public/popular-procedures-icons/kidneyStone.png'
//ref as <a href="https://www.flaticon.com/free-icons/kidney-stone" title="kidney stone icons">Kidney stone icons created by Freepik - Flaticon</a>
import tonsilIcon from '@/../public/popular-procedures-icons/tonsil.png'
// ref as <a href="https://www.flaticon.com/free-icons/tonsils" title="tonsils icons">Tonsils icons created by kerismaker - Flaticon</a>
import uterusIcon from '@/../public/popular-procedures-icons/uterus.png'
import PopularProcedureCard from './popularProcedureCard'
// ref as <a href="https://www.flaticon.com/free-icons/uterus" title="uterus icons">Uterus icons created by Freepik - Flaticon</a>


export const PopularProcedureSection = () => {

    return (
        <div className='flex flex-col space-y-3'>
            <h1 className='text-2xl font-bold font-serif'>View Popular Procedures</h1>
            <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-2 sm:gap-3 overflow-auto'>
                <PopularProcedureCard name='Colonoscopy with Biopsy' price='$1610' icon={colonIcon} href='/' />
                <PopularProcedureCard name='Gall Bladder Removal' price='$5945' icon={gallBladderIcon} href='/' />
                <PopularProcedureCard name='Hernia Repair' price='$5225' icon={herniaIcon} href='/' />
                <PopularProcedureCard name='Kidney Stone' price='$5005' icon={kidneyStoneIcon} href='/' />
                <PopularProcedureCard name='Tonsil & Adnoind Removal' price='$4631' icon={tonsilIcon} href='/' />
                <PopularProcedureCard name='Tubal Reversal' price='$5775' icon={uterusIcon} href='/' />
            </div>
        </div>

    )
}

export default PopularProcedureSection;