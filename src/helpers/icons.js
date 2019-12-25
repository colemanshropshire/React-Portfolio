import {
  faTrash,
  faSignOutAlt,
  faEdit,
  faCalendarTimes,
  faSpinner,
  faPlusSquare,
  faPhoneAlt,
  faEnvelopeOpenText,
  faMapMarkedAlt,
  faLock,
  faBars,
  faWindowClose
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

const Icons = () => {
  return library.add(
    faTrash,
    faSignOutAlt,
    faEdit,
    faCalendarTimes,
    faSpinner,
    faPlusSquare,
    faPhoneAlt,
    faEnvelopeOpenText,
    faMapMarkedAlt,
    faLock,
    faBars,
    faWindowClose
  );
};

export default Icons;
