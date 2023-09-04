import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import {Home,Login,Products,Register,Cart, Admin} from "../containers"

import PrivateRoute from "./private-route";




function Routess() {
    return (
        <Router>
            <Routes>
                <Route element={<Login />} path="/login" />
                <Route element={<Register />} path="/cadastro" />

                <Route element={<PrivateRoute isAdmin/>}>
                  
                    <Route element={<Home/>} path="/" />
                    <Route element={<Products/>} path="/produtos" />
                    <Route element={<Cart/>} path="/carrinho" />

                    <Route element={<Admin/>} path="/pedidos" />
                </Route>
                


            </Routes>
        </Router>
    )
}

export default Routess
