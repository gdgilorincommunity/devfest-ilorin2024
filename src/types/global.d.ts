export interface CtaLinks {
  title: string;
  link: string;
  isExternal: boolean;
}

export type MenuItem = {
  title: string;
  path: string;
  isExternal?: boolean;
};

export type SocialLinks = {
  icon: string | StaticImageData;
  link: string;
};

export interface ImageMeta {
  name: string;
  src: string | StaticImageData;
}
