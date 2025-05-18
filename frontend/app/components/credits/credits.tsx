"use client";

import React from "react";
import Link from "next/link";
import styles from "./banner.module.css";

interface CreditProps {
  editorial_by: string;
  writers: string[];
  staff: string[];
  thanks: string[];
}

const Credits: React.FC<CreditProps> = ({
  editorial_by,
  writers,
  staff,
  thanks,
}) => {
  return (
    <div className={styles.credits}>
      <div className={styles.creditItem}>
        <h3>issue editorial</h3>
        <p>{editorial_by}</p>
      </div>

      <div className={styles.creditItem}>
        <h3>contributing writers</h3>
        <ul>
          {writers.map((writer: string) => (
            <li key={writer}>{writer}</li>
          ))}
        </ul>
      </div>

      <div className={styles.creditItem}>
        <h3>contributing staff</h3>
        <ul>
          {staff.map((staff: string) => (
            <li key={staff}>{staff}</li>
          ))}
        </ul>
      </div>

      <div className={styles.creditItem}>
        <h3>special thanks</h3>
        <ul>
          {thanks.map((thanks: string) => (
            <li key={thanks}>{thanks}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Credits;
