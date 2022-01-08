import type {NextPageWithLayout} from "./_app";
import Layout from "../components/Layout";
import sun from "../public/sun.png"
import circles from "../public/circles.png"
import React, {useContext, useEffect, useRef} from "react";
import ProjectCard from "../components/ProjectCard";
import Switch from "../components/Switch";
import {AppContext} from "../contexts/app-context";

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
    const {appContext, setAppContext} = useContext(AppContext)

    const handlePlayAllProjects = () => {
        // Update context
        setAppContext({...appContext, areAllVideosPlaying: !appContext.areAllVideosPlaying})
    }

    return (
        <div className="max-w-screen-desktop mx-auto w-full px-4 tablet:px-8 py-8 text-white">
            <div className="flex items-center justify-between my-10">
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
