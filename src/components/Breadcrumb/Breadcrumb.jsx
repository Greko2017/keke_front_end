import React from "react";

const Breadcrumb = ({ links }) => {
  return (
    <nav aria-label="breadcrumb" className="breadcrumb-nav mb-3">
      <div className="container">
        <ol className="breadcrumb">
          {links.map((link, index) =>
            links.length - 1 !== index ? (
              <li key={Math.random()} className="breadcrumb-item">
                <a href={link.src}>{link.title}</a>
              </li>
            ) : (
              <li
                key={Math.random()}
                className="breadcrumb-item active"
                aria-current="page"
              >
                {link.title}
              </li>
            )
          )}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumb;
