export const menu = {
  open: {
    width: "240px",
    height: "420px",
    top: "-15px",
    right: "-30px",
    opacity: 1,
    transition: {
      duration: 0.5,
      type: "tween",
      ease: [0.76, 0, 0.24, 1],
    },
  },
  closed: {
    width: "32px",
    height: "32px",
    top: "0px",
    right: "0px",
    opacity: 0,
    transition: {
      duration: 0.5,
      type: "tween",
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

export const menuLogo = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.35,
      type: "tween",
      ease: [0.76, 0, 0.24, 1],
    },
  },
  closed: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.5,
      type: "tween",
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

export const menuItems = {
  open: (i: any) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.25 + i * 0.05,
      type: "tween",
      ease: [0.76, 0, 0.24, 1],
    },
  }),
  closed: {
    opacity: 0,
    y: 20,
    transition: {
      duration: 0.5,
      type: "tween",
      ease: [0.76, 0, 0.24, 1],
    },
  },
};


export const links = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Experience",
    href: "/experience",
  },
  {
    title: "Projects",
    href: "/projects",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];


export const menuResume = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.45,
      type: "tween",
      ease: [0.76, 0, 0.24, 1],
    },
  },
  closed: {
    opacity: 0,
    y: 20,
    transition: {
      duration: 0.5,
      type: "tween",
      ease: [0.76, 0, 0.24, 1],
    },
  },
};
