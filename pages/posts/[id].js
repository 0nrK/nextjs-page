import Link from "next/link";
import Head from "next/head";
import { data } from "../data";
import Layout from "../components/layout";
import {useRouter } from "next/router"

export default function Article() {

    const router = useRouter();

    return (
        <>
           {data.filter(post => post.id === Number((router.query.id))).map((post) => {
               return (
                   <div 
                   className="max-w-5xl mt-12 space-y-12 m-auto"
                   key={post.id}>
                        <Head>
                            <title>{post.title}</title>
                        </Head>
                        
                        <h1 
                        className="text-6xl text-center"
                        >{post.title}</h1>
                        <p className="tracking-wider">{post.content}</p>
                   </div>
                   
               )
           })}
        </>
    )
  }