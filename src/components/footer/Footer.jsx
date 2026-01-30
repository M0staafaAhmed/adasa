import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router";

export default function Footer() {
    return (
        <footer className={styles.footerWrapper}>
            <div className="container">
                <div
                    className={`${styles.circle} position-absolute top-50 end-50 translate-middle`}
                ></div>
                <div
                    className={`${styles.circle} position-absolute top-50 start-25 translate-middle`}
                ></div>
                <div className="row gy-5 g-5 flex-row">
                    <div className="col-lg-3 col-md-6 text-end">
                        <div className="d-flex align-items-center justify-content-start gap-2 mb-4">
                            <div className={styles.logoBox}>ع</div>
                            <h5 className="m-0 text-white fw-bold">عدسة</h5>
                        </div>
                        <p className={styles.description}>
                            مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين
                            ونصائح عملية لتطوير مهاراتكم.
                        </p>
                        <div className="d-flex justify-content-start gap-3 mt-4">
                            <a href="#" className={styles.socialIcon}>
                                <i className="fa-brands fa-x-twitter"></i>
                            </a>
                            <a href="#" className={styles.socialIcon}>
                                <i className="fa-brands fa-github"></i>
                            </a>
                            <a href="#" className={styles.socialIcon}>
                                <i className="fa-brands fa-linkedin-in"></i>
                            </a>
                            <a href="#" className={styles.socialIcon}>
                                <i className="fa-brands fa-youtube"></i>
                            </a>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 text-end">
                        <h5 className={styles.footerTitle}>استكشف</h5>
                        <ul className="list-unstyled p-0 mt-4">
                            <li className="mb-2">
                                <Link to={"/"} className={styles.footerLink}>
                                    الرئيسية
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link to={"/blog"} className={styles.footerLink}>
                                    المدونة
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link to={"/about"} className={styles.footerLink}>
                                    من نحن
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-6 text-end">
                        <h5 className={styles.footerTitle}>التصنيفات</h5>
                        <ul className="list-unstyled p-0 mt-4">
                            <li className="mb-2">
                                <Link to={"/blog?category=إضاءة"} className={styles.footerLink}>
                                    إضاءة
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link to={"/blog?category=بورتريه"} className={styles.footerLink}>
                                    بورتريه
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link to={"/blog?category=مناظر طبيعية"} className={styles.footerLink}>
                                    مناظر طبيعية
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link to={"/blog?category=تقنيات"} className={styles.footerLink}>
                                    تقنيات
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-6 text-end">
                        <h5 className={styles.footerTitle}>ابق على اطلاع</h5>
                        <p className={styles.description + " mt-4"}>
                            اشترك للحصول على أحدث المقالات والتحديثات.
                        </p>
                        <form className="mt-4" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="أدخل بريدك الإلكتروني"
                                className={styles.footerInput}
                            />
                            <button type="submit" className={styles.footerBtn}>
                                اشترك
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <div className={styles.bottomBar}>
                <div className="container">
                    <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 flex-row">
                        <p className="m-0 text-white-50">
                            © 2026 عدسة. صنع بكل <span className="text-orange">🧡</span> جميع
                            الحقوق محفوظة.
                        </p>
                        <div className="d-flex gap-4">
                            <a href="#" className={styles.footerLink}>
                                شروط الخدمة
                            </a>
                            <a href="#" className={styles.footerLink}>
                                سياسة الخصوصية
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}