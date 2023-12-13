import { useEffect, useState } from "react";
import "./App.css";
import { motion } from "framer-motion";

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
            <motion.div
              key={index}
              className="model"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
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
                  <motion.button
                    onClick={() => handleDelete(cars.carModel)}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    Delete car
                  </motion.button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </>
  );
}

export default App;
