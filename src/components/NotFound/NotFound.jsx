import React from 'react';
import styles from './NotFound.module.css';
import { Link } from 'react-router';

export default function NotFound() {
  return (
    <div className={styles.notFoundContainer}>
      <div className={styles.content}>
        <h1 className={styles.errorCode}>404</h1>

        <div className={styles.errorIcon}>
          <i className="fa-regular fa-face-frown"></i>
        </div>

        <h2 className={styles.errorTitle}>عفواً! الصفحة غير موجودة</h2>
        <p className={styles.errorText}>
          الصفحة التي تبحث عنها غير موجودة أو تم نقلها. دعنا نعيدك إلى المسار الصحيح.
        </p>

        <div className={styles.actions}>
          <Link to="/" className={styles.homeBtn}>
            الذهاب للرئيسية <i className="fa-solid fa-house"></i>
          </Link>
          <Link to="/blog" className={styles.blogBtn}>
            تصفح المقالات <i className="fa-solid fa-rectangle-list"></i>
          </Link>
        </div>

        <div className={styles.footerLinks}>
          <p>قد تجد هذه مفيدة:</p>
          <div className={styles.linksRow}>
            <Link to="/privacy">الخصوصية</Link>
            <span>•</span>
            <Link to="/about">من نحن</Link>
            <span>•</span>
            <Link to="/blog">المدونة</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

