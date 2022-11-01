import { useEffect, useState } from "react";

export function useGeoData() {
  const [geoData, setGeoData] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      console.log("This browser does not support the geolocation API");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (data, timestamp) => {
        setGeoData({ ...data.coords, timestamp });
      },
      (error) => {
        console.log(error);
        setError(error);
      }
    );
  }, []);

  return { ...geoData, error };
}
