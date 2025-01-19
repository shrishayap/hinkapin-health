import Link from "next/link";
import { FaArrowCircleRight } from "react-icons/fa";

export const MidPageCTA = () => {

    return (
        <Link href="/contact">
            <div className='w-full rounded-xl border p-3 md:p-8 bg-black flex justify-between'>

                <div>
                    <p className='text-white font-bold text-lg'>
                        One simple price. No surprise charges or fees.
                    </p>
                    <p className='text-white '>
                        Contact us now to talk with our team and book your visit
                    </p>
                </div>
                <div className='flex flex-col justify-center'>

                    <FaArrowCircleRight className='w-8 h-8 lg:w-10 lg:h-10 text-white'/>
                </div>
            </div>
        </Link>
    )
}

export default MidPageCTA;