import React from "react";

export const renderDescriptionWithLink = (desc, linkText, linkHref) => {
  const parts = desc.split("{NegomboLink}");
  return (
    <>
      {parts.map((part, index, array) => (
        <React.Fragment key={index}>
          {part}
          {index < array.length - 1 && (
            <a
              href={linkHref}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "underline" }}
            >
              {linkText}
            </a>
          )}
        </React.Fragment>
      ))}
    </>
  );
};
