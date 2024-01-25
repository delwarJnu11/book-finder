import Books from "./components/Books/Books";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <>
      <Navbar />
      <main className="my-10 lg:my-14">
        <Books />
      </main>
      <Footer />
    </>
  );
}
