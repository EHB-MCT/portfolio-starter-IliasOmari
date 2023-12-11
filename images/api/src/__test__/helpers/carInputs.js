function carInput(car) {
  if (
    car.carmanufacturer == "" ||
    car.manufacturer == "" ||
    car.img == "" ||
    car.carmanufacturer == null ||
    car.manufacturer == null ||
    car.img == null
  ) {
    return true;
  }
  return false;
}

module.exports = carInput;
