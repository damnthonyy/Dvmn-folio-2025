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
            <Card
                name={project.name}
                tech={project.tech}
                image={project.image}
            />

            <p> {project.description}</p>
        </div>
    )
}