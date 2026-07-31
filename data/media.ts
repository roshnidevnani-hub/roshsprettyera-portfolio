export type Video = {
  src: string;
  title: string;
  category: "Beauty" | "Skincare" | "Fashion" | "Lifestyle";
};

export type Photo = {
  src: string;
  alt: string;
  category: "Beauty" | "Skincare" | "Fashion" | "Lifestyle";
};

export const videos: Video[] = [

  {
    src: "/videos/v2.mp4",
    title: "Product Unboxing",
    category: "Beauty",
  },
  {
    src: "/videos/v3.mp4",
    title: "ugc",
    category: "Fashion",
  },
  {
    src: "/videos/v4.mp4",
    title: "GRWM",
    category: "Lifestyle",
  },
];

export const photos: Photo[] = [
  {
    src: "/photos/p1.jpg",
    alt: "Beauty product photography",
    category: "Beauty",
  },
  {
    src: "/photos/p2.jpg",
    alt: "Skincare product content",
    category: "Skincare",
  },
  {
    src: "/photos/p3.jpg",
    alt: "Fashion content",
    category: "Fashion",
  },
  {
    src: "/photos/p4.jpg",
    alt: "Lifestyle content",
    category: "Lifestyle",
  },
  {
    src: "/photos/p5.jpg",
    alt: "Beauty flat lay",
    category: "Beauty",
  },
  {
    src: "/photos/p6.jpg",
    alt: "Product photography",
    category: "Beauty",
  },
  {
    src: "/photos/p7.jpg",
    alt: "Lifestyle photography",
    category: "Lifestyle",
  },
  {
    src: "/photos/p8.jpg",
    alt: "Fashion product showcase",
    category: "Fashion",
  },
];