import type {NextPageWithLayout} from "./_app";
import Layout from "../components/Layout";
import React, {useContext} from "react";
import ProjectCard from "../components/ProjectCard";
import Switch from "../components/Switch";
import {AppContext} from "../contexts/app-context";

export const PROJECTS = [
    {
        pathname: '/cube',
        title: 'Cube',
        date: 'Jan 2022',
        video_mp4: '/cube.mp4',
        video_webm: '/cube.webm',
        poster: '/cube.jpg'
    },
    {
        pathname: '/circles',
        title: 'Circles',
        date: 'Dec 2021',
        video_mp4: '/circles.mp4',
        video_webm: '/circles.webm',
        poster: '/circles.jpg'
    },
    {
        pathname: '/sun',
        title: 'Sun',
        date: 'Nov 2021',
        video_mp4: '/sun.mp4',
        video_webm: '/sun.webm',
        poster: '/sun.jpg'
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
