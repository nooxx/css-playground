import React, {useContext, useEffect} from 'react'
import Link from "next/link";
import Image from "next/image"
import {AppContext} from "../contexts/app-context";
import {ArrowRightIcon} from "./Icons";

export type ProjectCardProps = {
    pathname: string,
    title: string,
    date: string,
    video_mp4: string,
    thumbnail: StaticImageData,
    video_webm?: string,
}

const ProjectCard = ({
                         pathname,
                         title,
                         date,
                         thumbnail,
                         video_mp4,
                         video_webm
                     }: ProjectCardProps) => {
    const {appContext} = useContext(AppContext)
    const videoRef = React.useRef<HTMLVideoElement>(null)

    // Play / pause video depending on areAllVideosPlaying
    useEffect(() => {
        if (appContext.areAllVideosPlaying) {
            videoRef?.current?.play()
        } else {
            videoRef?.current?.pause()
        }
    }, [appContext.areAllVideosPlaying])

    // Play video on mouseenter
    const handleMouseEnter = () => {
        if (appContext.areAllVideosPlaying) return
        videoRef?.current?.play()
    }

    // Pause video on mouseleave
    const handleMouseLeave = () => {
        if (appContext.areAllVideosPlaying) return
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
                    <h2>{title}</h2>
                    <span className="text-sm font-light">{date}</span>
                </div>

                <div className="block tablet:hidden">
                    <Image
                        src={thumbnail}
                        quality={100}
                        alt={`${title} thumbnail`}
                        placeholder="blur"
                        layout="responsive"
                    />
                </div>

                <video
                    ref={videoRef}
                    className="hidden tablet:block w-full"
                    loop={true}
                    muted={true}
                >
                    <source src={video_mp4} type="video/mp4"/>
                    <source src={video_webm} type="video/webm"/>
                    Your browser does not support the video tag.
                </video>

                <div className="flex justify-end">
                    <div
                        className="flex items-center font-bold text-base tracking-wide transition ease-in duration-150 group-hover:text-primary">
                        View project <ArrowRightIcon className="ml-2"/>
                    </div>
                </div>
            </a>
        </Link>
    )
}

export default ProjectCard

