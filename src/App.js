import { AllProjects } from "./components/AllProject";
import { ContactMe } from "./components/ContactMe";
import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
import { Portfolio } from "./components/Portfolio";
import { Services } from "./components/Services";
import { Testimonial } from "./components/Testimonials";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Root = () => (
  <>
    <Header />
    <Services />
    <Portfolio />
    <Testimonial />
    <ContactMe />
  </>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Root />} />
        <Route path="/allProjects" element={<AllProjects />} />
      </Routes>
    </Router>
  );
}

// const App = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Root />}>
//       {/* <Route path="dashboard" element={<Dashboard />} />
//       ... etc. */}
//     </Route>
//   )
// );

export default App;
