"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./home.module.css";
import Banner from "./components/banner/banner";

export default function HomePage() {
  const starterContent = (
    <Link href="/01" passHref>
      <div className={styles.route}>
        <h4 className={styles.routeNum}>01 &nbsp; &nbsp;</h4>
        <h4 className={styles.routeTitle}>August, &nbsp;2025</h4>
      </div>
    </Link>
  );

  const [routesContent, setRoutesContent] = useState(starterContent);

  useEffect(() => {
    const navigationHeader = document.querySelector(
      `.${styles.header}`
    ) as HTMLElement;
    const downArrow = document.querySelector(
      `.${styles.downArrow}`
    ) as HTMLElement;
    let routes = document.querySelector(`.${styles.routes}`) as HTMLElement;

    setTimeout(() => {
      downArrow.style.opacity = "1";
      downArrow.style.transition = "opacity 1.5s ease-in-out";
    }, 3000);

    const updateContentOnScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 0) {
        navigationHeader.classList.add(styles.fadeOut);
        routes.classList.add(styles.slideOut);
        downArrow.style.transition = "opacity 0.4s ease-in-out";
        downArrow.style.opacity = "0";

        setTimeout(() => {
          navigationHeader.textContent = "site index";
          setRoutesContent(
            <div className={styles.aboutNav}>
              <div className={styles.route}>
                <h4 className={styles.routeNum}>01 &nbsp; &nbsp;</h4>
                <h4 className={styles.routeTitle}>
                  On &nbsp;Narrow &nbsp;Margin
                </h4>
              </div>
              <Link href="/contact" passHref>
                <div className={styles.route}>
                  <h4 className={styles.routeNum}>02 &nbsp; &nbsp;</h4>
                  <h4 className={styles.routeTitle}>Contact</h4>
                </div>
              </Link>
              <Link href="/about" passHref>
                <div className={styles.route}>
                  <h4 className={styles.routeNum}>03 &nbsp; &nbsp;</h4>
                  <h4 className={styles.routeTitle}>
                    Donations &nbsp;& &nbsp;Subscriptions
                  </h4>
                </div>
              </Link>
              <div className={styles.route}>
                <h4 className={styles.routeNum}>04 &nbsp; &nbsp;</h4>
                <h4 className={styles.routeTitle}>Contributors</h4>
              </div>
              <div className={styles.route}>
                <h4 className={styles.routeNum}>05 &nbsp; &nbsp;</h4>
                <h4 className={styles.routeTitle}>Latest&nbsp; Pieces</h4>
              </div>
            </div>
          );

          routes = document.querySelector(`.${styles.routes}`)!;
          navigationHeader.classList.remove(styles.fadeOut);
          navigationHeader.classList.add(styles.fadeIn);
          routes.classList.remove(styles.slideOut);
          routes.classList.add(styles.slideIn);

          setTimeout(() => {
            navigationHeader.classList.remove(styles.fadeIn);
            routes.classList.remove(styles.slideIn);
          }, 600);
        }, 600);
      } else {
        navigationHeader.classList.add(styles.fadeOut);
        routes.classList.add(styles.slideOut);
        downArrow.style.transition = "opacity 0.6s ease-in-out";
        downArrow.style.opacity = "1";

        setTimeout(() => {
          navigationHeader.textContent = "quarterly issues";
          setRoutesContent(
            <Link href="/01" passHref>
              <div className={styles.route}>
                <h4 className={styles.routeNum}>01 &nbsp; &nbsp;</h4>
                <h4 className={styles.routeTitle}>August, &nbsp;2025</h4>
              </div>
            </Link>
          );

          routes = document.querySelector(`.${styles.routes}`)!;
          navigationHeader.classList.remove(styles.fadeOut);
          navigationHeader.classList.add(styles.fadeIn);
          routes.classList.remove(styles.slideOut);
          routes.classList.add(styles.slideIn);

          setTimeout(() => {
            navigationHeader.classList.remove(styles.fadeIn);
            downArrow.classList.add(styles.fadeIn);
            routes.classList.remove(styles.slideIn);
          }, 600);
        }, 600);
      }
    };

    window.addEventListener("scroll", updateContentOnScroll);

    return () => {
      window.removeEventListener("scroll", updateContentOnScroll);
    };
  }, []);

  return (
    <div>
      <Banner title="Narrow Margin"></Banner>
      <div className={styles.navigation}>
        <h3 className={styles.header}>quarterly issues</h3>
        <div className={styles.routes}>{routesContent}</div>
      </div>
      <div className={styles.downArrow}></div>
      {/* Filler content so the scroll behavior activates */}
      <div style={{ height: "920px" }}></div>
    </div>
  );
}
