// src/components/GoogleTrends.js
import React, { useState, useEffect } from "react";
import axios from "axios";

const GoogleTrends = () => {
  const [trendsData, setTrendsData] = useState(null);

  useEffect(() => {
    const fetchTrendsData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/trends");
        setTrendsData(response.data);
      } catch (error) {
        console.error("Error al obtener datos de tendencias:", error);
      }
    };

    fetchTrendsData();
  }, []);

  if (!trendsData) {
    return <div>Cargando datos...</div>;
  }

  // Renderizar los datos en tu componente React según sea necesario
  return (
    <div>
      <h2>Datos de Tendencias de Google</h2>
      <pre>{JSON.stringify(trendsData, null, 2)}</pre>
    </div>
  );
};

export default GoogleTrends;
