import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import DarkModeToggle from "./DarkModeToggle";

export default function PageNav() {
  const {
    site: {
      siteMetadata: { name }
    }
  } = useStaticQuery(
    graphql`
      query PageNav {
        site {
          siteMetadata {
            name
          }
        }
      }
    `
  );
  return (
    <nav>
      <Link to="/" className="nav-link">
        {name}
      </Link>
      <DarkModeToggle />
    </nav>
  );
}
