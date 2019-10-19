import {
  faTrash,
  faSignOutAlt,
  faEdit,
  faCalendarTimes,
  faSpinner,
  faPlusCircle
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

const Icons = () => {
  return library.add(
    faTrash,
    faSignOutAlt,
    faEdit,
    faCalendarTimes,
    faSpinner,
    faPlusCircle
  );
};

export default Icons;
