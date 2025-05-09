"use client";

import React from "react";
import Banner from "../components/banner/banner";
import styles from "./issues.module.css";

interface IssueLayoutProps {
  title: string; // Title for the banner
  images: { src: string; alt: string }[]; // Array of images for the image bar
  information: {
    editorial: string;
    writers: string[];
    staff: string[];
    thanks: string[];
  }; // Information for the bottom section
  children?: React.ReactNode; // Additional content for the issue page
}

const IssueLayout: React.FC<IssueLayoutProps> = ({
  title,
  images = [
    { src: "/images/filmmakers/moullet_issue.png", alt: "Luc Moullet" },
    { src: "/images/filmmakers/cottafavi_full.png", alt: "Vittorio Cottafavi" },
  ],
  information,
  children,
}) => {
  return (
    <div className={styles.issueLayout}>
      {/* Banner */}
      <Banner title={title} link="/" />

      {/* Image Bar */}
      <div className={styles.imageBar}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className={styles.image}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className={styles.content}>{children}</div>

      {/* Information Section */}
      <div className={styles.information}>
        <div>
          <h3>Issue Editorial</h3>
          <p>by {information.editorial}</p>
        </div>
        <div>
          <h3>Contributing Writers</h3>
          <ul>
            {information.writers.map((writer, index) => (
              <li key={index}>{writer}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Contributing Staff</h3>
          <ul>
            {information.staff.map((staff, index) => (
              <li key={index}>{staff}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Special Thanks</h3>
          <ul>
            {information.thanks.map((thanks, index) => (
              <li key={index}>{thanks}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default IssueLayout;
