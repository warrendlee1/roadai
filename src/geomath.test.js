import { getObstructionsNearby } from "./geomath";

test("Only obstructions within max distance are returned", () => {
  const location = {
    latitude: 33.971082047088956,
    longitude: -118.41791552697393,
  };
  const obstructions = [
    { latitude: 33.9829858979619, longitude: -118.40694191685019 },
    { latitude: 33.98194710422966, longitude: -118.43807774028127 },
    { latitude: 34.01077694661349, longitude: -118.48492649262909 },
  ];
  const maxDistance = 4828; //In meter. Approx 3 miles.
  expect(getObstructionsNearby(location, obstructions, maxDistance)).toEqual([
    { latitude: 33.9829858979619, longitude: -118.40694191685019 },
    { latitude: 33.98194710422966, longitude: -118.43807774028127 },
  ]);
});
