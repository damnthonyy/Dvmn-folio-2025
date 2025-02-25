import React from 'react'
import "./Index.scss"
export const Index: React.FC = () => {

    const MetaData = "src/assets/image/image-me.jpg"

    return (
        <div className='container'>
            <div className='content-title'>
                <span className='title'>
                    creative front-end developer
                </span>
                <span className='title'>
                    &
                </span>
                <span className='title'>
                    Design ux/ui
                </span>
            </div>
            <div className='container-image'>
                <img src={MetaData} alt='photo-antoine' className='image' />
            </div>

        </div>
    )
}