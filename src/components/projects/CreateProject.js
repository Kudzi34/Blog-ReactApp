import React, { Component } from "react";
import { connect } from "react-redux";
import { createProject } from "./projectActions";
import { Redirect } from "react-router-dom";

class CreateProject extends Component {
    state = {
        title: "",
        content: ""
    };
    handleChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        });
    };
    handleSubmit = e => {
        e.preventDefault();
        this.props.createProject(this.state);
        this.props.history.push("/");
    };
    render() {
        const { auth } = this.props;
        if (!auth.uid) return <Redirect to={"/signin"} />;
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="White">
                    <h5 className="silver text text-darken-3">Create Blog</h5>
                    <div className="input-field">
                        <label htmlFor="title">Blog Title</label>
                        <input
                            type="text"
                            id="title"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Blog Content</label>
                        <textarea
                            className="materialize text-area"
                            type="text"
                            id="content"
                            onChange={this.handleChange}
                        />
                    </div>

                    <div className="input-field">
                        <button className="btn blue-lighten-4 z-depth-0">
                            Create Blog
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        auth: state.firebase.auth
    };
};

const mapDispatchToProps = dispatch => {
    return {
        createProject: project => dispatch(createProject(project))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateProject);
