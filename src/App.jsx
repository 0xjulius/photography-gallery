import Galleria from "./components/Galleria.jsx";
import Footer from "./components/Footer.jsx";
export default function App() {
  return (
    <>
      <h1 className="text-center font-semibold text-gradient text-6xl lg:text-8xl p-6 lg:p-12 animate__animated animate__fadeIn animate__delay-1s pt-20">
        visionbyjulius.
      </h1>
      <h2 className="text-center text-xl text-white text-opacity-75 pb-20 animate__animated animate__fadeIn animate__delay-2s">
        Welcome to my photography gallery!
      </h2>
      <Galleria />
      <Footer />
    </>
  );
}
