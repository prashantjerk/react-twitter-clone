import React from "react";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import Feed from "./Components/Feed";
import Widget from "./Components/Widget";

function App() {
  return (
    <div className="app">
      {/* Sidebar  */}
      <Sidebar />

      {/* Feed  */}
      <Feed />

      {/* Widgets */}
      <Widget />
    </div>
  );
}

export default App;
