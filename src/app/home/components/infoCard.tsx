import { Card, CardContent, Typography } from '@mui/joy';
import React from 'react';

interface InfoCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
}

export const InfoCard: React.FC<InfoCardProps> = ({ title, description, icon }) => {


    return (

        <Card variant="solid" color="primary" invertedColors
            sx={{
                minWidth: '320px',
            }}
        >
            
                <CardContent>
                    <div className="flex flex-row items-center space-x-3">
                        <div className="flex flex-col">
                            <div className='flex flex-row justify-between'>
                                <Typography level="title-md">{title}</Typography>
                                {icon}
                            </div>
                            <Typography level="body-sm">{description}</Typography>
                        </div>
                    </div>
                </CardContent>

        </Card >
    )


}



export default InfoCard;