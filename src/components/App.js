import React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";

import Layout from "./Layout";
import Home from "./Home";
import Soup from "./Soup";
import Vegetables from "./Vegetables";
import Porrige from "./Porrige";
import NoMatch from "./NoMatch";
import Recipe from "./Recipe";

function App() {
  return (
    <div>
      {/* Routes nest inside one another. Nested route paths build upon
            parent route paths, and nested route elements render inside
            parent route elements. See the note about <Outlet> below. */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="soup" element={<Soup />} />
          <Route path="vegetables" element={<Vegetables />} />
          <Route path="porrige" element={<Porrige />} />
          <Route path=":id" element={<Recipe />} />

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>


    </div>
  );
}

export default App;