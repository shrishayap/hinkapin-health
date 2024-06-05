import Link from "next/link";
import { FaArrowCircleRight } from "react-icons/fa";

export const MidPageCTA = () => {

    return (
        <Link href="/contact">
            <div className='w-full rounded-xl border p-3 md:p-8 bg-gradient-to-r from-indigo-700 to-blue-700 flex justify-between'>

                <div>
                    <p className='text-white font-bold text-lg'>
                        Single cost. Upfront pricing. Bundled.
                    </p>
                    <p className='text-white '>
                        Click to contact us today! Work with a patient care coordinator and get a consultation booked.
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