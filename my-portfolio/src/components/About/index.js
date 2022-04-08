import React from 'react';
import coverImage from "../../assets/cover/about-me.JPG"

function About() {
    return (
        <section className="my-5 aboutsec">
        <h1 className="about">About Me</h1>
          <img src={coverImage} alt="cover"/>

          <p>I'm a recording engineer and a learning web developer. I'm currently a recording engineer for TikTok, recording artists for company projects. My DAW of choice is Pro Tools, Ableton, and Logic Pro. I've also had experience with Cubase and Nuendo. As for web developing, I'm learning HTML, css, JavaScript, while using database and backend to build up websites.</p>
        </section>
      );
}

export default About;