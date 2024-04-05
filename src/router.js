import Home from "./pages/Home";
import Clientes from "./pages/cliente";
import Login from "./pages/login";
import Produtos from "./pages/Produtos";
import Menu from "./components/menu";

import { BrowserRouter, Routes, Route } from 'react-router-dom'
export default function Router(){
    return (
        <BrowserRouter>

            <Menu/>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Home />} />
                <Route path="/clientes" element={<Clientes />} />
                <Route path="/produtos" element={<Produtos />} />
            </Routes>
        </BrowserRouter>
    )
};