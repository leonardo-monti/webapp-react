import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import MovieDetail from "./pages/MovieDetail"
import Loader from "./components/Loader"


function App() {
  return (
    <BrowserRouter>
    <Loader>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies/:id" element={<MovieDetail />} />
      </Routes>
      </Loader>
    </BrowserRouter>
  )
}

export default App