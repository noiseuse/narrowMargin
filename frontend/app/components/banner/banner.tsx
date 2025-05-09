"use client";

import React from "react";
import styles from "./banner.module.css";

interface BannerProps {
  title: string;
}

const Banner: React.FC<BannerProps> = ({ title }) => {
  return (
    <div className={styles.banner}>
      <h1 className={styles.title}>{title}</h1>
    </div>
  );
};

export default Banner;
