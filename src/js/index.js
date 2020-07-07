import { dom, library } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebookSquare,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLink, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

library.add(
  faFacebookSquare,
  faGithub,
  faTwitter,
  faEnvelope,
  faLink,
  faMapMarkerAlt
);
dom.i2svg();
