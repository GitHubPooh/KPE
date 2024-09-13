const Tools2 = () => {
  const toolNames = [
    "AWS Cloud",
    "Azure Cloud",
    "Firebase",
    "OutSystem",
    ".Net",
    "Python",
    "AI & Machine Learning",
  ];

  return (
    <ul className="style-none tx-dark fs-20 tools-list">
      {toolNames.map((toolName) => (
        <li key={toolName}>{toolName}</li>
      ))}
    </ul>
  );
};

export default Tools2;
