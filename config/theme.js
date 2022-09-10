import website from '../config/site-data.json';

export const navlinks = () => {
  return ([
    { name: "Account", ref: "person", link: "/account", alt: "Go to Login page" },
    { name: "Shop", ref: "remove_red_eye", link: "/shop", alt: "Learn about Our Products" },
    { name: "FAQ", ref: "all_inclusive", link: "/faq", alt: "Go to the FAQ - and Frequently Ask Questions!" },
    { name: "Cart", ref: "shopping_cart", link: "/cart", alt: "View your Cart" }
  ])
};

export const metaTags = (title, description, scalable) => {
  
  title = title ? website.name + " | " + title : website.name;
  description = description ? description : website.description;
  
  const viewport = "width=device-width, initial-scale=1.0, maximum-scale=1.0" + (scalable ? ", user-scalable="+scalable : ", user-scalable=no");
  const themeColor = website.themeColor ? website.themeColor : "#000000";

  return (<>
    <meta name="viewport" content={viewport} />
    <meta name="theme-color" content={themeColor} />

    <meta property="og:site_name" content={title} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={website.url} />
    <meta property="og:image" content={website.image} />

    <meta property="twitter:title" content={title} />
    <meta property="twitter:description" content={description} />
    <meta property="twitter:type" content="website" />
    <meta property="twitter:url" content={website.url} />
    <meta property="twitter:image" content={website.image} />

    <meta name="twitter:site" content={website.twitterHandle} />
    <meta name="twitter:creator" content={website.twitterHandle} />
    <meta name="twitter:image:alt" content={website.imageAlt} />
    <meta name="twitter:card" content={website.twitterCard} />
  </>)
}