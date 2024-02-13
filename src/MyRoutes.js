import App from "./App"
import Counter from "./pages/Counter"
import Home from "./pages/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom"

const MyRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />}></Route>
                <Route path='/home/:name' element={<Home />}></Route>
                <Route path='/count' element={<Counter />}></Route >
                {/* <Route path='/data' element={<Data />}></Route > */}
            </Routes>
        </BrowserRouter >
    )
}
export default MyRoutes