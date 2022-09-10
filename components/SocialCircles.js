import SvgContainer from '../components/SvgContainer';

import Instagram from '../public/images/icons/instagram_social-circles.svg';
// import Facebook from '../public/images/icons/tiktok_social-circles.svg';
// import Twitter from '../public/images/icons/twitter_social-circles.svg';
// import Pintrest from '../public/images/icons/twitter_social-circles.svg';

import website from '../config/site-data.json';

const SocialCircles = ({ socialContainer, iClass, width, icon1, icon2, icon3, icon4, icon1link, icon2link, icon3link, icon4link, icon1alt, icon2alt, icon3alt, icon4alt }) => {

  iClass=iClass?" "+iClass:" svg-color-light";
  socialContainer=socialContainer?" "+socialContainer:"";
  width=width?width:"";

  icon1=icon1?icon1:Instagram;
  icon2=icon2?icon2:Facebook;
  icon3=icon3?icon3:Twitter;
  icon4=icon4?icon4:Pinterest;

  icon1link=icon1link?icon1link:website.instagramUrl;
  icon2link=icon2link?icon2link:website.facebookUrl;
  icon3link=icon3link?icon3link:website.twitterUrl;
  icon4link=icon4link?icon4link:website.pinterestUrl;

  icon1alt=icon1alt?icon1alt:website.name+" // Instagram";
  icon2alt=icon2alt?icon2alt:website.name+" // Facebook";
  icon3alt=icon3alt?icon3alt:website.name+" // Twitter";
  icon4alt=icon4alt?icon4alt:website.name+" // Pinterest";

  const icons = [
    {
      src: icon1,
      link: icon1link,
      alt: icon1alt,
      name: "Instagram"
    },{
      src: icon2,
      link: icon2link,
      alt: icon2alt,
      name: "Facebook"
    },{
      src: icon3,
      link: icon3link,
      alt: icon3alt,
      name: "Twitter"
    },{
      src: icon4,
      link: icon4link,
      alt: icon4alt,
      name: "Pinterest"
    }
  ]

  return (
    <div className={"social-circles icon-container row"}>
      {icons.map((icon, i) => (
        <div className='col s3' aria-label={"Follow us on "+icon.name} key={i}>
          <SvgContainer
            layout="responsive"
            classes={"social-icon link"+iClass}
            width={width}
            description={icon.alt}
            link={icon.link}
            color={"white"}
            src={icon.src} />
        </div>
      ))}
    </div>
  )
}

export default SocialCircles;