import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";


function Vegetables() {

  const[allVegetable, setAllVegetable] = useState([]);
  useEffect(() => {
    console.log("useEffect working, запускаем fetch");
    fetch("http://127.0.0.1:8000/api/v1/dishlist/category/2")
    .then(function(response) {
        let json = response.json();
        console.log("json = ", json);
        return json
    })
    .then(function(json) {
        console.log("json allVegetable = ", json);
        setAllVegetable(json);
        console.log("allVegetable = ", allVegetable);
    })
  }, []);

    return (
      <div>
        <h2>Овощные блюда</h2>
        {/* <p>{ allVegetable.map(vegetable => `${vegetable.title}: ${vegetable.recipe}`)}</p> */}
        <p>{ allVegetable.map(function(vegetable)
                {
                  return (
                    <div>
                      <p>{vegetable.title}: {vegetable.summary}
                          <Link to={`/${vegetable.id}`}>   Рецепт этого блюда</Link>
                      </p>
                    </div>
                  )
                }
              )
            }
        </p>
      </div>
    );
  }

  export default Vegetables;
  