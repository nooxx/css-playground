import React from 'react'
import {ArrowLeftIcon} from "./Icons";
import Link from "next/link";

type ProjectHeaderProps = {
    title: string,
    date: string,
    className?: string,
}

const ProjectHeader = ({title, date, className = ''}: ProjectHeaderProps) => {
    return (
        <div className={`flex items-center justify-between ${className}`}>
            <Link href="/">
                <a className={`p-4 inline-flex items-center border-2 border-white rounded-lg hover:text-primary hover:border-primary`}>
                    <ArrowLeftIcon className="mr-3"/>
                    Back home
                </a>
            </Link>
            <h1 className="text-center mx-auto">{title}</h1>
            <span className="text-sm font-light">Published on {date}</span>
        </div>
    )
}

export default ProjectHeader
