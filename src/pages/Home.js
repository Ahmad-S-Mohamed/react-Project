

import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

function Home()  {
  return (
    <>
  <Header/>
    <main>
    <h1 style={{ color: "red" }}>Home Page </h1>
    </main>
    <Footer/>
    <Outlet/>
  </>
  );
};



export default Home;


















