import Header from "../components/Header";
import Footer from "../components/Footer";
import  MainContent  from "../components/MainContent";
import { Helmet } from "react-helmet-async";



const JavaScript = () => {
  return (
    <>
          <Helmet>
        <title>javaScript Page</title>
        <meta name="description" content="javaScript  Page create-react-app" />
      </Helmet>
      <Header />
      <MainContent text="JavaScript Page"/>
      <Footer/>
    </>
  );
};

export default JavaScript;
