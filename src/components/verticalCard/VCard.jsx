import React from 'react'
import { Link } from 'react-router'
import vCard from './vcard.module.css'

export default function VCard({ post }) {

    
    return (
        <div className="col">
            <Link to={`/blog/${post.slug}`} className={`card position-relative ${vCard.inner} text-decoration-none h-100 rounded-4 overflow-hidden`}>
                <div className={`${vCard.image} overflow-hidden position-relative`}>
                    <img src={post.image} className="card-img-top" alt={post.title} />
                </div>
                <p className="position-absolute end-0 top-0 fw-bold py-1 px-2 fs-12 bg-black rounded-pill text-white m-3">{post.category}</p>
                <div className="card-body">
                    <div className="d-flex align-items-center gap-3 text-white text-opacity-25 mb-3">
                        <div className="d-flex align-items-center gap-1 fs-13">
                            <i className="fa-regular fa-clock"></i>
                            <span className=''>{post.readTime}</span>
                        </div>
                        <i className="fa-solid fa-circle fs-4-px align-self-start"></i>
                        <span className='fs-13'>{post.date}</span>
                    </div>
                    <h3 className="card-title text-white fw-bold fs-5 transition-05">{post.title}</h3>
                    <p className="card-text text-white-50 fs-14">{post.excerpt}</p>
                </div>
                <div className="px-4">
                    <div className="card-footer p-0 py-2 d-flex align-items-center justify-content-between border-top border-secondary border-opacity-10">
                        <div className="d-flex align-items-center gap-2">
                            <div className={`${vCard.avatar} overflow-hidden rounded-circle`}>
                                <img src={post.author.avatar} alt="" className='w-100' />
                            </div>
                            <div>
                                <h4 className='fw-bold fs-12 text-white m-0'>{post.author.name}</h4>
                                <span className='fs-10 text-white-50'>{post.author.role}</span>
                            </div>
                        </div>
                        <div className={`${vCard.icon} rounded-circle flex-center text-prime border prime-border transition-05`}>
                            <i className="fa-solid fa-chevron-left"></i>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}
