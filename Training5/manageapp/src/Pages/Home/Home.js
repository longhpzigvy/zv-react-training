import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import Header from "../../Components/Layout/Header/Header";
import Footer from "../../Components/Layout/Footer/Footer";
import Sidebar from "../../Components/Sidebar/Sidebar";
import DashBoard from "../../Components/DashBoard/DashBoard";
import Profile from "../../Components/Profile/Profile";
import Users from "../../Components/Users/Users";
const Home = (props) => {
    const user = useSelector((state) => {
        return state.userToken;
    });
    useEffect(() => {
        if (user === null) {
            props.history.push("/login");
        }
    }, [user, props.history]);

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                height: "100%",
            }}
        >
            <Header />
            <div
                style={{
                    display: "flex",
                    width: "100%",
                }}
            >
                <Sidebar />
                <Switch>
                    <Route exact path="/home">
                        <DashBoard />
                    </Route>
                    <Route exact path="/home/profile">
                        <Profile />
                    </Route>
                    <Route path="/home/users">
                        <Users />
                    </Route>
                    <Redirect to="/home" />
                </Switch>
            </div>
            <Footer />
        </div>
    );
};
export default withRouter(Home);
