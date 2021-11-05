import React from 'react'
import {data} from "../data"

const Post = (props) => {

    console.log(props)
    return (
        <div className="mt-5 space-x-5 h-24 cursor-pointer">
            <div className="absolute top-55 bg-green-700 h-24 w-1">
            </div>
            <div>
                <h2 className="text-3xl">{props.title}</h2>
                <p className="truncate text-m mt-3">{props.content}</p>
            </div>
        </div>
    )
}

export default Post
