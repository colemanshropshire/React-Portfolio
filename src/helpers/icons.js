import {
  faTrash,
  faSignOutAlt,
  faEdit,
  faCalendarTimes,
  faSpinner,
  faPlusCircle,
  faPhoneAlt,
  faEnvelopeOpenText,
  faMapMarkedAlt
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

const Icons = () => {
  return library.add(
    faTrash,
    faSignOutAlt,
    faEdit,
    faCalendarTimes,
    faSpinner,
    faPlusCircle,
    faPhoneAlt,
    faEnvelopeOpenText,
    faMapMarkedAlt
  );
};

export default Icons;
