import React from "react";
import styles from "./issue.module.css";
import Credits from "../components/credits/credits";

import { fetchIssueData } from "../api.js";

async function getIssueData(slug: string) {
  const issueData = await fetchIssueData(slug);
  return issueData;
}

export default async function IssuePage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const issue = await getIssueData(slug);

  return (
    <div>
      <div className={styles.banner}>
        {issue.banner_images.map(
          (image: { src: string; alt: string }, index: number) => (
            <div key={image.src} className={styles.bannerItem}>
              <img src={image.src} alt={image.alt} />
              {index === 0 ? (
                <div className={styles.filmmaker}>
                  <h1 className={styles.above}>{image.alt}</h1>
                </div>
              ) : (
                <div className={styles.filmmaker}>
                  <h1 className={styles.below}>{image.alt}</h1>
                </div>
              )}
            </div>
          )
        )}
      </div>

      <Credits
        editorial_by={issue.editorial}
        writers={issue.writers}
        staff={issue.staff}
        thanks={issue.thanks}></Credits>
    </div>
  );
}
