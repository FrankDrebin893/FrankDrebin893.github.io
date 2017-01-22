import * as React from "react";

interface IProjectViewProps {};

interface IProjectViewState {};

class ProjectView extends React.Component<IProjectViewProps, IProjectViewState> {
    public render(): JSX.Element {
        return (<div>These are my projects!</div>);
    }
}

export default ProjectView;
