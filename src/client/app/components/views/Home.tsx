import * as React from "react";

interface IHomeProps {};

interface IHomeState {};

console.log("Entered home");
class Home extends React.Component<IHomeProps, IHomeState> {
    public render(): JSX.Element {
        return (<div>Home component</div>);
    }
}

export default Home;
