import { getDistance, orderByDistance } from "geolib";

function getObstructionsNearby(location, obstructions, maxDistance) {
  const nearby = obstructions.filter(
    (obstruction) => getDistance(location, obstruction) <= maxDistance
  );
  return orderByDistance(location, nearby);
}

export { getObstructionsNearby };
