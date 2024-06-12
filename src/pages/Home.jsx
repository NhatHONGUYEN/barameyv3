import Description from "../components/Description";
import Footer from "../components/Footer";
import Presentation from "../components/Presentation";
import Introduction from "../components/introduction/Introduction";

export default function Home() {
  return (
    <>
      <Introduction />
      <Presentation />
      <Description />
      <Footer />
    </>
  );
}
