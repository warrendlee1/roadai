const rootURL = "http://127.0.0.1:8080";

export const POST = (body) => {
  // POST request using fetch inside useEffect React hook
  fetch(`${rootURL}/add`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  }).then((res) => {
    console.log("Request complete. Response:", res);
  });
};
