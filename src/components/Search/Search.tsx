import React from "react";
import * as C from "./styles";

export default function Form({ value }: any) {
    const clear = () => {
        Array.from(document.querySelectorAll("input")).forEach(
            input => (input.value = "")
        );
    };

    return (
        <C.Container>
            <C.Input placeholder="Digite o nome do lugar" id="input-value" onChange={(e: React.ChangeEvent<HTMLInputElement>) => value(e.target.value)} />
            <C.Button onClick={clear}>X</C.Button>
        </C.Container>
    );
};