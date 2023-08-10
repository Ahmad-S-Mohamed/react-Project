import "./mainContent.css";

const MainContent = ({textContent,text,designPy}) => {
  return (
    <div>
      <main>
        <h1 style={{ color: "red" }}>{textContent}
        <br/>{designPy}{text}</h1>
      </main>
    </div>
  );
};

export default MainContent;
