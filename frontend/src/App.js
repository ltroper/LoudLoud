import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import SplashPage from "./components/SplashPage";
import UploadFormPage from "./components/UploadFormPage/UploadFormPage";
import EditFormPage from "./components/UploadFormPage/EditFormPage";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  const sessionUser = useSelector(state => state.session.user);





  return (
    <>
      ({sessionUser && (<Navigation />)})
      {isLoaded && (
        <Switch>
          <Route exact path="/">
            <SplashPage isLoaded={isLoaded} />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/upload">
            <UploadFormPage user={sessionUser}/>
          </Route>
          <Route path="/edit/:trackId">
            <EditFormPage user={sessionUser}/>
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
