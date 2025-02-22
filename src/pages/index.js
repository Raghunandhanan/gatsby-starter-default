import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import netlifyIdentity from 'netlify-identity-widget';

// Check if window is defined (so if in the browser or in node.js).
// const isBrowser = typeof window !== "undefined"
// if(isBrowser){
  if (netlifyIdentity) {
    netlifyIdentity.on("init", user => {
      if (!user) {
        netlifyIdentity.on("login", () => {
          document.location.href = "/admin/";
        });
      }
    });
  }
// }

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p>
  </Layout>
)

export default IndexPage
