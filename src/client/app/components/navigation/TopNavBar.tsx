import * as React from "react";
import { IAppProps } from '../../index';
import { Link } from 'react-router';

interface ITopNavBarProps extends IAppProps { lang:string };

interface ITopNavBarState { };

class TopNavBar extends React.Component<ITopNavBarProps, ITopNavBarState> {
    public render(): JSX.Element {
        return (
            <nav id="top-nav-bar">
                <div id="nav-links">
                    <Link to={"/" + this.props.lang + "/about"}>About</Link>
                    <Link to={"/" + this.props.lang + "/music"}>Music</Link>
                    <Link to={"/" + this.props.lang + "/projects"}>Software portfolio</Link>
                </div>
            </nav>);
    }
}

export default TopNavBar;
