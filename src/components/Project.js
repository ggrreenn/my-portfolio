import React, { useState, useEffect } from "react";
import sanityClient from "../client";

//image
import projectBackground from "../images/samantha-gades-BlIhVfXbi9s-unsplash.jpg";
//logos
import { Icon, InlineIcon } from "@iconify/react";
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
        <section className="grid grid-cols-2 place-items-center my-5">
          <Icon icon={html5} className="iconStyle" />
          <Icon icon={css3} className="iconStyle " />
          <Icon icon={reactIcon} className="text-5xl my-5" />
          <Icon icon={figmaIcon} className="iconStyle " />
          <Icon icon={nodejsIcon} className="text-4xl my-5" />
          <Icon icon={bootstrapIcon} className="text-4xl my-5" />
          <Icon icon={sanityIcon} className="my-5" />
          <Icon icon={tailwindcssIcon} className="my-5" />
        </section>
        <article>
          {projectData &&
            projectData.map((project, index) => (
              <section>
                <a
                  href={project.link}
                  alt={project.title}
                  target="_blank"
                  className="titleFont text-secondaryText mx-5 text-3xl"
                >
                  {project.title}
                </a>
                <span className="flex flex-row justify-between mx-5">
                  <h3 className="titleFont text-primaryText tracking-wider text-base">
                    Finished on {new Date(project.date).toLocaleDateString()}
                  </h3>
                  <h3 className="titleFont text-primaryText tracking-wider text-base">
                    Type: {project.projectType}
                  </h3>
                </span>
                <div className="bg-primaryBackground mx-5 mb-10 px-5 py-8">
                  <a
                    href={project.link}
                    target="_blank"
                    className="linkFont text-secondaryText text-xl"
                  >
                    Click here to the project
                  </a>
                  <p className="mainTextFont text-primaryText mt-5 text-sm">
                    {project.description}
                  </p>
                  <div className="flex flex-row justify-start gap-5 mt-5">
                    {project.tags.map((tag) => (
                      <h1 className="text-primaryText mainTextFont text-xs">
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
