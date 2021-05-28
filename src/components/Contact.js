import React from "react";
//image
import contactBackground from "../images/the-creative-exchange-d2zvqp3fpro-unsplash.jpg";
//logos
import { Icon } from "@iconify/react";
import googleGmail from "@iconify-icons/logos/google-gmail";
import instagramIcon from "@iconify-icons/logos/instagram-icon";
import youtubeIcon from "@iconify-icons/logos/youtube-icon";
import linkedinIcon from "@iconify-icons/logos/linkedin-icon";

export default function Contact() {
  return (
    <div>
      <header>
        <img
          src={contactBackground}
          alt="Contact Background"
          className="object-cover object-top w-screen h-96 md:h-144"
        />
      </header>
      <main>
        <section className="grid grid-cols-2 md:grid-cols-4 place-items-center py-5 md:py-10 gap-5">
          <a href="mailto:greenieng629@gmail.com">
            <Icon icon={googleGmail} className="iconStyle" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/greenie-ng-222831185?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B0MzvZBPdQoWtRmO75Z8QPA%3D%3D"
          >
            <Icon icon={linkedinIcon} className="iconStyle " />
          </a>
          <span className="mainTextFont text-primaryText">
            <Icon icon={instagramIcon} className="iconStyle " />
            Coming Soon
          </span>
          <span className="mainTextFont text-primaryText">
            <Icon icon={youtubeIcon} className="iconStyle " />
            Coming Soon
          </span>
        </section>
        <section>
          <h1 className="text-base md:text-xl my-7 mainTextFont text-primaryText text-center">
            Feel free to contact me for any job enquiry
          </h1>
        </section>
      </main>
    </div>
  );
}
