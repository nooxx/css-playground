import React, {useContext, useEffect} from 'react'
import Image from "next/image";
import Link from "next/link";
import {AppContext} from "../contexts/app-context";

type ProjectCardProps = {
    pathname: string,
    title: string,
    date: string,
    thumbnail?: StaticImageData,
    video?: string,
}

const ProjectCard = ({pathname, title, date, thumbnail, video}: ProjectCardProps) => {
    const {appContext} = useContext(AppContext)
    const videoRef = React.useRef<HTMLVideoElement>(null)

    useEffect(() => {
        if (appContext.areAllVideosPlaying) {
            videoRef?.current?.play()
        } else {
            videoRef?.current?.pause()
        }
    }, [appContext.areAllVideosPlaying])

    const handleMouseEnter = () => {
        if (!video || appContext.areAllVideosPlaying) return
        videoRef?.current?.play()
    }

    const handleMouseLeave = () => {
        if (!video || appContext.areAllVideosPlaying) return
        videoRef?.current?.pause()
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
                        ref={videoRef}
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
}

export default ProjectCard

