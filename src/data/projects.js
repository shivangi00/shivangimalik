// src/data/projects.js
import saludThumb from "../assets/salud-thumb.jpg";
import gameThumb from "../assets/game-thumb.jpg";
import widgetThumb from "../assets/game-thumb.jpg";

export const PROJECTS = [
  {
    slug: "turn-based-game",
    title: "Turn Based Console Game",
    tech: "Java, DSA, Advanced OOPs",
    description:
      "A turn-based console game focused on clean OOP design, strategy mechanics, and testable game logic.",
    image: gameThumb,
    demoUrl: "http://example.com/game",
  },
  {
    slug: "salud",
    title: "Salud Wellness App",
    tech: "JavaScript, HTML, CSS",
    description:
      "A wellness web app for tracking habits and routines, inspired by spreadsheet-style dashboards.",
    image: saludThumb,
    demoUrl: "http://example.com/salud",
  },
  {
    slug: "world-widget",
    title: "World Widget",
    tech: "Electron, JavaScript",
    description:
      "A desktop widget that shows world time zones and quick info at a glance.",
    image: widgetThumb,
    demoUrl: "http://example.com/world-widget",
  },
];
