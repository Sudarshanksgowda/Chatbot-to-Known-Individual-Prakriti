import React, { useState } from "react";
import Login from "./Components/Login";
import "./App.css";
import About from "./Components/About";
import { ChatbotButton } from "./Components/ChatbotButton";
import Footer from "./Components/Footer";
import Front from "./Components/Front";
import Info from "./Components/Info";
import Navbar from "./Components/Navbar";
import { ChatbotOpen } from "./Components/ChatbotOpen";

function App() {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(null);

  if (!user) {
    return <Login onLogin={setUser} />;
  }

  return (
    <div className="App">
      <ChatbotOpen.Provider value={{ open, setOpen }}>
        <Navbar />
        <Front />
        <ChatbotButton />
        <Info />
        <About />
        <Footer />
      </ChatbotOpen.Provider>
    </div>
  );
}

export default App;