import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUs from "./layout/routes/aboutUs";
import ConfirmOrder from "./layout/routes/confirmOrder";
import contactUs from "./layout/routes/contactUs";
import Home from "./layout/routes/home";
import Service from "./layout/routes/services";
import "./style/index.css";
import BookingList from "./layout/routes/BookingList";
import ThankYou from "./layout/routes/thankYou";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/aboutUs" Component={AboutUs} />
          <Route path="/contactUs" Component={contactUs} />
          <Route path="/services/:id" Component={Service} />
          <Route path="/service/:id" Component={ConfirmOrder} />
          <Route path="/BookingList" Component={BookingList} />
          <Route path="/thank-you" Component={ThankYou} />

        </Routes>
      </div>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
