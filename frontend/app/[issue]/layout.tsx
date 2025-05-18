import React from "react";
import styles from "./issue.module.css";
import Banner from "../components/banner/banner";

export default function IssueLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Banner title="01 &nbsp;Summer 2025" link="/"></Banner>

      <body>{children}</body>

      <footer className={styles.footer}>
        <p>© 2025 Narrow Margin. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
