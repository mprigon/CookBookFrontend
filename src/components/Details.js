import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";

import Recipe from "./Recipe";

function Details(props) {

    return (
        <div>
            <tr>{props.details.id}</tr>
            <tr>{props.details.title}</tr>
            <tr>{props.details.summary}</tr>
            <Outlet />
            <br />
        </div>
    )
}

export default Details;
