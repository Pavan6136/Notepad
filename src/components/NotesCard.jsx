import React from "react";
import { Trash, Save } from "lucide-react";
const NotesCard = ({ note, id ,tit, deleteNote }) => {
  const handleDownload = (e) => {
    e.preventDefault();
    const blob = new Blob([note],{type:"text/plain"});
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href=url;
   
      a.download=`${tit}.txt`;
  
    a.click();
    URL.revokeObjectURL(url);
  }
  return (
    <div className="flex flex-col justify-between items-center w-64 h-64 bg-gray-800 rounded-lg shadow-lg p-4 m-4">
      <div className="flex justify-center w-full items-center bg-orange-600 rounded-lg p-2">
        <p className="text-sm text-white">{id}</p>
      </div>
      <h1 className="text-lg font-bold text-center px-2 overflow-hidden break-words">{tit}</h1>
      <p className="text-lg font-bold text-center px-2 overflow-hidden break-words">{note}</p>
      <div className="flex justify-between w-full  bg-indigo-600 rounded-lg p-2 mt-2">
      <button className="text-green-400 hover:text-red:green-500 cursor-pointer" onClick={handleDownload}>
          <Save />
        </button>
        <button className="text-red-400 hover:text-red:500 cursor-pointer" onClick={()=>deleteNote(id)}>
          <Trash />
        </button>
        
      </div>
    </div>
  );
};

export default NotesCard;