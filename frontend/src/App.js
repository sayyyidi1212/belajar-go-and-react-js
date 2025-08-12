import React, { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");
  const [serverTime, setServerTime] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080/api/message")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => console.error("Error fetching message:", err));

    fetch("http://localhost:8080/api/status")
      .then((res) => res.json())
      .then((data) => {
        setServerTime(data.server_time);
        setStatus(data.status);
      })
      .catch((err) => console.error("Error fetching status:", err));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>React Frontend</h1>
      <p>
        Pesan dari backend Go: <strong>{message || "Loading..."}</strong>
      </p>
      <p>
        Waktu server: <strong>{serverTime || "Loading..."}</strong>
      </p>
      <p>
        Status API: <strong>{status || "Loading..."}</strong>
      </p>
    </div>
  );
}

export default App;
