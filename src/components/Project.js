import React, { useState, useEffect } from "react";
import sanityClient from "../client";

//image
import projectBackground from "../images/samantha-gades-BlIhVfXbi9s-unsplash.jpg";
//logos
import { Icon } from "@iconify/react";
import html5 from "@iconify-icons/logos/html-5";
import css3 from "@iconify-icons/logos/css-3";
import reactIcon from "@iconify-icons/logos/react";
import figmaIcon from "@iconify-icons/logos/figma";
import nodejsIcon from "@iconify-icons/logos/nodejs";
import sanityIcon from "@iconify-icons/logos/sanity";
import bootstrapIcon from "@iconify-icons/logos/bootstrap";
import tailwindcssIcon from "@iconify-icons/logos/tailwindcss";

export default function Project() {
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project"]{
    title,
    date,
    place,
    description,
    projectType,
    link,
    tags
  }`
      )
      .then((data) => setProjectData(data))
      .catch(console.error);
  }, []);

  return (
    <div>
      <header className="relative">
        <h1 className="absolute text-secondaryText titleFont left-5 bottom-3 text-center tracking-wider text-2xl md:text-5xl">
          Previous and current projects
        </h1>
        <img
          src={projectBackground}
          alt="Project Background"
          className="object-cover object-right-bottom w-screen h-96 md:h-144"
        />
      </header>
      <main>
        <section className="grid grid-cols-2 place-items-center my-5 md:my-8 lg:grid-cols-4 xl:gap-5 xl:mx-72 xl:my-36">
          <Icon icon={html5} className="iconStyle lg:text-9xl" />
          <Icon icon={css3} className="iconStyle lg:text-9xl" />
          <Icon icon={reactIcon} className="text-5xl my-5 lg:text-7xl" />
          <Icon icon={figmaIcon} className="iconStyle lg:text-9xl" />
          <Icon icon={nodejsIcon} className="text-4xl my-5 lg:text-7xl" />
          <Icon icon={bootstrapIcon} className="text-4xl my-5 lg:text-7xl" />
          <Icon icon={sanityIcon} className="my-5 lg:text-2xl" />
          <Icon icon={tailwindcssIcon} className="my-5 lg:text-2xl" />
        </section>
        <article>
          {projectData &&
            projectData.map((project, index) => (
              <section>
                <a
                  href={project.link}
                  alt={project.title}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="titleFont text-secondaryText mx-5 text-3xl md:mx-28 md:text-4xl lg:mx-40 xl:mx-96 xl:text-5xl"
                >
                  {project.title}
                </a>
                <span className="flex flex-row justify-between mx-5 md:mx-28 lg:mx-40 xl:mx-96 xl:mt-3">
                  <h3 className="titleFont text-primaryText tracking-wider text-base md:text-xl xl:text-2xl">
                    Finished on {new Date(project.date).toLocaleDateString()}
                  </h3>
                  <h3 className="titleFont text-primaryText tracking-wider text-base md:text-xl ">
                    Type: {project.projectType}
                  </h3>
                </span>
                <div className="bg-primaryBackground mx-5 mb-10 px-5 py-8 md:mx-28 lg:mx-40 xl:mx-96 xl:px-14 xl:py-10">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="linkFont text-secondaryText text-xl md:text-2xl xl:text-4xl"
                  >
                    Click here to the project
                  </a>
                  <p className="mainTextFont text-primaryText mt-5 text-sm md:text-base xl:text-xl">
                    {project.description}
                  </p>
                  <div className="flex flex-row justify-start gap-5 mt-5">
                    {project.tags.map((tag) => (
                      <h1
                        key={tag}
                        className="text-primaryText mainTextFont text-xs md:text-sm xl:text-base"
                      >
                        #{tag}
                      </h1>
                    ))}
                  </div>
                </div>
              </section>
            ))}
        </article>
      </main>
    </div>
  );
}
