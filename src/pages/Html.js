import Header from "../components/Header";
import Footer from "../components/Footer";
import MainContent from "../components/MainContent";
import { Helmet } from "react-helmet-async";

const Html = () => {
  return (
    <>
      <Helmet>
        <title>HTML Page</title>
        <meta name="description" content="HTML Page create-react-app" />
      </Helmet>
      <Header />
      <MainContent textContent="HTML Page" />
      <Footer />
    </>
  );
};

export default Html;
