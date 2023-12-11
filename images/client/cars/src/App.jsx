import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    fetch("http://localhost:80/cars", { signal })
      .then((response) => response.json())
      .then((data) => {
        setCars(data);
        console.log(data);
      });
    return () => controller.abort();
  }, []);

  return (
    <>
      <div className="title">
        <h1>Mercedes Marvels</h1>
      </div>

      <div className="models">
        {cars.map((cars, index) => {
          return (
            <div key={index} className="model">
              <div className="projectImg">
                <img src={cars.img} alt="car" />
              </div>
              <div className="projectInformation">
                <div className="text">
                  <h2>{cars.carModel}</h2>
                  <p>{cars.manufacturer}</p>
                  <br />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
