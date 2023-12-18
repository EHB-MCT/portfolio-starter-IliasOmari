/* eslint-disable react/no-unknown-property */
import { useEffect, useState, Suspense } from "react";
import "./App.css";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Model } from "./Lambo";
import { OrbitControls } from "@react-three/drei";

function App() {
  const [cars, setCars] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [inputs, setInputs] = useState({
    manufacturer: "",
    carModel: "",
    img: "",
  });
  const handleDelete = (car) => {
    fetch(`http://localhost:80/cars/${car}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => {
        location.reload();
      });
  };

  const show = () => {
    setShowForm((prev) => !prev);
  };

  const addCar = (e) => {
    e.preventDefault();
    console.log(inputs);

    fetch(`http://localhost:80/cars`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputs),
    })
      .then((response) => response.json())
      .then(() => {
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
      });
    return () => controller.abort();
  }, []);

  return (
    <>
      <div className="title">
        <h1>My Favourite Cars</h1>

        <div className="button-back">
          <motion.button
            onClick={show}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            Add a new car
          </motion.button>
        </div>
      </div>

      {showForm ? (
        <motion.div
          className="form_area"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <form onSubmit={addCar}>
            <div className="form_group">
              <label className="sub_title">Model name</label>
              <input
                type="text"
                className="form_style"
                name="carModel"
                onChange={(e) =>
                  setInputs((prev) => ({
                    ...prev,
                    [e.target.name]: e.target.value,
                  }))
                }
              />
            </div>

            <div className="form_group">
              <label className="sub_title">Manufacturer</label>
              <input
                type="text"
                className="form_style"
                name="manufacturer"
                onChange={(e) =>
                  setInputs((prev) => ({
                    ...prev,
                    [e.target.name]: e.target.value,
                  }))
                }
              />
            </div>
            <div className="form_group">
              <label className="sub_title">Picture URL</label>
              <input
                type="text"
                className="form_style"
                name="img"
                onChange={(e) =>
                  setInputs((prev) => ({
                    ...prev,
                    [e.target.name]: e.target.value,
                  }))
                }
              />
            </div>
            <div className="form-button">
              <button className="btn" type="submit">
                Submit
              </button>
            </div>
          </form>
        </motion.div>
      ) : (
        ""
      )}

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
      <div className="title">
        <h1>My dream car in 3D</h1>
      </div>

      <div className="3d-object">
        <Canvas
          camera={{ position: [10, 3, 10], fov: 45 }}
          style={{
            height: "100vh",
          }}
        >
          <Suspense fallback={null}>
            <ambientLight intensity={3} />
            <directionalLight intensity={5} />

            <Model />
          </Suspense>
          <OrbitControls
            enableZoom={false}
            autoRotate={true}
            autoRotateSpeed={3}
            enableRotate={false}
          />
        </Canvas>
      </div>
    </>
  );
}

export default App;
