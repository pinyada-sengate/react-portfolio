import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { BsGooglePlay } from "react-icons/bs";
import { GrAppleAppStore } from "react-icons/gr";

const data = [
  {
    id: 1,
    link: "https://www.instagram.com/pinyadaadventures/",
    icon: <AiOutlineInstagram />,
  },
  //   { id: 2, link: "https://twitter.com", icon: <AiOutlineTwitter /> },
  { id: 2, link: "https://github.com/pinyada-sengate", icon: <AiFillGithub /> },
  {
    id: 3,
    link: "https://www.facebook.com/pinyada.sengate",
    icon: <AiFillFacebook />,
  },
  {
    id: 4,
    link: "https://play.google.com/store/apps/dev?id=5239894305954758080",
    icon: <BsGooglePlay />,
  },
  {
    id: 5,
    link: "https://apps.apple.com/us/developer/pinyada-sengate/id1244402942",
    icon: <GrAppleAppStore />,
  },
];

export default data;
