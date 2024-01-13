import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Avatar from '@mui/joy/Avatar';



interface InfoCardProps {
    title: string;
    content: string;
    image: string;
    number: number;
}

export const InfoCard = ({ title, content, image, number }: InfoCardProps) => {
    return (
        <Card variant="outlined">
            <CardOverflow>
                <Avatar
                    size="md"
                    sx={{
                        position: 'absolute',
                        zIndex: 2,
                        borderRadius: '50%',
                        bgcolor: 'black',
                        color: 'white',
                        left: '1rem',
                        top: 0,
                        transform: 'translateY(50%)',
                    }}
                >
                    {number}
                </Avatar>
                <AspectRatio ratio="2">
                    <img
                        src={image}
                        loading="lazy"
                        alt={title}
                    />
                </AspectRatio>

            </CardOverflow>
            <CardContent>
                <p className='font-bold'>
                    {title}
                </p>
                <p>
                    {content}
                </p>
            </CardContent>
        </Card>
    )
}

export default InfoCard;