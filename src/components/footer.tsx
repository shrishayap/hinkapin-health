import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Divider } from "@mui/joy";
import Link from "next/link";



export const Footer = () => {
    return (
        <footer className="bg-white px-6 py-4 border-t-2 flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-[1200px]">

                <div className="text-left sm:space-y-2">
                    <p className="text-lg font-bold font-serif">© Hinkapin Health</p>
                    <p className='w-full lg:w-1/2'>Quality healthcare at an upfront, affordable cost</p>
                </div>
                
                <div className="text-left sm:space-y-2 sm:text-center">
                    <Link href="/acknowledgements" className="block hover:underline">Acknowledgements</Link>
                    <div className="flex justify-left sm:justify-center space-x-3 ">
                        <Link href="https://www.facebook.com/NTTCSurgeryCenter"><FaFacebook className="w-6 h-6" /></Link>
                        <Link href="https://twitter.com/NTTC_SC"><FaXTwitter className="w-6 h-6" /></Link>
                    </div>
                </div>

                <div className="sm:space-y-2">
                    <div>
                        <div className="flex items-center sm:justify-end space-x-2">
                            <FaPhoneAlt className="h-4 w-4" />
                            <p>+1 (888) 850 0711</p>
                        </div>
                        <div className="flex items-center sm:justify-end space-x-2">
                            <MdEmail className="h-4 w-4" />
                            <p>info@hinkapinhealth.com</p>
                        </div>

                    </div>


                    <div>
                        <p className='sm:text-right'>For medical emergencies, call 911</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;