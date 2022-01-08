import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Faille, Success } from "./components/PaymentForm";
import { CheckoutForm } from "./pages";

function App()
{
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<CheckoutForm />} />
        <Route exact path="/success" element={<Success />} />
        <Route path="/faile" element={<Faille />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;




