import React from "react";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";

export default function FourOhFour() {
  return (
    <main>
      <Helmet>
        <title>404 Page Not Found</title>
      </Helmet>
      <section>
        <h1>Whoa there</h1>
        <h2>Bad news</h2>
        <h3>This ain&apos;t lookin&apos; too hot</h3>
        <h4>Whoops</h4>
        <p style={{ fontSize: "28px" }}>
          <span>Go </span>
          <Link to="/">home</Link>
        </p>
        <p>
          With love,
          <br />
          404
        </p>
        <pre>
          <code>ERROR: PAGE DEFINITELY NOT FOUND</code>
        </pre>
      </section>
    </main>
  );
}
