import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


function Porrige() {

  const[allPorrige, setAllPorrige] = useState([]);
  useEffect(() => {
    console.log("useEffect working, запускаем fetch");
    fetch("http://127.0.0.1:8000/api/v1/dishlist/category/3")
    .then(function(response) {
        let json = response.json();
        console.log("json = ", json);
        return json
    })
    .then(function(json) {
        console.log("json allPorrige = ", json);
        setAllPorrige(json);
        console.log("allPorrige = ", allPorrige);
    })
  }, []);

    return (
      <div>
        <h2>Каши</h2>
        {/* <p>{ allPorrige.map(porrige => `${porrige.title}: ${porrige.recipe}`)}</p> */}
        <p>{ allPorrige.map(function(porrige)
                {
                  return (
                    <div>
                      <p>{porrige.title}: {porrige.summary}
                          <Link to={`/${porrige.id}`}>   Рецепт этого блюда</Link>
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

  export default Porrige;
  