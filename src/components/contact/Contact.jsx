import FormContact from "./form/FormContact.jsx";
import HeaderContact from "./HeaderContact.jsx";
import FollowContact from "./FollowContact.jsx";
import Footer from "../Footer.jsx";
import Copyright from "../Copyright.jsx";

export default function Contact() {
  return (
    <div>
      <div>
        <HeaderContact />
        <FormContact />
        <FollowContact />
        <Footer />
        <Copyright />
      </div>
    </div>
  );
}
