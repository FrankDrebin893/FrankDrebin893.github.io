import * as React from "react";
import { Link } from 'react-router';
import AboutView from '../about/AboutView';
import { IAppProps } from '../../../index';
import $ from 'jquery'

interface IMusicViewProps extends IAppProps { };

interface IMusicViewState { };

class MusicView extends React.Component<IMusicViewProps, IMusicViewState> {
    public render(): JSX.Element {
        return (
            <div>
            <iframe width="100%" height="166" scrolling="no" frameBorder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/263791874&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>
            <iframe width="100%" height="166" scrolling="no" frameBorder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/285887147&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>
            </div>);
    }
}

export default MusicView;
