import gallBladderIcon from '@/../public/popular-procedures-icons/gallbladder.png'
import colonIcon from '@/../public/popular-procedures-icons/colon.png'
import herniaIcon from '@/../public/popular-procedures-icons/hernia.png'
import kidneyStoneIcon from '@/../public/popular-procedures-icons/kidneyStone.png'
import tonsilIcon from '@/../public/popular-procedures-icons/tonsil.png'
import motherIcon from '@/../public/popular-procedures-icons/mother.png'
import PopularProcedureCard from './popularProcedureCard'


export const PopularProcedureSection = () => {

    return (
        <div className='flex flex-col space-y-3'>
            <h3 className='text-xl font-bold'>View Popular Surgeries</h3>
            <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-2 sm:gap-3 overflow-auto'>
                <PopularProcedureCard name='Colonoscopy with Biopsy' price='$1610' icon={colonIcon} href='/procedures/1' />
                <PopularProcedureCard name='Gall Bladder Removal' price='$5945' icon={gallBladderIcon} href='/procedures/23' />
                <PopularProcedureCard name='Hernia Repair' price='$5225' icon={herniaIcon} href='/procedures/17' />
                <PopularProcedureCard name='Kidney Stone' price='$5005' icon={kidneyStoneIcon} href='/procedures/92' />
                <PopularProcedureCard name='Tonsil & Adnoind Removal' price='$4631' icon={tonsilIcon} href='/procedures/10' />
                <PopularProcedureCard name='Tubal Reversal' price='$5775' icon={motherIcon} href='/procedures/33' />
            </div>
        </div>

    )
}

export default PopularProcedureSection;