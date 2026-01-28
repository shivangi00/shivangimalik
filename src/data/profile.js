// src/data/profile.js
import myphoto from "../assets/IMG_7306.jpg";

export const PROFILE = {
  name: "Shivangi Malik",
  title: "Software Developer",
  location: "London, UK",
  photo: myphoto,
  cvUrl: "/ShivangiMalik.pdf", // put PDF in /public
  status: {
    label: "Available",
    type: "work",
  },
  socials: [
    {
      type: "email",
      href: "mailto:shi00codes@gmail.com",
      iconClass: "fa-sharp fa-solid fa-envelope",
    },
    {
      type: "portfolio",
      href: "https://your-portfolio-url.com",
      iconClass: "fa-solid fa-code",
    },
    {
      type: "github",
      href: "https://github.com/your-username",
      iconClass: "fa-brands fa-github",
    },
    {
      type: "linkedin",
      href: "https://www.linkedin.com/in/your-handle",
      iconClass: "fa-brands fa-square-linkedin",
    },
  ],
};
