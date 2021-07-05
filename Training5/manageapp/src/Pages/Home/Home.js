import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Switch, Route } from "react-router-dom";
import Header from "../../Components/Layout/Header/Header";
import Footer from "../../Components/Layout/Footer/Footer";
import Sidebar from "../../Components/Sidebar/Sidebar";
import DashBoard from "../../Components/DashBoard/DashBoard";
import Profile from "../../Components/Profile/Profile";
import Users from "../../Components/Users/Users";
export default function Home() {
    const user = useSelector((state) => {
        return state.userToken;
    });
    useEffect(() => {
        if (user === null) {
            window.location.replace("/login");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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
                    <Route path="/home/profile">
                        <Profile />
                    </Route>
                    <Route path="/home/users">
                        <Users />
                    </Route>
                </Switch>
            </div>
            <Footer />
        </div>
    );
}
