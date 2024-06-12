import FormContact from "../contact/FormContact.jsx";
import HeaderContact from "./HeaderContact.jsx";
import FollowContact from "./FollowContact.jsx";
import Footer from "../Footer.jsx";

export default function Contact() {
  return (
    <div>
      <div>
        <HeaderContact />
        <FormContact />
        <FollowContact />
        <Footer />
      </div>
    </div>
  );
}
