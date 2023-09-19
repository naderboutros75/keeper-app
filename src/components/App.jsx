import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../note";

const App = () => (
  <div>
    <Header />
    {notes.map((note) => (
      <Note
        key={note.key}
        title={note.title}
        content={note.content.substring(0, 100)}
      />
    ))}
    <Footer />
  </div>
);

export default App;
