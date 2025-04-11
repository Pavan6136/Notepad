import React, { useState } from "react";
import { Plus, StickyNote } from "lucide-react";
import NotesCard from "./components/NotesCard";
const App = () => {
  const [notes, setNotes] = useState([
    { id: 1, title: "Rule no. 1 is fuck your feelings pavan" ,tit:"Pavan"},
    { id: 2, title: "Change rule no.1 don't take advice from varun", tit: "Varun" },
  ]);
  const [text, setText] = useState("");
  const [isToggle, setIsToggle] = useState(false);
  const [tit,setTit] = useState("");
  const addNote = () => {
    if (text.length == 0) {
      setText("Please Write Something");
      return;
    }
    setNotes((prev) => [
      ...prev,
      { id: new Date().toLocaleString(), title: text , tit: tit},
    ]);
    setText("");
    setTit("");
    setIsToggle(false);
  };
  const deleteNote = (id) => {
    setNotes((prev) => prev.filter((note) => note.id !== id));
  };
  return (
    <div className="min-h-screen h-auto flex flex-col bg-gray-900 text-white overflow-x-hidden p-8">
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-5xl font-bold flex items-center gap-2 text-pink-400 drop-shadow-lg">
          <StickyNote size={40} className="text-blue-400" /> Pavan's Notepad
        </h1>
        <p className="font-semibold text-blue-400 text-lg text-center">
          Scrap it Or Use It
        </p>
      </div>
      <div
        className="flex flex-col items-center gap-2 mt-12 w-full bg-gradient-to-br from-red-600 to-green-500 rounded-lg p-8 shadow-lg cursor-pointer hover:scale-102 transition-all duration-300 ease-in-out"
        onClick={() => setIsToggle(true)}
      >
        <Plus size={60} />
        <h1 className="text-2xl text-white font-bold">Add Your Note</h1>
      </div>
      {isToggle ? (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-purple-500 md:h-1/2 md:w-2/7 bg-gray-900 rounded-lg flex flex-col items-center gap-2 p-8">
          <h1 className="md:text-2xl text-xl font-semibold">
            Title of Notes
            </h1>
            <textarea 
            name="tit"
            id="tit"
            onChange={(e) => setTit(e.target.value)}
            value={tit}
            className="tex-white bg-gray-700 rounded-lg w-full h-full ">
            </textarea>
          <h1 className="md:text-3xl text-xl font-semibold">
            Write Your Notes..
          </h1>
          <textarea
            name="note"
            id="note"
            onChange={(e) => setText(e.target.value)}
            value={text}
            className="tex-white bg-gray-700 rounded-lg w-full h-full "
          ></textarea>
          <div className="flex gap-2">
            <button
              className="bg-purple-600 px-6 py-2 rounded-lg mt-4"
              onClick={addNote}
            >
              Add
            </button>
            <button
              className="bg-purple-600 px-6 py-2 rounded-lg mt-4"
              onClick={() => setIsToggle(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
      {notes.length > 0 ? (
        <div className="flex flex-wrap justify-center items-center gap-4 mt-10">
          {notes.map((note) => (
            <NotesCard
              id={note.id}
              note={note.title}
              key={note.id}
              deleteNote={deleteNote}
              tit = {note.tit}
            />
          ))}
        </div>
      ) : (
        "No, notes written yet Dumbass"
      )}
    </div>
  );
};

export default App;