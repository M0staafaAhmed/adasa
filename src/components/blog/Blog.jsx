import React, { useEffect, useState } from 'react'
import './blog.css'
import VCard from '../verticalCard/vCard';
import { useSearchParams } from 'react-router';
import Hcard from '../horizontal card/Hcard';

export default function Blog({ posts }) {

    const [searchParams] = useSearchParams();

    const [category, setCategory] = useState(
        searchParams.get("category") || "الكل"
    );
    const [filteredPosts, setfilteredPosts] = useState(posts.posts);

    const [shape, setShape] = useState("virtical")

    useEffect(() => {
        let filtered = category == "الكل" ? posts.posts : posts.posts.filter((post) => {
            return post.category == category;
        })
        setfilteredPosts(filtered)
    }, [category]);


    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredPosts.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(filteredPosts.length / itemsPerPage);


    const handleNext = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const handlePrev = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };



    return (
        <main className="pt-65">
            {/* Start hero */}
            <section className="blog-hero bg-black py-5 position-relative overflow-hidden">
                <div className="circle position-absolute top-0 start-0 m-5"></div>
                <div className="circle position-absolute top-50 start-50 translate-middle"></div>
                <div className="circle position-absolute bottom-0 end-0 m-5"></div>
                <div className="background position-absolute top-0 start-0 w-100 h-100"></div>
                <div className="container text-center py-5 position-relative">
                    <div className="title d-flex justify-content-center align-items-center gap-2 py-2 px-3 rounded-pill mx-auto">
                        <div>
                            <i className="fa-solid fa-circle fs-8 m-1 fade-in text-prime"></i>
                            <i className="fa-solid fa-newspaper text-prime"></i>
                        </div>
                        <p className='m-0 fs-12 fw-bold'>مدونتنا</p>
                    </div>
                    <h1 className='mt-5 fw-bolder fs-70 text-white'>اكتشف <span className='text-accent'>مقالاتنا</span> <br /></h1>
                    <p className='text-secondary fs-5 my-3'>اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث</p>
                </div>
            </section>
            {/* End hero */}

            {/* Start search and category */}
            <section className="search bg-black  py-3">
                <div className="container d-flex flex-wrap align-items-center justify-content-between gap-3">
                    <div className="position-relative input">
                        <input type="text" id='search' className="form-control px-4 py-2" placeholder='ابحث في المقالات...' />
                        <i className="fa-solid fa-magnifying-glass position-absolute top-50 start-0 translate-middle-y ms-3 text-white-50"></i>
                    </div>
                    <div className="catergries d-flex flex-wrap gap-2 flex-grow-1 flex-md-grow-0 justify-content-between">
                        <button className={`btn fw-bold py-2 fs-14 ${category == "الكل" ? "active" : ""}`} onClick={() => setCategory("الكل")}>جميع المقالات</button>
                        {posts.categories.map((cat) => {
                            return <button key={cat.name} className={`btn fw-bold py-2 fs-14 ${category == cat.name ? "active" : ""}`} onClick={() => setCategory(cat.name)}>{cat.name}</button>
                        })}
                    </div>
                </div>
            </section>
            {/* End search and category */}

            {/* Start posts section */}
            <section className="posts py-5 border-top border-secondary border-opacity-25 bg-black">
                <div className="container">
                    <div className="d-flex align-items-center justify-content-between">
                        <p className='text-white-50'>عرض <span className='text-white'>{filteredPosts.length}</span> مقالات {category == "الكل" ? "" : <> في <span className='text-prime fw-bold'>{category}</span></>}</p>
                        <div className="d-flex align-items-center gap-2">
                            <div className="menu-toggle">
                                <div className={`icon rounded-3 flex-center ${shape == "virtical" ? "active" : ""} `} onClick={() => { setShape("virtical") }} title='عرض شبكي'>
                                    <i className="fa-solid fa-border-all"></i>
                                </div>
                                <div className={`icon rounded-3 flex-center ${shape == "horizontal" ? "active" : ""} `} onClick={() => { setShape("horizontal") }} title='عرض قائمة'>
                                    <i className="fa-solid fa-bars"></i>
                                </div>
                            </div>
                            {category == "الكل" ? "" : <p className='m-0 text-white-50 transition-05 fs-12' onClick={() => setCategory("الكل")}><i className="fa-solid fa-xmark"></i> مسح الفلاتر</p>}
                        </div>
                    </div>
                    <div className={shape == "virtical" ? "row row-cols-md-2 row-cols-lg-3 g-4 mt-3" : "mt-3"}>
                        {currentItems.map((post) => {
                            return shape == "virtical" ? <VCard key={post.id} post={post} /> : <Hcard key={post.id} post={post} size={["col-lg-4", "col-lg-8"]} />
                        })}
                    </div>
                </div>
            </section>
            {/* End posts section */}

            {/* Start pagination */}
            <div className="pagination bg-black mx-auto d-flex flex-column align-items-center justify-content-center">
                <div className="d-flex justify-content-center align-items-center gap-2  bg-black">
                    <button
                        onClick={handlePrev}
                        disabled={currentPage === 1}
                        className={`px-2 py-1 rounded-2 ${currentPage === 1 ? "cursor-disapled disapled" : ""}`}
                    >
                        <i className="fa-solid fa-chevron-right"></i>
                    </button>

                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <button
                            key={page}
                            onClick={() => setCurrentPage(page)}
                            className={`px-3 py-1 rounded-2 ${currentPage === page ? "active" : "" }`}
                        >
                            {page}
                        </button>
                    ))}

                    <button
                        onClick={handleNext}
                        disabled={currentPage === totalPages}
                        className={`px-2 py-1 rounded-2 ${currentPage === totalPages ? "cursor-disapled disapled" : ""}`}
                    >
                        <i className="fa-solid fa-chevron-left"></i>
                    </button>
                </div>

                <div className="text-center py-2 text-white-50 bg-black">
                    صفحة {currentPage} من {totalPages}
                </div>
            </div>
            {/* End pagination */}
        </main>
    )
}
