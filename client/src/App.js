import {Route ,BrowserRouter,Routes} from "react-router-dom";
import { Home ,CheckoutForm} from "./pages";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/home" element={<Home />}/>  
      <Route exact path="/" element={<Home />}/>
      <Route  path="/payment" element={<CheckoutForm/>}/>
     </Routes> 
    </BrowserRouter>
  );
}

export default App;




