import { Suspense, lazy } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Home from "./components/Home";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import Header from "./components/Header";
import { AuthProvider } from "./utils/authContext/authContext";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import store from "./redux/store";
const LazyUser = lazy(() => import("./components/User"));
function App() {
  return (
    <>
      <ErrorBoundary fallback={<p>Something went wrong</p>}>
        <AuthProvider>
          <Provider store={store}>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route element={<RequireAuth />}>
                <Route
                  path="/user"
                  element={
                    <Suspense fallback={<div>Loading...</div>}>
                      <LazyUser />
                    </Suspense>
                  }
                />
              </Route>
            </Routes>
          </Provider>
        </AuthProvider>
      </ErrorBoundary>
    </>
  );
}

export default App;
