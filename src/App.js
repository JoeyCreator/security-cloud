import React from "react";
import "./styles.css";
import Charts from "./components/Charts";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="App">
      <h1>Data Cloud - Security</h1>
      <h2>Covid-19 Health - Data Cloud Center</h2>
      <Charts />
      <Footer />
    </div>
  );
}
