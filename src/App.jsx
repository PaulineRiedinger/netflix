import "./App.css";
import logo from "./img/logo.png";
import data from "./assets/movies.json";

function App() {
  return (
    <>
      <header>
        <div>
          <img src={logo} alt="logo Netflix" />
        </div>
      </header>

      <main>
        {data.map((elem) => {
          return (
            <div key={elem.category}>
              <h2 className="title">{elem.category}</h2>
              <div className="movies-list">
                {elem.images.map((img, index) => (
                  <img key={index} src={img} />
                ))}
              </div>
            </div>
          );
        })}
      </main>
    </>
  );
}

export default App;
