import React, { useEffect, useState } from 'react'
import './post.css'
import { Link, useParams } from 'react-router'
import ReactMarkdown from "react-markdown";
import Card from '../card/Card';

export default function Post({ posts }) {
    const { slug } = useParams();

    const [post, setPost] = useState(posts.find((item) => {
        return item.slug == slug;
    }));

    const slugify = text => text.toLowerCase().replace(/\s+/g, "-");

    const [headings, setHeadings] = useState([]);

    useEffect(() => {
        const extracted = post.content
            .split("\n")
            .filter(line => line.startsWith("## "))
            .map(line => line.replace("## ", ""));

        setHeadings(extracted);

        console.log(extracted);

    }, [post.content]);

    const related = posts.filter((item) => {
        return item.category === post.category
    })




    return (
        <main>
            {/* Start hero section */}
            <section className="post-hero mt-70" style={{ backgroundImage: `url(${post.image})` }}>
                <div className="container position-relative z-3 py-4">
                    <div className="d-flex align-items-center gap-2 bg-black bg-opacity-50 w-fit rounded-pill py-2 px-3 fs-14 fw-bold">
                        <Link to={"/"} className='text-white-50 text-decoration-none transition-05 hover-white'><i className="fa-solid fa-home"></i></Link>
                        <i className="fa-solid fa-chevron-left text-white-50"></i>
                        <Link to={"/blog"} className='text-white-50 text-decoration-none transition-05 hover-white'>المدونة</Link>
                        <i className="fa-solid fa-chevron-left text-white-50"></i>
                        <p className="m-0 text-prime">{post.category}</p>
                    </div>
                    <div className="my-5 px-md-5 mx-md-5">
                        <div>
                            <div className="d-flex align-items-center gap-3 flex-wrap">
                                <Link to={`/blog?category=${post.category}`} className='btn rounded-pill text-white bg-orange transition-05 py-2 px-3 fw-bold'>{post.category}</Link>
                                <div className="d-flexa align-items-center text-white-50">
                                    <i className="fa-regular fa-calendar ms-2"></i>
                                    <span>{post.date}</span>
                                </div>
                                <div className="d-flexa align-items-center text-white-50">
                                    <i className="fa-regular fa-clock ms-2"></i>
                                    <span>{post.readTime}</span>
                                </div>
                            </div>
                            <h1 className='fs-50 fw-bold text-white my-4'>{post.title}</h1>
                            <div className="d-flex align-items-center gap-3 p-3 border border-secondary border-opacity-25 w-fit rounded-4 bg-black bg-opacity-25">
                                <div className="image overflow-hidden rounded-circle border border-3 prime-border w-70 h-70">
                                    <img src={post.author.avatar} alt="" className="w-100 object-cover" />
                                </div>
                                <div>
                                    <h2 className="m-0 text-white fw-bold fs-6 mb-2">{post.author.name}</h2>
                                    <span className="text-white-50 fs-14 fw-bold">{post.author.role}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Start hero section */}

            {/* Start post */}
            <section id="post" className='py-5 bg-black'>
                <div className="container">
                    <div className="row  flex-column-reverse flex-lg-row g-4">
                        <div className="col-lg-9">
                            <div className="inner">
                                <p className="rounded-4 p-4 border prime-border bg-prime text-white fs-5 text-talic mb-4">"{post.excerpt}"</p>
                                <div className="post-content text-white text-opacity-75">
                                    <ReactMarkdown components={{
                                        h2: ({ children }) => (
                                            <h2 id={slugify(children)} className="post-h2 d-flex align-items-center gap-2 text-white fw-bold mt-5 mb-3">
                                                <div className="icon flex-center border prime-border bg-prime rounded-3">
                                                    <i className="fa-solid fa-camera text-prime"></i>
                                                </div>
                                                {children}
                                            </h2>
                                        ),
                                    }} >{post.content}</ReactMarkdown>
                                </div>

                                <div className="rounded-3 p-4 border border-secondary border-opacity-25 bg-secondary bg-opacity-10 mt-4">
                                    <div className="d-flex align-items-center gap-3 mb-3">
                                        <div className="tag flex-center rounded-3 border prime-border bg-prime text-prime">
                                            <i className="fa-solid fa-tags fs-5"></i>
                                        </div>
                                        <span className='fw-bold text-white'>الوسوم</span>
                                    </div>
                                    <div className="d-flex align-items-center gap-2 tags">
                                        {post.tags.map((tag) => {
                                            return <p className="m-0 transition-05 border border-secondary border-opacity-25 text-white-50 py-1 px-2 rounded-pill cursor-pointer">#{tag}</p>
                                        })}
                                    </div>
                                </div>

                                <div className="rounded-3 p-4 border border-secondary border-opacity-25 bg-secondary bg-opacity-10 mt-4 d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center gap-3 mb-3">
                                        <div className="tag flex-center rounded-3 border prime-border bg-prime text-prime">
                                            <i className="fa-solid fa-share-nodes fs-5"></i>
                                        </div>
                                        <span className='fw-bold text-white'>شارك المقال</span>
                                    </div>
                                    <ul className="p-0 d-flex align-items-center gap-2">
                                        <li className="tag flex-center border border-secondary border-opacity-25 transition-05 hover-white cursor-pointer text-white-50 rounded-3"><i className="fa-brands fa-x-twitter"></i></li>
                                        <li className="tag flex-center border border-secondary border-opacity-25 transition-05 hover-white cursor-pointer text-white-50 rounded-3"><i className="fa-brands fa-linkedin-in"></i></li>
                                        <li className="tag flex-center border border-secondary border-opacity-25 transition-05 hover-white cursor-pointer text-white-50 rounded-3"><i className="fa-brands fa-whatsapp"></i></li>
                                        <li className="tag flex-center border border-secondary border-opacity-25 transition-05 hover-white cursor-pointer text-white-50 rounded-3"><i className="fa-solid fa-link"></i></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 right">
                            <div className="inner position-sticky top-80px text-white">
                                <div className="bg-blackk p-4 rounded-3 border border-secondary border-opacity-25">
                                    <div className="d-flex align-items-center gap-2">
                                        <div className="tag flex-center rounded-3 border prime-border bg-prime text-prime">
                                            <i className="fa-solid fa-list-ul"></i>
                                        </div>
                                        <span className='fw-bold text-white'>الوسوم</span>
                                    </div>

                                    {headings.map((item, index) => {
                                        return <a href={`#${slugify(item)}`} className="p-2 my-3 d-flex align-items-center gap-2 rounded-2 transition-05 text-decoration-none">
                                            <p className="number text-white-50 rounded-circle flex-center m-0 transition-05">{index + 1}</p>
                                            <p className='m-0 text-white fs-14 transition-05'>{item}</p>
                                        </a>
                                    })}

                                </div>
                                <div className="my-4 bg-blackk p-4 rounded-3 border border-secondary border-opacity-25 d-flex align-items-center justify-content-between gap-2">
                                    <div className="text-center p-4 bg-black">
                                        <i className="fa-regular fa-clock text-prime fs-5"></i>
                                        <p className='m-0 text-white fw-bold'>{post.readTime}</p>
                                    </div>
                                    <div className="text-center p-4 bg-black">
                                        <i className="fa-regular fa-calendar text-prime fs-5"></i>
                                        <p className='m-0 text-white fw-bold'>{post.date}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End post */}

            {/* Start related */}
            <section id="related" className='bg-black'>
                <div className="container border-top border-secondary border-opacity-25 py-5">
                    <div className="d-flex align-items-center justify-content-between gap-3">
                        <div className="d-flex align-items-center gap-2">
                            <div className="tag flex-center border prime-border text-prime rounded-3 bg-prime">
                                <i className="fa-solid fa-images"></i>
                            </div>
                            <div>
                                <h4 className='m-0 text-white fw-bold fs-5'>مقاللات قد تعجبك</h4>
                                <p className='m-0 text-white-50 fs-14'>استكشف المزيد من المحتوى المميز</p>
                            </div>
                        </div>
                        <Link to={"/blog"} className='text-decoration-none to-blog-latest d-none d-sm-block transition-05 rounded-3 text-prime py-2 px-3 fw-bold'>عرض جميع المقالات <i className="fa-solid fa-arrow-left transition-03"></i></Link>
                    </div>
                    <div className="row row-cols-1 row-cols-md-2 row-cols-md-3 mt-4">
                    {related.slice(-3).map((item)=>{
                        return <Card key={item.id} post={item}/>
                    })}
                        
                    </div>

















                </div>
            </section>
            {/* End related */}
        </main>
    )
}
