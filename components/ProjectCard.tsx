import React, {useContext, useEffect} from 'react'
import Link from "next/link";
import {AppContext} from "../contexts/app-context";
import {ArrowRightIcon} from "./Icons";

type ProjectCardProps = {
    pathname: string,
    title: string,
    date: string,
    video_mp4: string,
    poster?: string,
    video_webm?: string,
}

const ProjectCard = ({pathname, title, date, poster, video_mp4, video_webm}: ProjectCardProps) => {
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
        if (appContext.areAllVideosPlaying) return
        videoRef?.current?.play()
    }

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

                <video
                    ref={videoRef}
                    className="w-full"
                    autoPlay={true}
                    loop={true}
                    muted={true}
                    playsInline={true}
                    poster={poster}
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

