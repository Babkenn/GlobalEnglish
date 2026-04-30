export type Language = "hy" | "en" | "ru";

export type Translation = {
  languageSwitcherLabel: string;
  languageNames: Record<Language, string>;
  nav: {
    about: string;
    teachers: string;
    courses: string;
    programmes: string;
    jobs: string;
  };
  header: {
    logoAlt: string;
    toggleMenu: string;
  };
  hero: {
    badge: string;
    title: string;
    description: string;
    exploreCourses: string;
    learnAboutUs: string;
    illustrationLabel: string;
  };
  about: {
    title: string;
    paragraphs: string[];
  };
  gallery: {
    title: string;
    description: string;
    imageAltPrefix: string;
    previous: string;
    next: string;
    pause: string;
    play: string;
  };
  teachers: {
    title: string;
    cards: Array<{ name: string; fact: string }>;
  };
  courses: {
    title: string;
    cards: Array<{ name: string; description: string }>;
  };
  programmes: {
    title: string;
    cards: Array<{ name: string; description: string }>;
  };
  jobs: {
    title: string;
    description: string;
    form: {
      alertSuccess: string;
      fullNamePlaceholder: string;
      emailPlaceholder: string;
      experiencePlaceholder: string;
      sendApplication: string;
      emailInstead: string;
    };
  };
  footer: {
    description: string;
    menuTitle: string;
    shareFollowTitle: string;
    shareDescription: string;
    copyrightSuffix: string;
  };
};
