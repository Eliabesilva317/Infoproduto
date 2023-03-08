import {BrowserRouter, Routes, Route,} from "react-router-dom";
import Login from "./pages/login";


export function App() {
  return(

    <BrowserRouter>
      <div className="container">
       <Routes>
         <Route path='/' element={<Login />}/>

         {/* <Route path='/about' element={<About />}/> */}
       </Routes>
      </div>
  </BrowserRouter>

  )
}

export default App;