import * as React from "react";
import * as ReactDOM from "react-DOM";
import { Provider } from 'react-redux';
import Home from './components/views/Home';
import store from './store';
import AboutView from './components/views/about/AboutView';
import MusicView from './components/views/music/MusicView';
import ProjectView from './components/views/projects/ProjectView';
import {
    Route,
    Router,
    IndexRoute,
    Link,
    browserHistory,
    hashHistory
} from 'react-router';
var reduxRouter = require('react-router-redux')

// Style
import '../public/sass/master.scss';
import TopNavBarContainer from './containers/navigation/TopNavBarContainer';
import { setLanguage } from './actions/app-actions';
import {AppContainer} from 'react-hot-loader';

console.log(AppContainer);


export interface IAppProps {
    params: {
        lang: string
    },
    routeParams: {
        lang: string
    }
};

interface IAppState { };

class App extends React.Component<IAppProps, IAppState> {

    componentWillMount() {
        const history = reduxRouter.syncHistoryWithStore(browserHistory, store);
        store.dispatch(setLanguage(this.props.routeParams.lang));
        console.log("Props: ", this.props);
        console.log("History", history);
        console.log("State: ", store.getState());
        //history.listen(location => reduxRouter.analyticsService.track(location.pathname));
    }

    public render(): JSX.Element {
        return (
            <div id="app-container">
                <TopNavBarContainer />
                <div id="app-content">
                    <main>
                        {this.props.children}
                    </main>
                </div>
            </div>
        );
    }
}

export default App;

ReactDOM.render(
        <Provider store={store}>
            <Router history={browserHistory}>
                <Route path="/:lang" component={App}>
                    <IndexRoute component={Home} />
                    <Route path="about" component={AboutView} />
                    <Route path="music" component={MusicView} />
                    <Route path="projects" component={ProjectView} />
                    <Route path="lol" component={MusicView} />

                </Route>
            </Router>
        </Provider>, document.getElementById('root'));