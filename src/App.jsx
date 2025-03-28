import Header from "./components/header/header";
import Courses from "./components/courses/courses";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";

function App() {
  return (
    <section className="main-app flex-box-col g130 w80 mauto">
      <Header />
      <Courses />
      <Contact />
      <Footer />
    </section>
  );
}

export default App;
