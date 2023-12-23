function carInput(car) {
  if (
    car.carModel == "" ||
    car.manufacturer == "" ||
    car.img == "" ||
    car.carModel == null ||
    car.manufacturer == null ||
    car.img == null
  ) {
    return true;
  }
  return false;
}

module.exports = carInput;
