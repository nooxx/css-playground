import React from 'react'

type ProjectHeaderProps = {
    title: string,
    className?: string,
}

const ProjectHeader = ({title, className = ''}: ProjectHeaderProps) => {
    return (
        <div className={className}>
            <h1 className="text-center">{title}</h1>
        </div>
    )
}

export default ProjectHeader
