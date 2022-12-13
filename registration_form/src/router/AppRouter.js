import React, { useState } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import FirstStep from "../components/FirstStep";
import Header from "../components/Header";
import SecondStep from "../components/SecondStep";
import ThirdStep from "../components/ThirdStep";
import Home from "../components/Home";

export default function AppRouter() {
  const [user, setUser] = useState({});
  const [userDetails, setUserDetails] = useState("");

  const updateUser = (data) => {
    setUser((prevUser) => ({ ...prevUser, ...data }));
  };

  const resetUser = () => {
    setUser({});
  };

  const updateUserDetails = (data) => {
    setUserDetails({ ...data });
  };
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Switch>
          <Route
            render={(props) => (
              <FirstStep {...props} user={user} updateUser={updateUser} />
            )}
            path="/"
            exact={true}
          />
          <Route
            render={(props) => (
              <SecondStep {...props} user={user} updateUser={updateUser} />
            )}
            path="/second"
          />
          <Route
            render={(props) => (
              <ThirdStep
                {...props}
                user={user}
                updateUser={updateUser}
                resetUser={resetUser}
              />
            )}
            path="/third"
          />
          <Route
            render={(props) => <Home {...props} userDetails={userDetails} />}
            path="/home"
          />{" "}
          <Route render={() => <Redirect to="/" />} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
