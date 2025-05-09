"use client";

import React from "react";
import Link from "next/link";
import styles from "./banner.module.css";

interface BannerProps {
  title: string;
  link: string;
}

const Banner: React.FC<BannerProps> = ({ title, link }) => {
  return (
    <Link href={link} passHref>
      <div className={styles.banner}>
        <h1 className={styles.title}>{title}</h1>
      </div>
    </Link>
  );
};

export default Banner;
