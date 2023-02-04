import React, { useState } from "react"
import * as C from "./styles"
import axios from "axios";
import Content from "../Content/Content";



export default function Form({ value }: any) {


    const clear = () => {
        Array.from(document.querySelectorAll("input")).forEach(
            input => (input.value = "")
        );

    };




    return (
        <C.Container>
            <C.Input placeholder="Digite o nome da cidade" id="input-value" onChange={(e: any) => value(e.target.value)} />
            <C.Button onClick={clear}>X</C.Button>
            {/* Lembrar de concertar esse any */}
        </C.Container>
    )
}