const Tools = () => {
  const toolNames = [
    "Java",
    "React JS",
    "PHP",
    "Ruby on Rails",
    "Flutter",
    "JavaScript",
    "NodeJS",
  ];

  return (
    <ul className="style-none tx-dark fs-20 tools-list">
      {toolNames.map((toolName) => (
        <li key={toolName}>{toolName}</li>
      ))}
    </ul>
  );
};

export default Tools;
