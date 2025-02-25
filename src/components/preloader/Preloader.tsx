import React from 'react'
import "./Preloader.scss"

interface PreloaderProps {
    isLoading: boolean;
}

export const Preloader: React.FC<PreloaderProps> = ({ isLoading }) => {

    return (
        isLoading && (

            <div className='preload-container'>
                <span className='title-preload'>
                    Antoine Mahassadi
                </span>
            </div>
        )

    )
}