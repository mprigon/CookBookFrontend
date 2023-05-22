import React, { useState, useEffect } from "react";
import Details from "./Details";


function Home() {
  
  const[allDishes, setAllDishes] = useState([]);
  useEffect(() => {
    console.log("useEffect working, запускаем fetch");
    fetch("http://127.0.0.1:8000/api/v1/dishlist/")
    .then(function(response) {
        let json = response.json(); //ждем, пока получим ответ сервера в JSON
        console.log("json = ", json);
        return json
    })
    .then(function(json) {
        console.log("json allDishes = ", json); //получив ответ сервера, идем дальше
        setAllDishes(json);
        console.log("allDishes = ", allDishes);
    })
  }, []); //пустой массив позволяет ограничивает частое обновление:
          // только при монтировании и размонтировании
    
  return (
    <div>
      <h2>Домашние рецепты вкусных блюд</h2>
      <p>{ allDishes.map(dish => <img src={dish.photo} alt={dish.title} />)}</p>
      <table>
        <thead>
          <th>
            Подробнее о блюдах
          </th>
        </thead>
          <tbody>        
            {allDishes.map(details => <Details key="details.id" details={details} />)}      
          </tbody>
      </table>
    </div>
  );
  }

  export default Home;
  