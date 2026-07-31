import React, { useState } from 'react'
import './home.css'
import { Link } from 'react-router'
import Hcard from '../horizontal card/Hcard';
import CategoryCard from './../categoryCard/CategoryCard';
import VCard from '../verticalCard/VCard';

export default function Home({ name, posts, categories }) {

    let [featuredPosts, setFeaturedPosts] = useState(posts.filter(post => post.featured === true));

    return (
        <>
            <main className='pt-65'>
                {/* Start hero section */}
                <section id='hero' className="hero position-relative overflow-hidden bg-black">
                    <div className="circle position-absolute top-0 start-0 m-5"></div>
                    <div className="circle position-absolute top-50 start-50 translate-middle"></div>
                    <div className="circle position-absolute bottom-0 end-0 m-5"></div>
                    <div className="background position-absolute top-0 start-0 w-100 h-100"></div>
                    <div className="container text-center py-5 position-relative">
                        <div className="title d-flex justify-content-center align-items-center gap-2 py-2 px-3 rounded-pill mx-auto">
                            <div>
                                <i className="fa-solid fa-circle fs-8 m-1 fade-in text-prime"></i>
                                <i className="fa-solid fa-circle fs-10 text-prime soft-ping"></i>
                            </div>
                            <p className='m-0 fs-12 fw-bold'>مرحباً بك في {name}</p>
                        </div>
                        <h1 className='mt-5 fw-bolder fs-70 text-white'>اكتشف <span className='text-accent'>فن</span> <br /> التصوير الفوتوغرافي</h1>
                        <p className='text-secondary fs-4 my-3'>انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في <br className='d-none d-md-block' /> التصوير.</p>
                        <div className="d-flex align-items-center gap-2 justify-content-center mt-4">
                            <Link to={"/blog"} className='to-blog btn rounded-pill text-white py-3 px-4 fw-bold'>استكشف المقالات <i className="fa-solid fa-arrow-left transition-05"></i></Link>
                            <Link to={"/about"} className='to-about border border-secondary border-opacity-50 text-white btn rounded-pill py-3 px-4 fw-bold'><i className="fa-solid fa-info-circle"></i> اعرف المزيد</Link>
                        </div>
                        <div className="row row-cols-2 row-cols-md-4 mt-4 g-3">
                            <div className="col">
                                <div className="inner d-flex flex-column justify-content-center align-items-center p-4 rounded-3 bg-black transition-03 bg-opacity-75 border border-secondary border-opacity-25">
                                    <i className="fa-solid fa-newspaper text-prime fs-2"></i>
                                    <p className='text-accent fs-2 fw-bold m-0'>+50</p>
                                    <p className='text-white m-0 fw-bold'>مقالة</p>
                                </div>
                            </div>
                            <div className="col">
                                <div className="inner d-flex flex-column justify-content-center align-items-center p-4 rounded-3 bg-black transition-03 bg-opacity-75 border border-secondary border-opacity-25">
                                    <i className="fa-solid fa-users text-prime fs-2"></i>
                                    <p className='text-accent fs-2 fw-bold m-0'>+10ألف</p>
                                    <p className='text-white m-0 fw-bold'>قارئ</p>
                                </div>
                            </div>
                            <div className="col">
                                <div className="inner d-flex flex-column justify-content-center align-items-center p-4 rounded-3 bg-black transition-03 bg-opacity-75 border border-secondary border-opacity-25">
                                    <i className="fa-solid fa-folder-open text-prime fs-2"></i>
                                    <p className='text-accent fs-2 fw-bold m-0'>4</p>
                                    <p className='text-white m-0 fw-bold'>تصنيفات</p>
                                </div>
                            </div>
                            <div className="col">
                                <div className="inner d-flex flex-column justify-content-center align-items-center p-4 rounded-3 bg-black transition-03 bg-opacity-75 border border-secondary border-opacity-25">
                                    <i className="fa-solid fa-pen-nib text-prime fs-2"></i>
                                    <p className='text-accent fs-2 fw-bold m-0'>6</p>
                                    <p className='text-white m-0 fw-bold'>كاتب</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End hero section */}

                {/* Start featured section */}
                <section id='featured' className="featured bg-black">
                    <div className="container py-5">
                        <div className="title d-flex justify-content-center align-items-center gap-2 py-2 px-3 rounded-pill">
                            <div>
                                <i className="fa-solid fa-circle fs-8 m-1 fade-in text-prime"></i>
                                <i className="fa-solid fa-circle fs-10 text-prime soft-ping"></i>
                            </div>
                            <p className='m-0 fs-12 fw-bold text-prime'>مميز</p>
                        </div>
                        <h2 className='my-3 fs-60 text-white fw-bold'>مقالات مختارة</h2>
                        <div className="d-flex align-items-start align-items-md-center flex-column flex-md-row gap-3">
                            <p className='m-0 text-secondary fw-bold flex-grow-1'>محتوى منتقى لبدء رحلة تعلمك</p>
                            <Link to={"/blog"} className='to-blog btn rounded-3 text-white py-2 px-3 fw-bold'>عرض الكل <i className="fa-solid fa-chevron-left transition-03"></i></Link>
                        </div>
                        <div className="my-5">
                            {featuredPosts.map((post,) => {
                                return <Hcard key={post.id} post={post} size={["col-lg-6", "col-lg-6"]} />
                            })}
                        </div>
                    </div>
                </section>
                {/* End featured section */}

                {/* Start categories section */}
                <section id='categories' className="categories border-top border-bottom border-secondary border-opacity-25 py-5">
                    <div className="container text-center">
                        <div className="title d-flex justify-content-center align-items-center gap-2 py-2 px-3 rounded-pill mx-auto">
                            <div>
                                <i className="fa-solid fa-circle fs-8 m-1 fade-in text-prime"></i>
                                <i className="fa-solid fa-circle fs-10 text-prime soft-ping"></i>
                            </div>
                            <p className='m-0 fs-12 fw-bold'>التصنيفات</p>
                        </div>
                        <h2 className='fs-60 text-white fw-bold mt-4 mb-3'>استكشف حسب الموضوع</h2>
                        <p className="mb-4 text-white text-opacity-50">اعثر على محتوى مصمم حسب اهتماماتك</p>
                        <div className="row row-cols-2 row-cols-md-4 g-4">
                            {categories?.map((category) => {
                                return <CategoryCard key={category.name} category={category} />
                            })}
                        </div>
                    </div>
                </section>
                {/* End categories section */}

                {/* Start latest */}
                <section id='latest' className="latest bg-black py-5">
                    <div className="container">
                        <div className="title d-flex justify-content-center align-items-center gap-2 py-2 px-3 rounded-pill">
                            <div>
                                <i className="fa-solid fa-circle fs-8 m-1 fade-in text-prime"></i>
                                <i className="fa-solid fa-circle fs-10 text-prime soft-ping"></i>
                            </div>
                            <p className='m-0 fs-12 fw-bold text-prime'>الاحدث</p>
                        </div>
                        <h2 className="fs-60 my-3 fw-bold text-white">أحدث المقالات</h2>
                        <div className="d-flex align-items-start align-items-md-center flex-column flex-md-row gap-3">
                            <p className='m-0 text-secondary fw-bold flex-grow-1'>محتوى جديد طازج من المطبعة</p>
                            <Link to={"/blog"} className='text-decoration-none to-blog-latest transition-05  rounded-3 text-prime py-2 px-3 fw-bold'>عرض جميع المقالات <i className="fa-solid fa-arrow-left transition-03"></i></Link>
                        </div>
                        <div className="row row-cols-md-2 row-cols-lg-3 g-4 mt-3">
                            {posts.slice(-3).map((post)=>{
                                return <VCard key={post.id} post={post}/>
                            })}
                        </div>
                    </div>
                </section>
                {/* End latest */}

                {/* Start subscribe */}
                <section id="sunscribe" className="subscribe bg-black">
                    <div className="container py-5 position-relative overflow-hidden">
                        <div className="circle position-absolute top-0 start-50 translate-middle-x"></div>
                        <div className="d-flex align-items-center justify-content-center">
                            <div className="form rounded-3 p-4 text-center border-secondary border border-opacity-25 position-relative">
                                <div className="icon flex-center rounded-3 mx-auto mb-3">
                                    <i className="fa-solid fa-envelope text-white fs-5"></i>
                                </div>
                                <h2 className="fs-1 text-white fw-bold">اشترك في <span className='text-accent'>نشرتنا الاخبارية</span></h2>
                                <p className='text-white-50 fs-5-5 fw-light'>احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك الإلكتروني</p>
                                <div className="d-flex align-items-center flex-wrap flex-sm-nowrap gap-2 mt-3">
                                    <input type="text" className="form-control bg-black text-white py-2" placeholder='أدخل بريدك الإلكتروني'/>
                                    <button className='btn py-2 px-3 text-white transition-05 flex-grow-1 fw-bold'> اشترك الأن</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End subscribe */}
            </main>
        </>
    )
}
