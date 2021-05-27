import React from "react";

//images
import homeBackground from "../images/bench-accounting-nvzvOPQW0gc-unsplash.jpg";
import capScreen from "../images/Screenshot_2021-05-27 freeCodeCamp org.png";
//icons
import { Icon, InlineIcon } from "@iconify/react";
import githubIcon from "@iconify-icons/logos/github-icon";
import codesandboxIcon from "@iconify-icons/logos/codesandbox";
import linkedinIcon from "@iconify-icons/logos/linkedin-icon";

export default function Home() {
  return (
    <div>
      <header className="relative">
        <h1 className="absolute text-secondaryText titleFont inset-1/4 text-center tracking-wider text-4xl md:text-6xl">
          Hey! Welcome to my website
        </h1>
        <img
          src={homeBackground}
          alt="Home Background"
          className="object-cover object-bottom w-screen h-96 md:h-144"
        />
      </header>
      <main className="flex flex-col px-10 py-6 md:px-40 md:py-12">
        <section>
          <h1 className="text-4xl md:text-6xl mb-6 md:mb-12 normalFont font-extrabold text-secondaryText ">
            Greenie Ng
          </h1>
          <h3 className="text-2xl md:text-3xl text-primaryText profileFont">
            Junior Web Developer
          </h3>
          <h4 className="text-base md:text-xl text-primaryText profileFont">
            Bachelor of Science from the Chinese University of Hong Kong
          </h4>
        </section>
        <section className="bg-primaryBackground my-6 px-6 py-6 md:px-14 md:py-14 md:my-12">
          <p className="text-base md:text-xl text-primaryText mainTextFont ">
            I graduated from the Chinese University in 2020. While persuing my
            MPhil study in evolutionary biology, I have started learning web
            development as my side career. Within 5 months, I’ve mastered
            courses about front end design and languages. I have built projects
            to showcase my ability which you may refer to at My Projects. I am
            available for any freelancing job. You may contact me by referring
            to any methods shown here.
          </p>
        </section>
        <section className="lg:grid lg:grid-cols-3 lg:mb-12">
          <div className="lg:col-span-2 text-primaryText profileFont">
            <h1 className="text-secondaryText text-3xl mb-2 md:text-5xl md:mb-5">
              freeCodeCamp
            </h1>
            <a
              className="linkFont text-base md:text-xl"
              href="https://www.freecodecamp.org/greenie"
            >
              Go to my freeCodeCamp profile
            </a>
            <div className="text-lg mt-2 md:mt-5 md:text-2xl">
              <h2>2/2021 Responsive Web Design</h2>
              <h2>3/2021 JavaScript Algorithms and Data Structures</h2>
              <h2>5/2021 Front End Libraries</h2>
            </div>
          </div>
          <img
            className="my-5 lg:my-0"
            src={capScreen}
            alt="freeCodeCamp profile"
          />
        </section>
        <section className="grid grid-cols-2 place-items-center">
          <p className="col-span-2 text-primaryText mainTextFont text-center my-2 md:my-5 text-base md:text-xl">
            Some of my projects are uploaded to codesandbox and github Click on
            them to see more:
          </p>
          <a href="https://github.com/ggrreenn" target="_blank">
            <Icon icon={githubIcon} className="iconStyle" />
          </a>
          <a href="https://codesandbox.io/u/greenie629">
            <Icon icon={codesandboxIcon} className="iconStyle" />
          </a>
          <p className="col-span-2 text-primaryText mainTextFont text-center my-2 md:my-5 text-base md:text-xl">
            You may know more about me at my linkedin profile
          </p>
          <a
            className="col-span-2"
            href="https://www.linkedin.com/in/greenie-ng-222831185?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B0MzvZBPdQoWtRmO75Z8QPA%3D%3D"
          >
            <Icon icon={linkedinIcon} className="iconStyle " />
          </a>
        </section>
      </main>
    </div>
  );
}
