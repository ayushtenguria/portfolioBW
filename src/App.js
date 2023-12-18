import { ContactMe } from "./components/ContactMe";
import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
import { Portfolio } from "./components/Portfolio";
import { Services } from "./components/Services";
import { Testimonial } from "./components/Testimonials";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Services />
      {/* <Portfolio/>
     <Testimonial/> */}
      <ContactMe />
    </div>
  );
}

export default App;
