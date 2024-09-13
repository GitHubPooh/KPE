const Skills = () => {
  const skills = [
    { name: "User Interface", bgColor: "#FFF8F8" },
    { name: "Mobile Apps", bgColor: "#E5F4FB" },
    { name: "WebSite & WebApp", bgColor: "#E4FCF9" },
    { name: "Product development", bgColor: "#F9EDFF" },
    { name: "Portfolio", bgColor: "#F0F9E0" },
    { name: "Desktop App", bgColor: "#FFF0F0" },
    // Add more skills here as needed
  ];

  return (
    <ul className="d-flex flex-wrap align-items-center style-none skils-list">
      {skills.map((skill, index) => (
        <li key={index}>
          <span style={{ backgroundColor: skill.bgColor }}>{skill.name}</span>
        </li>
      ))}
      <li>&amp; more…</li>
    </ul>
  );
};

export default Skills;
