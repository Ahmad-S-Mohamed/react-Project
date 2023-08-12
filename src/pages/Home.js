import Header from "../components/Header";
import Footer from "../components/Footer";
import MainContent from "../components/MainContent";
import { Helmet } from "react-helmet-async";

function Home() {
  return (
    <>
      <Helmet>
        <title>HOME Page</title>
        <meta name="description" content="HOME Page create-react-app" />
        <style type="text/css">
          {`
        // h2 {
        //   color: teal;
        //   position: absolute;
        //   z-index: 4;
        //   top: 55%;
        //   left: 45%;
        //   animation: ltr 2s 1;
        //   text-align: center;
        // }
        // `}
        </style>
      </Helmet>
      <Header />
      <div>
        <MainContent textContent=" Design Ahmad Salah ♥" />
        {/* <h2>Ahmad Salah ♥</h2> */}
      </div>
      <Footer />
    </>
  );
}

export default Home;
