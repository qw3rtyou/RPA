import { useEffect, useState } from "react";
import { getReviews } from "../api";

function App() {
  const [items, setItems] = useState();
  const handleLoad = async (options) => {
    let result;

    result = await getReviews(options);

    const { message: data } = result;

    setItems(data);
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return <div>{items}</div>;
}

export default App;
