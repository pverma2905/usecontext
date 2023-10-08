import React, { useContext } from 'react'
import { data, data1 } from "./App";

export default function ChildC() {

    const name = useContext(data);
    const gender = useContext(data1);
    return (
        <div>
            <h1>ChildC</h1>
            <p>My name is {name} and my gender is {gender}</p>
        </div>
    )
}
