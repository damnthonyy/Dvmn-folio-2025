import React from 'react'
import "./Works.scss"
import Data from '../../data/Data.json'
import { Link } from 'react-router-dom'
import { Card } from '../../components/card/Card'

export const Works: React.FC = () => {
    return (
        <div className='works-wrapper'>
            <h1 style={{ marginBottom: '3rem' }}> Works</h1>
            <div className="data-card">
                <div className="wrapper-project">
                    {Data.map((project) => {
                        // Génère un slug unique en fonction du name
                        // Exemple : "Projet A" -> "link-projet-a"
                        const linkClass = `link-${project.name.toLowerCase().replace(/\s+/g, '-')}`;

                        return (
                            <Link
                                key={project.id}
                                to={`/works/${project.id}`}
                                className={linkClass}
                            >
                                <Card
                                    name={project.name}
                                    tech={project.tech}
                                    image={project.image}
                                />
                            </Link>
                        );
                    })}
                </div>
            </div>

        </div>
    )
}