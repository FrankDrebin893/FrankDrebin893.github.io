/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
const Bio = () => {
  return (
     <div className="bio">
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        src="../images/profile-pic.png"
        width={50}
        height={50}
        quality={95}
        alt="Profile picture"
      />
      <p>
        Hi, I'm Rasmus. 
		
		This portfolio is mainly a recreational outlet that I return to once in a while.
		
        You can find me at{" "}
        <a href="https://www.linkedin.com/in/rasmus-h%C3%B8jte-4a2326110/">
          LinkedIn
        </a>
        and <a href="https://github.com/FrankDrebin893">Github</a>. I also post terrible sound bites to{" "}
        <a href="https://soundcloud.com/rasmus-valbro-h-jte">Soundcloud</a> and{" "}
        <a href="https://www.youtube.com/@Cruize91/videos">YouTube</a>
      </p>
    </div>
  )
}

export default Bio
