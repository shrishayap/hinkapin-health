import Avatar from '@mui/joy/Avatar';
import Divider from '@mui/joy/Divider';
import { IoLocationOutline } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { FaRegClock } from "react-icons/fa6";
import { IoPersonCircleOutline } from "react-icons/io5";


interface DoctorMainInfoProps {
    uuid: string,
    firstName: string,
    lastName: string,
    prefix: string,
    qualifications: string[],
    title: string,
    hospitalName: string,
    hospitalAddress: string,
    hospitalCity: string,
    hospitalState: string,
    hospitalZip: string,
    rating: number,
    numberOfRatings: number,
    yearsOfExperience: number,
    gender: string,
    phoneNumber: string,
    description: string,
}

export const DoctorMainInfo = ({ uuid, firstName, lastName, prefix, qualifications, title, hospitalName, hospitalAddress, hospitalCity, hospitalState, hospitalZip, rating, numberOfRatings, yearsOfExperience, gender, phoneNumber, description }: DoctorMainInfoProps) => {

    let imageURL = 'https://firebasestorage.googleapis.com/v0/b/hinkapin-health.appspot.com/o/doctorImages%2F'
    imageURL += uuid;
    imageURL += ".jpeg?alt=media";

    const doctorName = `${prefix} ${firstName} ${lastName}`;

    let qualification = "";
    for (let qual of qualifications) {
        qualification += qual + " ";
    }

    const address = `${hospitalAddress}, ${hospitalCity}, ${hospitalState} ${hospitalZip}`;


    return (
        <div className='flex flex-col space-y-3'>

            <div className='flex flex-row'>
                <div className='w-1/2'>
                    <Avatar src={imageURL} sx={{ '--Avatar-size': '120px' }} />
                </div>
                <div className='w-1/2 self-center'>
                    <p className="text-2xl font-extrabold">{doctorName} <span><p className='font-extrabold text-sm text-gray-500'>{qualification}</p></span></p>
                </div>
            </div>

            <Divider />

            <div className='flex flex-col'>

                <p className="font-bold text-xl">{title}</p>

                <div className='flex w-full justify-between'>

                    <div>

                        <div className='flex space-x-2'>
                            <IoLocationOutline className='w-5 h-5' />
                            <p>{hospitalName}</p>
                        </div>
                        <p>{address}</p>


                        <div className='flex space-x-2'>
                            <FaRegStar className='w-5 h-5' />
                            <p>{rating} ({numberOfRatings})</p>
                        </div>

                    </div>

                    <div>
                        <div className='flex space-x-2'>
                            <FaRegClock className='w-5 h-5' />
                            <p>{yearsOfExperience} YOE</p>
                        </div>

                        <div className='flex space-x-2'>
                            <FiPhone className='w-5 h-5' />
                            <p>{phoneNumber}</p>
                        </div>

                        <div className='flex space-x-2'>
                            <IoPersonCircleOutline className='w-5 h-5' />
                            <p>{gender}</p>
                        </div>

                    </div>

                </div>

            </div>

            <p>{description}</p>
        </div>
    )
}

export default DoctorMainInfo;