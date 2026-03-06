import { Suspense } from "react";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Tickets from "./Components/Tickets/Tickets";
import Banner from "./Components/Banner/Banner";

const ticketPromise = fetch("./ticketData.json").then((res) => res.json());
function App() {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Suspense fallback={<h3>Tickets are Loading...</h3>}>
        <Tickets ticketPromise={ticketPromise}></Tickets>
      </Suspense>
      <Footer></Footer>
    </>
  );
}

export default App;
