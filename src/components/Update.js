import React, { useState, useEffect } from "react";
import sanityClient from "../client";
//image
import updateBackground from "../images/leone-venter-VieM9BdZKFo-unsplash.jpg";

export default function Update() {
  const [postData, setPost] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
  title,
  date,
  description,
}`
      )
      .then((data) => setPost(data))
      .catch(console.error);
  }, []);
  return (
    <div>
      <header>
        <h1 className="absolute text-secondaryText titleFont inset-1/4 text-center tracking-wider text-4xl md:text-6xl">
          My Recent Updates
        </h1>
        <img
          src={updateBackground}
          alt="Updates Background"
          className="object-cover object-right-top w-screen h-96 md:h-144"
        />
      </header>
      <main>
        <article>
          {postData &&
            postData.map((post, index) => (
              <section className="bg-primaryBackground mx-5 my-10 px-5 py-8 md:mx-20 md:my-16 md:px-10 lg:mx-40 xl:mx-60 2xl:mx-96">
                <h1 className="titleFont text-secondaryText text-4xl tracking-wide mb-2">
                  {post.title}
                </h1>
                <h3 className="titleFont text-primaryText tracking-widest text-2xl mb-2">
                  {new Date(post.date).toLocaleDateString()}
                </h3>
                <p className="mainTextFont text-primaryText text-base bg-white px-5 py-5 md:px-8 md:py-8">
                  {post.description}
                </p>
              </section>
            ))}
        </article>
      </main>
    </div>
  );
}
