import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import ProjectDetails from "./components/projects/ProjectDetails";
import SignedIn from "./components/auth/SignedIn";
import SignUp from "./components/auth/SignUp";
import CreateProject from "./components/projects/CreateProject";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Navbar />
                    <Switch>
                        <Route exact path="/" component={Dashboard} />
                        <Route path="/signin" component={SignedIn} />
                        <Route path="/signup" component={SignUp} />
                        <Route
                            path="/createproject"
                            component={CreateProject}
                        />

                        <Route
                            exact
                            path="/project/:id"
                            component={ProjectDetails}
                        />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
