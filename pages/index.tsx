import type {NextPageWithLayout} from "./_app";
import Layout from "../components/Layout";
import Image from "next/image"
import sun from "../public/sun.png"
import circles from "../public/circles.png"
import spiral from "../public/spiral.png"
import React from "react";
import Link from "next/link";

export const PROJECTS = [
    {
        pathname: '/spiral3D',
        content: '3D Spiral',
        thumbnail: spiral,
    },
    {
        pathname: '/circles',
        content: 'Circles',
        thumbnail: circles,
    },
    {
        pathname: '/sun',
        content: 'Sun',
        thumbnail: sun,
    },
]

const Index: NextPageWithLayout = () => {
    return (
        <div className="max-w-screen-desktop mx-auto w-full px-4 tablet:px-8 py-8 text-white">
            <h1>My latest CSS projects</h1>
            <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-8">
                {PROJECTS.map((project, index) => (
                    <Link href={project.pathname} key={`nav-project-${index}`}>
                        <a className={`flex flex-col justify-center items-center gap-y-4 p-8 border-2 border-white rounded-lg hover:border-red-500 group`}>
                            <Image
                                src={project.thumbnail}
                                alt="Sun"
                            />
                            <span
                                className="transition ease-in duration-150 text-4xl group-hover:text-red-500">{project.content}</span>
                        </a>
                    </Link>
                ))}
            </div>
        </div>
    )
}

Index.getLayout = page => <Layout>{page}</Layout>

export default Index
