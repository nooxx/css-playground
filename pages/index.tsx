import type {NextPageWithLayout} from "./_app";
import Layout from "../components/Layout";
import sun from "../public/sun.png"
import circles from "../public/circles.png"
import React, {useRef} from "react";
import ProjectCard from "../components/ProjectCard";
import Switch from "../components/Switch";

export const PROJECTS = [
    {
        pathname: '/cube',
        title: 'Cube',
        date: 'January 2022',
        video: '/cube.webm',
    },
    {
        pathname: '/circles',
        title: 'Circles',
        date: 'November 2021',
        thumbnail: circles,
    },
    {
        pathname: '/sun',
        title: 'Sun',
        date: 'November 2021',
        thumbnail: sun,
    },
]


const Index: NextPageWithLayout = () => {
    const videoRefs = useRef<(HTMLVideoElement | null)[]>([])

    const handlePlayAllProjects = (isPlayAllProjects: Boolean) => {
        if (isPlayAllProjects) {
            for (let i = 0; i < videoRefs.current.length; i++) {
                videoRefs.current[i]?.play()
            }
        } else {
            for (let i = 0; i < videoRefs.current.length; i++) {
                videoRefs.current[i]?.pause()
            }
        }
    }

    return (
        <div className="max-w-screen-desktop mx-auto w-full px-4 tablet:px-8 py-8 text-white">
            <div className="flex items-center justify-between my-10">
                <h1>Latest projects</h1>
                <Switch onChange={handlePlayAllProjects} label="Play all projects"/>
            </div>
            <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-8 mb-20">
                {PROJECTS.map((project, index) => (
                    <ProjectCard
                        key={`nav-project-${index}`}
                        ref={videoRef => videoRefs.current[index] = videoRef}
                        {...project}
                    />
                ))}
            </div>
        </div>
    )
}

Index.getLayout = page => <Layout>{page}</Layout>

export default Index
