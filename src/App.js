import NewsList from "./components/NewsList";
import Categories from "./components/Categories";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";



const App = () => {
  const params = useParams();
  console.dir(params)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={
          <>
            <Categories />
            <NewsList />
          </>
        } />
      </Routes>
    </BrowserRouter>
    // <>
    //   <Categories />
    //   <NewsList />
    // </>

  );
};
export default App;
