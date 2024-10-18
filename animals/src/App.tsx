import {FC} from 'react'
import './App.css'
import {Route, Routes, } from 'react-router-dom';
import Home from './pages/Home';
import RegisterAnimal from './pages/RegisterAnimal';
import Navbar from "./routes/NavBar.tsx";

const App: FC = () => {
    return (
        <div>
            {/* Aquí mostramos la barra de navegación en todas las páginas */}
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<RegisterAnimal />} />
                <Route path="/contact" element={<RegisterAnimal />} />
            </Routes>
        </div>

    );
}



export default App
