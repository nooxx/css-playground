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
        <div className={`flex flex-col gap-y-8 laptop:flex-row items-center justify-between ${className}`}>
            <div className="fixed bottom-6 laptop:relative laptop:bottom-0 z-10">
                <Link href="/">
                    <a className={`p-4 inline-flex items-center border-2 bg-black border-white rounded-lg hover:text-primary hover:border-primary`}>
                        <ArrowLeftIcon className="mr-3"/>
                        Back home
                    </a>
                </Link>
            </div>
            <h1 className="text-center mx-auto">{title}</h1>
            <span className="font-light">Published on {date}</span>
        </div>
    )
}

export default ProjectHeader
