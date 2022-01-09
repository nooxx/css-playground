import React, {useContext, useEffect} from 'react'
import Image from "next/image";
import Link from "next/link";
import {AppContext} from "../contexts/app-context";
import {ArrowRightIcon} from "./Icons";

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
        console.log('use efffect')
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
                className={`p-8 border-2 border-white rounded-lg hover:border-primary group`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div className="flex items-center justify-between mb-3">
                    <h2 className="text-4xl">{title}</h2>
                    <span className="text-sm font-light">{date}</span>
                </div>

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
                        autoPlay={true}
                        loop={true}
                        muted={true}
                        playsInline={true}
                        preload="auto"
                        className="w-full"
                        src={video}
                    >
                        Your browser does not support the video tag.
                    </video>
                )}

                <div className="flex justify-end">
                    <div className="flex items-center font-bold text-base tracking-wide transition ease-in duration-150 group-hover:text-primary">
                        View project <ArrowRightIcon className="ml-2"/>
                    </div>
                </div>
            </a>
        </Link>
    )
}

export default ProjectCard

