import React from 'react'
import './card.css'
import { Link } from 'react-router'

export default function Card({ post }) {
    return (
        <div className="col">
            <Link to={`/blog/${post.slug}`} className="post-card text-decoration-none d-block h-100">
                <div className="image-wrapper">
                    <img src={post.image} alt />
                    <span className="post-tag">{post.category}</span>
                </div>
                <div className="content">
                    <h3 className='fw-bold'>{post.title}</h3>
                    <div className="meta">
                        <span>{post.author.name}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                    </div>
                </div>
            </Link>
        </div>
    )
}
