import {dom, library} from '@fortawesome/fontawesome-svg-core';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons';
import {faLink} from '@fortawesome/free-solid-svg-icons';
import {faGithub, faTwitter} from '@fortawesome/free-brands-svg-icons';

library.add(faEnvelope, faLink, faGithub, faTwitter);
dom.i2svg();
