import App from "./components/App";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function Main() {
    return(
     <BrowserRouter>
        <Routes>
            <Route path="/"  element={<App />}>
                
            </Route>
        </Routes>
     </BrowserRouter>
    );
}

export default Main;