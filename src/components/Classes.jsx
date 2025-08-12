export default function ClassList({ classes, selectedClass, setSelectedClass }) {
  return (
    <div className="class-select">
      {classes.map((cls) => {
        return (
          <a
            key={cls.name}
            onClick={() => setSelectedClass(cls)}
            className={cls.name === selectedClass?.name ? "selected" : ""}
          >
            {cls.name}
          </a>
        );
      })}
    </div>
  );
}
