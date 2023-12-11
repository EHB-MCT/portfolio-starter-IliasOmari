const checkCarInput = require("./../helpers/checkInputs");

describe("Car input checker", () => {
  test("Validate the inputs of the passed data", () => {
    expect(checkCarInput({ manufacturer: "", carModel: "", img: "" })).toBe(
      true
    );
    expect(
      checkCarInput({ manufacturer: null, carModel: null, img: null })
    ).toBe(true);
    expect(
      checkCarInput({
        manufacturer: undefined,
        carModel: undefined,
        img: undefined,
      })
    ).toBe(true);
    expect(
      checkCarInput({
        manufacturer: "Mercedes-Benz",
        carModel: "AMG A45",
        img: "img",
      })
    ).toBe(false);
  });
});
