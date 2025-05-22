import React from "react";
import GoogleTrends from "./components/GoogleTrends";
import Search from "./components/Search";

function App() {
  return (
    <div>
      <h1>Resultados en tendencia</h1>
      <Search />
      <GoogleTrends />
    </div>
  );
}

export default App;
