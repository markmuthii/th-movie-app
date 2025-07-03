import { useEffect, useState } from "react";

const APITest = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const getMessage = async () => {
      const response = await fetch("http://localhost:3005");

      if (response.ok) {
        const data = await response.json();

        setMessage(data.message);
      }
    };

    getMessage();
  }, []);

  return <div>{message}</div>;
};

export { APITest };
