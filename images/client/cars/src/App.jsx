import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [cars, setCars] = useState([]);
  const handleDelete = (car) => {
    fetch(`http://localhost:80/cars/${car}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        location.reload();
      });
  };
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
        <h1>Mercedes Showroom</h1>
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

                <div className="button">
                  <button onClick={() => handleDelete(cars.carModel)}>
                    Delete
                  </button>
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
