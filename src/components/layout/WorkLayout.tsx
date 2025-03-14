import React from 'react'
import "./WorkLayout.scss"
import { useParams } from 'react-router'
import Data from '../../data/Data.json'
import { Card } from '../card/Card'

export const WorkLayout: React.FC = () => {

    const { id } = useParams<{ id: string }>();
    const project = Data.find((proj) => proj.id === id)

    if (!project) {
        return <div>Projet non trouvé</div>;
    }
    const detailClass = `detail-${project.name.toLowerCase().replace(/\s+/g, '-')}`;

    return (
        <div className={`work-details ${detailClass}`}>
            <div className='container-work-detail'>
                <Card
                    name={project.name}
                    tech={project.tech}
                    image={project.image}
                    width="110px"
                    height="162px"
                />
                <div className='container-work-detail-right'>
                    <div className='container-work-detail-right-content'>
                        <span className='style-title-context'>Context</span>
                        <p className='style-description-context'>{project.description}</p>
                    </div>
                    <div className='container-work-detail-right-content'>
                        <span className='style-title-context'>Date</span>
                        <p className='style-description-context'>{project.date}</p>
                    </div>


                </div>
            </div>



        </div>
    )
}