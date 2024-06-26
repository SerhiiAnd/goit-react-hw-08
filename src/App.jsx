import "./App.css";
import { Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { refreshUser } from "./redux/auth/operations";
import { selectRefreshing } from "./redux/auth/selectors";
import { RestrictedRoute } from "./components/RestrictedRoute/RestrictedRoute";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Contacts from "./pages/Contacts";
import Layout from "./components/Layout/Layout";

function App() {
  const isRefreshing = useSelector(selectRefreshing);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <h3 className="load">Loading...</h3>
  ) : (
    <div className="app-container">
      {" "}
      {}
      <Layout>
        <Suspense fallback={<h2>Loading...</h2>}>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  component={<Registration />}
                  redirectTo="/contacts"
                ></RestrictedRoute>
              }
            ></Route>
            <Route
              path="/login"
              element={
                <RestrictedRoute component={<Login />} redirectTo="/contacts" />
              }
            ></Route>
            <Route
              path="/contacts"
              element={
                <PrivateRoute
                  component={<Contacts />}
                  redirectTo="/login"
                ></PrivateRoute>
              }
            ></Route>
          </Routes>
        </Suspense>
      </Layout>
    </div>
  );
}

export default App;
