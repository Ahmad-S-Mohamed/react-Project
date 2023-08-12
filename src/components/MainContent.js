import "./mainContent.css";

const MainContent = ({textContent,text}) => {
  return (
    <div>
      <main>
        <h1 style={{ color: "red" }}>{textContent}
        <br/>{text}
        </h1>
      </main>
    </div>
  );
};

export default MainContent;
