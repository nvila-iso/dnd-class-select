import { useState } from "react";
import { classes } from "./data";
import ClassList from "./components/Classes";
import ClassInfo from "./components/ClassInfo";
import "./App.css";

function App() {
  const [characterClasses] = useState(classes);
  const [selectedClass, setSelectedClass] = useState();

  return (
    <main>
      <h1>CLASS SELECT</h1>
      {/* <div className="class-img"></div> */}
      {/* <div className="class-desc"></div> */}
      {/* <ClassIcon /> */}
      <ClassInfo cls={selectedClass} />
      <ClassList
        classes={characterClasses}
        selectedClass={selectedClass}
        setSelectedClass={setSelectedClass}
      />
    </main>
  );
}

export default App;
