'use client'

interface GeneralContactFormProps {
    orgName: string;
}

export const GeneralContactForm = ({ orgName }: GeneralContactFormProps) => {


    return (
        <div className='flex flex-col space-y-2 '>
            <p className='text-lg font-bold'>Contact {orgName} today</p>
            <iframe src='https://form.jotform.com/232096205062145' className='rounded-md h-[1015px] border'/>
        </div>
    );
};

export default GeneralContactForm;