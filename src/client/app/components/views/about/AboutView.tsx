import { ok } from 'assert';
import * as React from "react";
import { Link } from 'react-router';
import { IAppProps } from '../../../index';

interface IAboutViewProps extends IAppProps {
};

interface IAboutViewState { };

class AboutView extends React.Component<IAboutViewProps, IAboutViewState> {
    public render(): JSX.Element {
        return (
            <div>
            <span className="text-span" id="about-text">
            Will it ever work. I don't think so'xxxxxx
            asdd</span>
                <img id="leon" src="../../../../public/images/leon.png" />
            </div>);
    }
}

export default AboutView;
