import twitter from "@public/icons/twitter.svg";
import ig from "@public/icons/ig.svg";
import fb from "@public/icons/fb.svg";
import linkedin from "@public/icons/linkedin.svg";
import { CtaLinks, SocialLinks, MenuItem } from "@/types";

export const socialLinks: SocialLinks[] = [
  {
    icon: twitter,
    link: "https://x.com/gdgilorin",
  },
  {
    icon: ig,
    link: "https://instagram.com/gdgilorin",
  },
  {
    icon: fb,
    link: "https://www.facebook.com/gdgilorin",
  },
  {
    icon: linkedin,
    link: "https://www.linkedin.com/company/gdg-ilorin",
  },
];

export const menuLinks: MenuItem[] = [
  {
    title: "Get DP",
    path: "/get-dp",
  },
  {
    title: "Speakers",
    path: "/speakers",
  },
  {
    title: "Schedule",
    path: "/schedule",
  },
  {
    title: "Sponsors",
    path: "/sponsors",
  },
  {
    title: "Team",
    path: "/team",
  },
];

export const newMenuLinks: MenuItem[] = [
  {
    title: "Photos",
    path: "https://photos.app.goo.gl/Zua4uwAEqKVFiX6y8",
    isExternal: true,
  },
  {
    title: "Videos",
    path: "/videos",
    isExternal: true,
  },
  {
    title: "Join community for 2025",
    path: "https://gdg.community.dev/gdg-ilorin/",
    isExternal: true,
  },
];

export const ctaLinks: Record<string, CtaLinks> = {
  workshop: {
    title: "Workshop",
    link: "https://lu.ma/1qw8z31s",
    isExternal: true,
  },
  register: {
    title: "R⁠egister",
    link: "https://bit.ly/devfestilorin24",
    isExternal: true,
  },
  speak: {
    title: "⁠Apply to Speak",
    link: "https://forms.gle/d7YcttdJsfGEzmTZ6",
    isExternal: true,
  },
  sponsor: {
    title: "⁠Sponsor Us",
    link: "mailto:gdgilorincmty@gmail.com",
    isExternal: true,
  },
  partner: {
    title: "⁠⁠Partner with Us",
    link: "mailto:gdgilorincmty@gmail.com",
    isExternal: true,
  },
  ticket: {
    title: "⁠Buy Ticket",
    link: "https://tix.africa/devfest-ilorin-2024-day-2",
    isExternal: true,
  },
  photosOne: {
    title: "Photo for Day one",
    link: "https://photos.app.goo.gl/unNrm6CrpUpqpJCk7",
    isExternal: true,
  },
  photosTwo: {
    title: "Photo for Day two",
    link: "https://photos.app.goo.gl/FTAsGcq3AzuyczMFA",
    isExternal: true,
  },
  photosThree: {
    title: "Photo for Day three",
    link: "https://photos.app.goo.gl/Zua4uwAEqKVFiX6y8",
    isExternal: true,
  },
};
