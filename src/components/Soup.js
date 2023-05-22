import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


function Soup() {

  const[allSoups, setAllSoups] = useState([]);
  useEffect(() => {
    console.log("useEffect working, запускаем fetch");
    fetch("http://127.0.0.1:8000/api/v1/dishlist/category/1")
    .then(function(response) {
        let json = response.json();
        console.log("json = ", json);
        return json
    })
    .then(function(json) {
        console.log("json allSoups = ", json);
        setAllSoups(json);
        console.log("allSoups = ", allSoups);
    })
  }, []);

    return (
      <div>
        <h2>Супы</h2>
        {/* <p>{ allSoups.map(soup => `${soup.title}: ${soup.recipe}`)}</p> */}
        <p>{ allSoups.map(function(soup)
                {
                  return (
                    <div>
                      <p>{soup.title}: {soup.summary}
                          <Link to={`/${soup.id}`}>   Рецепт этого блюда</Link>
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

  export default Soup;
  