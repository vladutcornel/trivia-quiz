import React, { Suspense } from "react";

import { BrowserRouter, Link } from "react-router-dom";
import { Route, Switch } from "react-router";
import { Container, Navbar } from "react-bootstrap";
import { mdiCog } from "@mdi/js";
import Icon from "@mdi/react";

const Start = React.lazy(() => import("./pages/Start"));
const Questions = React.lazy(() => import("./pages/Questions"));
const Settings = React.lazy(() => import("./pages/Settings"));
const Leaderboard = React.lazy(() => import("./pages/Leaderboard"));

function App() {
  const fallback = <div>Loading...</div>;
  return (
    <BrowserRouter>
      <>
        <Navbar className="justify-content-between">
          <Container>
            <Link to="/" className="navbar-brand">Cornel&apos;s Trivia</Link>
            <Link to="/settings" className="nav-link">
              <Icon path={mdiCog} size={1} />
              <span className="sr-only">Settings</span>
            </Link>
          </Container>
        </Navbar>
        <Switch>
          <Route
            path="/q/:question"
            render={() => (
              <Suspense fallback={fallback}>
                <Questions />
              </Suspense>
            )}
          />
          <Route
            path="/settings"
            render={() => (
              <Suspense fallback={fallback}>
                <Settings />
              </Suspense>
            )}
          />
          <Route
            path="/leaderboard"
            render={() => (
              <Suspense fallback={fallback}>
                <Leaderboard />
              </Suspense>
            )}
          />
          <Route
            path="/"
            render={() => (
              <Suspense fallback={fallback}>
                <Start />
              </Suspense>
            )}
          />
        </Switch>
      </>
    </BrowserRouter>
  );
}

export default App;
