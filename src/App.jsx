import { useState } from "react";
import Navbar from "./components/Navbar";
import NewsSection from "./components/NewsSection";

export default function App() {
  const [category, setCategory] = useState("soccer");
  return (
    <>
      <Navbar setCategory={setCategory} />
      <NewsSection option={category} />
    </>
  );
}
