import React from 'react'
import { data } from '../data'
import Post from './Post'
import Link from 'next/link'

const Posts = () => {
    return (
        <div className="mt-24">
            {data.map((item) => {
            return (
                <Link href={"/posts/" + item.id}>
                    <a>
                    <Post key={item.id} title={item.title} content={item.content}/>
                    </a>
                </Link>
            )})}
        </div>
    )
}

export default Posts
