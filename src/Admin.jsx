import { Route, Routes } from "react-router-dom";
import AdminSignIn from "./AdminComponents/AdminSignIn";
import AdminSlider from "./AdminComponents/AdminSlider";

function Admin() {
  return (
    <>
      <Routes>
        <Route path="/signin" element={<AdminSignIn />} />
        <Route path="/slider" element={<AdminSlider />} />
      </Routes>
    </>
  );
}
export default Admin;
