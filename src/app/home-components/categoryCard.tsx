import Image, { StaticImageData } from 'next/image';
interface CategoryCardProps {
    name: string;
    icon: StaticImageData;
    href: string;
}

export const CategoryCard = ({ name, icon, href }: CategoryCardProps) => {
    return (
        <a href={href}>
            <div className="flex flex-col items-center space-y-4 p-4 border-2 rounded-lg justify-end bg-white cursor-pointer h-full">
                <div className='h-full'>
                    <p className="text-center">{name}</p>
                </div>
                <Image alt={name} src={icon} width={50} height={50} />
            </div>
        </a>
    )
}

export default CategoryCard;