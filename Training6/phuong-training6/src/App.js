import React from "react"
import './App.css';
import HomePage from "./pages/home/index"
import ProfilePage from "./pages/profile/index"
import UsersPage from "./pages/users/index"
import { BrowserRouter, Switch, Router, Redirect } from "react-router-dom"
import customHistory from "./utils/history"
import RouteLayout from "./components/route-layout/route-layout"
import LoginPage from "./pages/login/index"
import UserDetail from "./pages/users/user-detail/index"

export const routes = [
  {
    href: "/app",
    exact: true,
    title: "Home",
    component: HomePage,
  },
  {
    href: "/app/profile",
    exact: true,
    title: "Profile",
    component: ProfilePage,
  },
  {
    href: "/app/users",
    exact: true,
    title: "Users",
    component: UsersPage,
  },
  {
    href: "/login",
    exact: true,
    title: "Login",
    component: LoginPage,
  },
  {
    href: "/app/users/:id",
    exact: true,
    title: "User Detail",
    component: UserDetail,
  },
];

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Router history={customHistory}>
          <Switch>
            {routes.map(({ href, exact, component }) => (
              <RouteLayout
                key={href}
                path={href}
                exact={exact}
                component={component}
              />
            ))}
            <Redirect from="*" to="/app" />
          </Switch>
        </Router>
      </BrowserRouter>
    </div>
  );
}

export default App;
