import Header from "../components/Header";
import Footer from "../components/Footer";
import MainContent from "../components/MainContent";
import { Helmet } from "react-helmet-async";


const Css = () => {
  return (
    <>
          <Helmet>
        <title>CSS Page</title>
        <meta name="description" content="CSS Page create-react-app" />
      </Helmet>
      <Header />
      <MainContent textContent="CSS Page" />
      <Footer />
    </>
  );
};

export default Css;
