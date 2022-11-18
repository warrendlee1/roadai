const root = "http://127.0.0.1:8080";
const version = "v1";

export const POST = (body) => {
  // POST request using fetch inside useEffect React hook
  fetch(`${root}/${version}/obstructions`, {
    method: "POST",
    headers: { Accept: "application/json" },
    body: JSON.stringify(body),
  }).then((res) => {
    console.log("Request complete. Response:", res);
  });
};
