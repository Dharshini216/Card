// import React from 'react';
// import DemoOne from './Components/DemoOne';
// function App() {
//   return(
//     <div>
//       <DemoOne/>
//     </div>
//   );
// }
// export default App;


// import React from 'react';
// import DemoTwo from './Components/DemoTwo';
// function App() {
//   return(
//     <div>
//       <DemoTwo/>
//     </div>
//   );
// }
// export default App;


// import React from 'react';
// import DemoThree from './Components/DemoThree';
// function App() {
//   return(
//     <div>
//       <DemoThree/>
//     </div>
//   );
// }
// export default App;


// import React from 'react';
// import DemoFour from './Components/DemoFour';
// function App() {
//   return(
//     <div>
//       <DemoFour name={"Dharshini"} age={21}/>
//     </div>
//   );
// }
// export default App;


// import React from 'react';
// import Counter from './Components/Counter';
// function App() {
//   return(
//     <div>
//       <Counter/>
//     </div>
//   );
// }
// export default App;


// import React from 'react';
// import './App.css';
// import Cards from './Components/Cards';
// import Summer from './assets/Summer.jpg';
// import Winter from './assets/Winter.avif';
// import Monsoon from './assets/Monsoon.jpg';
// function App() {
//   return(
//     <div className="App">
//       <Cards name={"Summer"} image={Summer} desc={"Summer is the hottest season, with high temperatures and bright, sunny days."} clsname={"cardSummer"} cname={"btnSummer"} hname={"h1Summer"}/>
//       <Cards name={"Winter"} image={Winter} desc={"Winter is the coldest season, with cool weather and low temperatures."} clsname={"cardWinter"} cname={"btnWinter"} hname={"h1Winter"}/>
//       <Cards name={"Monsoon"} image={Monsoon} desc={"Monsoon is the rainy season, bringing frequent and heavy rainfall."} clsname={"cardMonsoon"} cname={"btnMonsoon"} hname={"h1Monsoon"}/>
//     </div>
//   );
// }
// export default App;


// import react from 'react';
// import ApiCall from './Components/ApiCall';
// function App() {
//   return(
//     <div>
//       <ApiCall/>
//     </div>
//   );
// }
// export default App;

// import React from 'react';
// import './App.css';
// import Cards from './Components/Cards';
// function App() {
//   return(
//     <div className="App">
//       <Cards clsname={"cardSummer"} cname={"btn1"} hname={"h11"} clname={"card1"}/>
//       <Cards clsname={"cardWinter"} cname={"btn2"} hname={"h12"} clname={"card2"}/>
//       <Cards clsname={"cardMonsoon"} cname={"btn3"} hname={"h13"} clname={"card3"}/>
//     </div>
//   );
// }
// export default App;

// import React from 'react';
// import StudentForm from './Components/StudentForm';
// function App() {
//   return(
//     <StudentForm/>
//   );
// }
// export default App;

// import React from 'react';
// import Demo from './Components/Demo';
// function App() {
//   return(
//     <Demo/>
//   );
// }
// export default App;

import React from 'react';
import Home from './Components/Home';
import Product from './Components/Product';
import About from './Components/About';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router';
function App() {
  return (
    <BrowserRouter>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/product">Product</NavLink>
      <NavLink to="/about">About</NavLink>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;