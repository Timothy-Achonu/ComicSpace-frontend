import Routing from "./components/Routing/Routing";
import { useEffect } from "react";
import { useStateProvider } from "./utilities/StateProvider";
import { reducerCases } from "./utilities/Constants";

function App() {
  const [initialState, dispatch] = useStateProvider()
  console.log(initialState)

  useEffect(() => {
    fetch("https://comicspace.onrender.com/api/v1/books")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("books", data);
        dispatch({type: reducerCases.SET_BOOKS, books: data.data})
      });

    fetch("https://comicspace.onrender.com/api/v1/categories")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // console.log("categories", data);
      });
      
    fetch("https://comicspace.onrender.com/api/v1/books?category=64377daeff20d42185b606a9")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // console.log("Each categories", data);
      });
  }, []);

  return (
    <div className="App">
      <Routing />
    </div>
  );
}
export default App;
