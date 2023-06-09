import{
  BrowserRouter, 
  Routes,
  Route,
} from 'react-router-dom'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Footer } from "./components/Footer";
import { AboutMe } from "./components/AboutMe";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Testing } from "./components/Testing";
import { BackToTop } from "./components/BackToTop";
function App() {
  return (
    <div className="App">
      <NavBar />
      <BackToTop />
      <Banner />
      <Skills />
      <Projects />
      <AboutMe />
      <Footer />
    </div>
    

  );
}

export default App;



// import{
//   BrowserRouter, 
//   Routes,
//   Route,
// } from 'react-router-dom'
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import  {NavBar} from "./components/NavBar";
// import { Banner } from "./components/Banner";
// import { Footer } from "./components/Footer";
// import { AboutMe } from "./components/AboutMe";
// import { Skills } from "./components/Skills";
// import { Projects } from "./components/Projects";

// function App() {
//   return (
//     <BrowserRouter>
//       <NavBar />
//       <Banner />
//       <Footer />
//       <Routes>
//         <Route path="/" element= {<Banner />} />
//         <Route path="/AboutMe" element= {<AboutMe />} />
//         <Route path="/Skills" element= {<Skills />} />
//         <Route path="/Projects" element= {<Projects />} />
//       </Routes>
//     </BrowserRouter>
  
//   );
// }

// export default App;
