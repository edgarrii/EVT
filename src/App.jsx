import { Route, Routes } from "react-router-dom";

import Home from "./pages/HomePage/Home";
import Details from "./pages/DetailsPage/Details";
import NotFound from "./pages/NotFoundPage/NotFound";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import InProgress from "./pages/InProgressPage/InProgress";
import { paths } from "./consts/consts";

import "./App.scss";

const App = () => {
  return (
    <div className="pageWrapper">
      <Header />
      <div className="main">
        <Routes>
          <Route exact path={paths.home} element={<Home />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path={paths.notFound} element={<NotFound />} />
          <Route path={paths.inProgress} element={<InProgress />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
