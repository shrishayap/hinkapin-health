import { MdOutlineMail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { IoTimeOutline } from "react-icons/io5";



export const ContactInfo = () => {

    return (
        <div className='flex flex-col space-y-3 bg-gradient-to-r from-indigo-500 to-blue-500 text-white p-3 md:p-8 rounded-xl'>
            <p className='text-2xl font-serif font-bold'>Hinkapin Health</p>
            <p>Contact us today to get personal concierge services and get your primary consultation booked. Get started by contacting us via email, phone, or by filling out the form. We look forward to hearing from you!</p>


            <div className='items-center flex space-x-1'>
                <MdOutlineMail className='w-6 h-6' />
                <div className='flex flex-col'>
                    <p className='font-bold'>Email</p>
                    <p>info@hinkapinhealth.com</p>
                </div>
            </div>

            <div className='items-center flex space-x-1'>
                <FiPhone className='w-6 h-6' />
                <div className='flex flex-col'>
                    <p className='font-bold'>Phone</p>
                    <p>+1 (888) 850 0711</p>
                </div>
            </div>

            <div className='items-center flex space-x-1'>
                <IoLocationOutline className='w-6 h-6' />
                <div className='flex flex-col'>
                    <p className='font-bold'>Address</p>
                    <p>3865 Childress Ave Ste C Mesquite TX 75150</p>
                </div>
            </div>

            <div className='items-center flex space-x-1'>
                <IoTimeOutline className='w-6 h-6' />
                <div className='flex flex-col'>
                    <p className='font-bold'>Office Hours</p>
                    <p>8:00 AM - 5:00 PM CST</p>
                </div>
            </div>
        </div>
    )
}

export default ContactInfo