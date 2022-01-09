import type {NextPageWithLayout} from "./_app";
import Layout from "../components/Layout";
import React, {useContext} from "react";
import ProjectCard, {ProjectCardProps} from "../components/ProjectCard";
import Switch from "../components/Switch";
import {AppContext} from "../contexts/app-context";
import Cube from "../public/projects/cube/cube.webp"
import Circles from "../public/projects/circles/circles.webp"
import Sun from "../public/projects/sun/sun.webp"

export const PROJECTS: ProjectCardProps[] = [
    {
        pathname: '/cube',
        title: 'Cube',
        date: 'Jan 2022',
        video_mp4: '/projects/cube/cube.mp4',
        video_webm: '/projects/cube/cube.webm',
        thumbnail: Cube,
    },
    {
        pathname: '/circles',
        title: 'Circles',
        date: 'Dec 2021',
        video_mp4: '/projects/circles/circles.mp4',
        video_webm: '/projects/circles/circles.webm',
        thumbnail: Circles,
    },
    {
        pathname: '/sun',
        title: 'Sun',
        date: 'Nov 2021',
        video_mp4: '/projects/sun/sun.mp4',
        video_webm: '/projects/sun/sun.webm',
        thumbnail: Sun,
    },
]


const Index: NextPageWithLayout = () => {
    const {appContext, setAppContext} = useContext(AppContext)

    const handlePlayAllProjects = () => {
        // Update context
        setAppContext({...appContext, areAllVideosPlaying: !appContext.areAllVideosPlaying})
    }

    return (
        <div className="max-w-screen-desktop mx-auto w-full px-4 tablet:px-8">
            <div className="flex flex-col gap-y-10 laptop:flex-row items-center justify-between mb-10">
                <h1>Latest projects</h1>
                <Switch
                    checked={appContext.areAllVideosPlaying}
                    onChange={handlePlayAllProjects}
                    label="Play all projects"
                    className="hidden tablet:flex"
                />
            </div>
            <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-8 mb-20">
                {PROJECTS.map((project, index) => (
                    <ProjectCard
                        key={`nav-project-${index}`}
                        {...project}
                    />
                ))}
            </div>
        </div>
    )
}

Index.getLayout = page => <Layout>{page}</Layout>

export default Index
