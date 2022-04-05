import React from 'react'

const altImage = "https://via.placeholder.com/215"

function About({ image = altImage, about }) {
  return (
    <>
        <aside>
            <img href={image} alt="blog logo"></img>
            <p>{about}</p>
        </aside>
    </>
  )
}

export default About