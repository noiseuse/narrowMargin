import React from "react";
import IssueLayout from "../layout";

const Issue01 = () => {
  const images = [
    { src: "/images/filmmakers/moullet_issue.png", alt: "Luc Moullet" },
    { src: "/images/filmmakers/cottafavi_full.png", alt: "Vittorio Cottafavi" },
  ];

  const information = {
    editorial: "by Sam W.M.",
    writers: [
      "Julius Barzon",
      "Levi Butler",
      "Gabriel Carvalho",
      "Benjamin Crais",
      "Nick Delahaye",
      "Thomas Delahaye",
      "Matt Hare",
      "Devin Leong",
      "Joshua Parado",
      "Andrew Reidel",
      "Jack Seibert",
      "Sam W.M.",
      "John Winn",
    ],
    staff: ["First Last", "First Last", "First Last", "Lore Schwartz"],
    thanks: ["First Last", "First Last", "First Last", "First Last"],
  };

  return (
    <IssueLayout
      title="01 Summer 2025"
      images={images}
      information={information}>
      {/* Additional content for this issue */}
      <p>This is some additional content for Issue 01.</p>
    </IssueLayout>
  );
};

export default Issue01;
