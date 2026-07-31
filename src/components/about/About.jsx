import { Link } from "react-router";
import "./about.css";

const values = [
    {
        icon: "fa-solid fa-camera-retro",
        title: "مساحة للصورة قبل أي حاجة",
        text: "بنؤمن إن كل صورة ليها حكاية، فبنركز إن العرض نفسه يخلي الصورة هي البطلة من غير أي تشتيت.",
    },
    {
        icon: "fa-solid fa-pen-nib",
        title: "محتوى مكتوب بعناية",
        text: "مش بس معرض صور — عندنا مقالات عن تقنيات التصوير، مراجعات معدات، ونصائح من مصورين بخبرات مختلفة.",
    },
    {
        icon: "fa-solid fa-people-group",
        title: "مجتمع مش منصة بس",
        text: "المصورين المبتدئين والمحترفين بيتقابلوا هنا، يتبادلوا آراء، ويتعلموا من شغل بعض.",
    },
];

export default function About() {
    return (
        <div className="about-page pt-65 bg-black text-white">
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
                        <p className='m-0 fs-12 fw-bold'>من نحن</p>
                    </div>
                    <h1 className='mt-5 fw-bolder fs-70 text-white'>بنحكي قصص الصور، مش بس بننشرها</h1>
                    <div className="d-flex align-items-center gap-2 justify-content-center mt-4">
                        <Link to={"/blog"} className='to-blog btn rounded-pill text-white py-3 px-4 fw-bold'>استكشف المقالات <i className="fa-solid fa-arrow-left transition-05"></i></Link>
                        <Link to={"/about"} className='to-about border border-secondary border-opacity-50 text-white btn rounded-pill py-3 px-4 fw-bold'><i className="fa-solid fa-info-circle"></i> اعرف المزيد</Link>
                    </div>
                    <div className="row row-cols-2 row-cols-md-3 mt-4 g-3">
                        <div className="col">
                            <div className="inner d-flex flex-column justify-content-center align-items-center p-4 rounded-3 bg-black transition-03 bg-opacity-75 border border-secondary border-opacity-25">
                                <i className="fa-solid fa-image text-prime fs-2"></i>
                                <p className='text-accent fs-2 fw-bold m-0'>500+</p>
                                <p className='text-white m-0 fw-bold'>صورة منشورة</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="inner d-flex flex-column justify-content-center align-items-center p-4 rounded-3 bg-black transition-03 bg-opacity-75 border border-secondary border-opacity-25">
                                <i className="fa-solid fa-newspaper text-prime fs-2"></i>
                                <p className='text-accent fs-2 fw-bold m-0'>+80</p>
                                <p className='text-white m-0 fw-bold'>مقال عن التصوير</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="inner d-flex flex-column justify-content-center align-items-center p-4 rounded-3 bg-black transition-03 bg-opacity-75 border border-secondary border-opacity-25">
                                <i className="fa-solid fa-camera text-prime fs-2"></i>
                                <p className='text-accent fs-2 fw-bold m-0'>1,200+</p>
                                <p className='text-white m-0 fw-bold'>مصوّر بيزور المنصة</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End hero section */}

            {/* Story */}
            <section className="container py-5">
                <div className="row align-items-center g-5">
                    {/* بديل الـ img - بطاقة بصرية بتصميم "عدسة" متوهجة بدل صورة عادية */}
                    <div className="col-12 col-lg-6">
                        <div className="about-lens-card rounded-4 shadow-sm">
                            <div className="about-lens-glow" />

                            <div className="about-lens-ring">
                                <div className="about-lens-ring about-lens-ring-2">
                                    <div className="about-lens-core">
                                        <i className="fa-solid fa-camera-retro"></i>
                                    </div>
                                </div>
                            </div>

                            <div className="about-lens-caption">
                                <span className="about-lens-quote-mark">"</span>
                                <p className="mb-0">كل صورة بتحكي حكاية محتاجة حد يسمعها</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6">
                        <span className="d-inline-block text-prime fw-bold fs-12 mb-2">// القصة</span>
                        <h2 className="fw-bolder mb-3 text-white">إزاي بدأت الفكرة؟</h2>
                        <p className="text-secondary">
                            بدأنا "عدسة" كمكان بسيط لمشاركة الصور اللي بنلتقطها في
                            رحلاتنا اليومية، وبعدين حسّينا إن فيه حاجة ناقصة: مكان يجمع
                            الصورة مع الكلام اللي وراها — إزاي اتصورت، وإيه الفكرة، وإيه
                            اللي المصور حاول يوصّله.
                        </p>
                        <p className="text-secondary mb-0">
                            دلوقتي "عدسة" بقت منصة بينشر عليها مصورين من كل المستويات
                            صورهم ومقالاتهم، وبتفضل شغالة بنفس الفكرة البسيطة اللي
                            بدأت بيها: كل صورة تستاهل تتحكى صح.
                        </p>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-5 position-relative overflow-hidden">
                <div className="container position-relative">
                    <div className="text-center mb-5">
                        <span className="d-inline-block text-prime fw-bold fs-12 mb-2">// إيه اللي بيميزنا</span>
                        <h2 className="fw-bolder text-white">إحنا بنقدّم إيه</h2>
                        <p className="text-secondary">القيم اللي بنبني عليها كل حاجة في عدسة</p>
                    </div>
                    <div className="row g-4">
                        {values.map((value) => (
                            <div className="col-12 col-md-4" key={value.title}>
                                <div className="about-value-card h-100 p-4 text-center rounded-3">
                                    <div className="about-value-icon mx-auto mb-3">
                                        <i className={value.icon}></i>
                                    </div>
                                    <h5 className="fw-bold mb-2 text-white">{value.title}</h5>
                                    <p className="text-secondary mb-0">{value.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="container py-5">
                <div className="about-cta rounded-4 text-center p-5 position-relative overflow-hidden">
                    <h2 className="fw-bolder mb-3 text-white">عايز تشارك صورك أو تقرأ أحدث المقالات؟</h2>
                    <p className="text-secondary col-lg-7 mx-auto mb-4">
                        استكشف المعرض والمدونة، أو ابعتلنا صورك وقصتك وممكن نعرضها للزوار
                        كلهم.
                    </p>
                    <div className="d-flex justify-content-center gap-3 flex-wrap">
                        <Link to="/blog" className="to-blog btn rounded-pill text-white py-3 px-4 fw-bold">
                            اقرأ المدونة <i className="fa-solid fa-arrow-left transition-05"></i>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}