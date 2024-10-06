import Login from "./Pages/Login";
import { Route, Routes } from "react-router-dom";
import PageNotFound from "./Pages/PageNotFound";
import { useSelector } from "react-redux";
import RequireAuth from "./utils/RequireAuth";
import Dashboard from "./Pages/Dashboard";
import Layout from "./Components/DashboardWrapper/Layout";

function App() {
  const { user } = useSelector(state => state?.auth);

  return (
    <>
      <Routes>
        {/* === Public Routes === */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />

        {/* === Private Routes === */}
        <Route path="/" element={<Layout />}>
          <Route element={<RequireAuth />}>
            {user.email && (
              <>
                <Route path="dashboard" element={<Dashboard />} />
              </>
            )}
          </Route>
        </Route>

        {/* === Unknown Routes === */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  )
}

export default App
