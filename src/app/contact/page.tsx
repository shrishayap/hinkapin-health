'use client'

import Header from "@/components/header"
import ContactInfo from "./components/contactInfo"
import GeneralContactForm from "./components/generalContactForm"
import HowItWorkSection from "../home-components/howItWorksSection"
import { useState, useEffect } from "react";


export function Page() {

    const [orgData, setOrgData] = useState(null);

    function formatPhoneNumber(phoneNumberString: string) {
        if (typeof phoneNumberString === "string") {
            var cleaned = ('' + phoneNumberString).replace(/\D/g, '');
            var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
            if (match) {
                return '+1 (' + match[1] + ') ' + match[2] + '-' + match[3]
            };
        }
        return "";
    }

    function getAddress() {
        if (orgData === null) {
            return "";
        }
        return orgData["org_addr1"] + " " + orgData["org_city"] + ", " + orgData["org_state"] + " " + orgData["org_zip"];
    }

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch('/api/getOrgData');
            if (data === null) {
                setOrgData(null);
                return;
            }
            const jsonData = await data.json();
            setOrgData(jsonData["data"]);
            return;
        };

        fetchData();
    }, [])

    return (
        <div className='flex flex-col space-y-4'>
            <Header />
            <div className='max-w-[1200px] self-center px-2 flex flex-col space-y-4 pb-4'>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-4'>
                    {orgData && <ContactInfo orgName={orgData["org_name"]} email={orgData["org_contact_email"]} phone={formatPhoneNumber(orgData["org_telno"])} address={getAddress()}/>}
                    {orgData && <GeneralContactForm orgName={orgData["org_name"]}/>}
                </div>
                <HowItWorkSection />

            </div>


        </div>
    )
}

export default Page

