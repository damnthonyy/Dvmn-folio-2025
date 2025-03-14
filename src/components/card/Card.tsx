import React from 'react'
import "./Card.scss"

interface CardProps {
    name: string;
    tech: string;
    image: string;
    className?: string;
    width?: string;
    height?: string;
    onClick?: () => void;
}
export const Card: React.FC<CardProps> = ({ name, tech, image, className, onClick, width, height }) => {
    return (
        <div className={`container-card  ${className ? className : ''}`} onClick={onClick}>
            <div className='container-image' style={{ width: width, height: height }}>
                <img src={image} alt={name} className='style-image' />
            </div>
            <div className='container-description'>
                <span className='style-description'>{name}</span>
                <span className='style-description'>{tech}</span>
            </div>
        </div>
    )
}