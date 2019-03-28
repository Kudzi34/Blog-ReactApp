const initState = {
    projects: [
        { id: "1", title: "Petition", content: "handlebars" },
        { id: "2", title: "Socialnetwork", content: "React" },
        { id: "3", title: "Malmö rugby Website", content: "handlebars" }
    ]
};

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case "CREATE_PROJECT":
            console.log("created project", action.project);
            return state;
        case "CREATE_PROJECT_ERROR":
            console.log("created project error", action.err);
            return state;
        default:
            return state;
    }
};

export default projectReducer;
