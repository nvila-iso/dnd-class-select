import { useState } from "react";

export default function ClassInfo({ cls, selectedClass }) {
  if (!cls) {
    return (
      <>
        <div className="class-img">
          <img src="src/assets/question-mark.svg" />
        </div>

        <div className="class-desc">
          <p>Something here</p>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="class-img">
        <img src={`src/assets/classes/${cls.image}`} alt={cls.name} />
      </div>
      <div className="class-desc">
        <p>{cls.description}</p>
      </div>
    </>
  );
}
