import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";



export const Footer = () => {
    return (
        <footer className="bg-white px-6 py-4 border-t-2 flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-5 justify-items-center">

                <div className="text-center md:text-left space-y-2">
                    <p className="text-lg font-semibold font-serif">Hinkapin Health</p>
                    <p className='w-full md:w-1/2'>Quality healthcare at an upfront, affordable cost</p>
                </div>

                <div className="text-center space-y-2">
                    <a href="#" className="block text-center hover:underline">Acknowledgements</a>
                    <div className="flex justify-center space-x-3 ">
                        <a href="https://www.facebook.com/NTTCSurgeryCenter"><FaFacebook className="w-6 h-6" /></a>
                        <a href="https://twitter.com/NTTC_SC"><FaXTwitter className="w-6 h-6" /></a>
                    </div>
                </div>

                <div className="text-center space-y-2">
                    <div>
                        <div className="flex items-center justify-center md:justify-end space-x-2">
                            <FaPhoneAlt className="h-5 w-5" />
                            <span>+1 (888) 850 0711</span>
                        </div>
                        <div className="flex items-center justify-center md:justify-end space-x-2">
                            <MdEmail className="h-5 w-5" />
                            <span>info@hinkapinhealth.com</span>
                        </div>

                    </div>


                    <div>
                        <p>For medical emergencies, call 911</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;