import { MdErrorOutline } from "react-icons/md";
import DoctorCardSkeleton from "./doctorCardSkeleton";
import ProcedureCard from "./procedureCard";
import React from "react";
import Image from "next/image";
import notFoundImage from "public/notFound.png";


interface ProcedureCardHolderProps {
    category: string;
}

export const ProcedureCardHolder = ({ category }: ProcedureCardHolderProps) => {

    const [procedures, setProcedures] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        setLoading(true);
        fetch(`/api/procedurePrices?category=${category}`)
            .then((res) => res.json())
            .then((data) => {
                setProcedures(data.procedures);
                setLoading(false);
            });
    }, [category]);


    return (

            <div className='flex flex-col space-y-3'>

                {(procedures.length > 0 && category) && <p className='text-xl font-bold' >Procedures available</p>}
                {!loading && procedures.length === 0 &&

                    <div className='flex flex-col md:flex-row'>
                        <p className='text-xl self-center bg-red-300 p-4 rounded-xl'>
                            <div className='flex justify-center'>
                                <MdErrorOutline className='w-10 h-10' />
                            </div>
                            Sorry, we were unable to find any procedures in this category.
                            Please select another category to search other available providers.
                        </p>
                        <Image className="max-w-[600px] self-center" src={notFoundImage} alt="Data not found" />
                    </div>

                }
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-3'>

                    {loading &&
                        <>
                            <DoctorCardSkeleton />
                            <DoctorCardSkeleton />
                            <DoctorCardSkeleton />
                            <DoctorCardSkeleton />
                            <DoctorCardSkeleton />
                            <DoctorCardSkeleton />
                        </>
                    }




                    {procedures.map(proc => {
                        return (
                            <ProcedureCard name={proc.name} price={proc.price} id={proc.uuid} key={proc.uuid} />
                        );
                    })}
                </div>

            </div>
    )
}

export default ProcedureCardHolder;