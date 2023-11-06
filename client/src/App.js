import "./App.css";
import {Routes, Route, Link } from "react-router-dom";
import Navbar from "./Components/Navbar";
import TableHeader from "./Components/tableHeader";
import Table from "./Components/table"
import About from "./assets/about"
import Contact from "./assets/contact"
import Help from "./assets/help"
import Home from "./assets/home"
import SearchBar from "./Components/SearchBar";
const App = () => {
return (
  <>
  <Navbar/>
  <TableHeader/>
  <SearchBar/>
  <Table/>
 
 <Routes>
  <Route path="/"  element={<Home/>} ></Route>
  <Route  path="/about" element={<About/>} ></Route>
  <Route path="/contact" element={<Contact/>} ></Route>
  <Route path="/help" element={<Help/>} ></Route>
 </Routes>
  </>
)
}




// function Contact() {
//   return <h1> This is Contact page </h1>
// }
// function Help() {
//   return <h1> This is help page</h1>
// }

// function App() {
//   return (
//     <div className="fragment">
//         <div className="color">
//        <div>
//        <h1 >
//           hello
//         </h1>
//        </div>
//        <div>
//        <h1 >
//           hello
//         </h1>
//        </div>
//        <div>
//        <h1 >
//           hello
//         </h1>
//        </div>
//        <div>
//        <h1 >
//           hello
//         </h1>
//        </div>
//        <div>
//        <h1 >
//           hello
//         </h1>
//        </div>
       
//         </div>
       

//       </div> // this one is fragment(div)
//   );
// }

export default App;
