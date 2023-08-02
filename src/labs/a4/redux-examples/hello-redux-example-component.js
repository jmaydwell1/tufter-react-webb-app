import React from "react";
import { useSelector } from "react-redux";
import hello from "./hello";
const HelloReduxExampleComponent = () => {
    const message = useSelector((state) => state.hello.message);
    return(
        <h3>{message}</h3>
    );
};
export default HelloReduxExampleComponent;