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
                <PopularProcedureCard id={45} icon={colonIcon}/>
                <PopularProcedureCard id={53} icon={gallBladderIcon} />
                <PopularProcedureCard id={55} icon={herniaIcon} />
                <PopularProcedureCard id={155} icon={kidneyStoneIcon} />
                <PopularProcedureCard id={34} icon={tonsilIcon} />
                <PopularProcedureCard id={69} icon={motherIcon}  />
            </div>
        </div>

    )
}

export default PopularProcedureSection;