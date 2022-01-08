import React, {forwardRef} from 'react'
import Image from "next/image";
import Link from "next/link";
import useCombinedRefs from "../hooks/useCombinedRefs";

type ProjectCardProps = {
    pathname: string,
    title: string,
    date: string,
    thumbnail?: StaticImageData,
    video?: string,
}

const ProjectCard = forwardRef<HTMLVideoElement, ProjectCardProps>(({pathname, title, date, thumbnail, video}, ref) => {
    const innerRef = React.useRef<HTMLVideoElement>(null)
    const combinedRef = useCombinedRefs(ref, innerRef)

    const handleMouseEnter = () => {
        if(!video) return
        innerRef?.current?.play()
    }

    const handleMouseLeave = () => {
        if(!video) return
        innerRef?.current?.pause()
    }

    return (
        <Link href={pathname}>
            <a
                className={`flex flex-col justify-center items-center gap-y-4 p-8 border-2 border-white rounded-lg hover:border-red-500 group`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {thumbnail && (
                    <Image
                        src={thumbnail}
                        alt={`${title} thumbnail`}
                        placeholder="blur"
                    />
                )}
                {video && (
                    <video
                        ref={combinedRef}
                        loop={true}
                        muted={true}
                        className="w-full"
                    >
                        <source src={video} type="video/webm"/>
                        Your browser does not support the video tag.
                    </video>
                )}
                <span
                    className="transition ease-in duration-150 text-4xl group-hover:text-red-500">{title}</span>
            </a>
        </Link>
    )
})

// For ESLINT
ProjectCard.displayName = "ProjectCard";

export default ProjectCard

