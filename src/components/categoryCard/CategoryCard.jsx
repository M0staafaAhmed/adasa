import React from 'react'
import { Link } from 'react-router'
import catCard from './categoryCard.module.css'

export default function CategoryCard({ category }) {

    
    return (
        <div className="col">
            <Link to={`/blog?category=${category.name}`} className={`${catCard.inner} text-decoration-none d-flex align-items-center justify-content-between p-4 border text-end border-secondary border-opacity-50 rounded-4`}>
                <div>
                    <div className={`${catCard.icon} rounded-3 flex-center`}>
                        <i className={`fa-solid ${category.icon}`}></i>
                    </div>
                    <p className='text-white my-2 fw-bold fs-5'>{category.name}</p>
                    <span className='text-white-50 fs-12'>{category.count} مقالة</span>
                </div>
                <i className="fa-solid fa-circle-chevron-left fs-3"></i>
            </Link>
        </div>
    )
}
