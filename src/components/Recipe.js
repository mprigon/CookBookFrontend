import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function Recipe() {
    const[dishDetail, setDishDetail] = useState([]);
    let params = useParams();

    console.log("params from Recipe: ", params);

    useEffect(() => {
    console.log("useEffect working, запускаем fetch");
    fetch(`http://127.0.0.1:8000/api/v1/dishdetail/${params.id}`)
    .then(function(response) {
        let json = response.json();
        console.log("json = ", json);
        return json
    })
    .then(function(json) {
        console.log("json dishDetail = ", json);
        setDishDetail(json);
        console.log("dishDetail = ", dishDetail);
    })
  }, []);


    return (
        <div>
            <p>Это страница с подробным рецептом</p>
            <p>Выбрано блюдо с ID: {params.id}</p>
            <p>{dishDetail.title}</p>
            <p>{dishDetail.summary}</p>
            <p><img src={dishDetail.photo} alt={dishDetail.title} /></p>
            <p>Рецепт: {dishDetail.recipe}</p>
            <Link to="/">На главную страницу</Link>
        </div>
    )
}

export default Recipe;
