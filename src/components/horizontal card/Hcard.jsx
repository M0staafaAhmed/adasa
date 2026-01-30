import React from 'react'
import { Link } from 'react-router'
import hcard from './Hcard.module.css'

export default function Hcard({ post , size}) {
    return (
        <Link to={`/blog/${post.slug}`} className={`card mb-3 transition-05 rounded-4 overflow-hidden ${hcard.hcard}`}>
            <div className="row g-0">
                <div className={`position-relative image overflow-hidden ${size[0]}`}>
                    <img src={post?.image} className="img-fluid rounded-start transition-05 h-100 object-cover" alt={post?.title} />
                    {post.featured?                     <p className="position-absolute top-0 end-0 bg-gradiant-2 fw-bolder fs-12 py-1 px-2 m-3 rounded-pill text-white"><i className="fa-solid fa-star ms-1"></i> مميز</p> : ""}
                </div>
                <div className={size[1]}>
                    <div className="card-body p-4 d-flex flex-column align-items-start h-100">
                        <div className="flex-grow-1">
                            <div className="d-flex gap-3 align-items-center mb-3">
                                <p className='m-0 fw-bold text-prime border prime-border py-1 px-2 fs-12 rounded-pill bg-prime'>{post?.category}</p>
                                <p className='m-0 text-white text-opacity-50 d-flex gap-1 align-items-center'><i className="fa-regular fa-clock fs-12"></i>{post?.readTime}</p>
                                <p className='m-0 text-white text-opacity-50 d-flex gap-1 align-items-center'><i className="fa-regular fa-calendar fs-12"></i>{post?.date}</p>
                            </div>
                            <h3 className="card-title text-white fw-bold transition-05">{post?.title}</h3>
                            <p className="card-text text-white text-opacity-50 fs-5">{post?.excerpt}</p>
                        </div>
                        <div className="d-flex align-items-center justify-content-between w-100 mt-3">
                            <div className="d-flex align-items-center gap-2">
                                <div className={`overflow-hidden rounded-circle ${hcard.avatar}`}>
                                    <img src={post?.author.avatar} alt={post?.author.name} className='w-100 object-cover' />
                                </div>
                                <div className="info">
                                    <p className='m-0 text-white fw-bold'>{post?.author.name}</p>
                                    <p className='m-0 text-secondary fw-bold fs-12'>{post?.author.role}</p>
                                </div>
                            </div>
                            <div>
                                <p className='m-0 text-prime'>اقرأ المقال <i className="fa-solid fa-arrow-left me-2"></i></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}
