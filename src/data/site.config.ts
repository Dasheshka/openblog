interface SiteConfig {
  author: string;
  title: string;
  description: string;
  lang: string;
  ogLocale: string;
  shareMessage: string;
  paginationSize: number;
}

export const siteConfig: SiteConfig = {
  author: "BlueAmber", // Site author
  title: "Openblog", // Site title.
  description: "Openblog", // Description to display in the meta tags
  lang: "en-US",
  ogLocale: "en_US",
  shareMessage: "Try Openblog", // Message to share a post on social media
  paginationSize: 6 // Number of posts per page
};
