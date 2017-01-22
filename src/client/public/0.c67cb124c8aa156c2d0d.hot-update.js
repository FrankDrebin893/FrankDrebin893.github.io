webpackHotUpdate(0,{

/***/ 298:
/*!**********************************!*\
  !*** ./src/client/app/index.tsx ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const React = __webpack_require__(/*! react */ 299);
	const ReactDOM = __webpack_require__(/*! react-DOM */ 326);
	const react_redux_1 = __webpack_require__(/*! react-redux */ 463);
	const Home_1 = __webpack_require__(/*! ./components/views/Home */ 501);
	const store_1 = __webpack_require__(/*! ./store */ 502);
	const AboutView_1 = __webpack_require__(/*! ./components/views/about/AboutView */ 512);
	const MusicView_1 = __webpack_require__(/*! ./components/views/music/MusicView */ 513);
	const ProjectView_1 = __webpack_require__(/*! ./components/views/projects/ProjectView */ 514);
	const react_router_1 = __webpack_require__(/*! react-router */ 515);
	var reduxRouter = __webpack_require__(/*! react-router-redux */ 507);
	// Style
	__webpack_require__(/*! ../public/sass/master.scss */ 568);
	const TopNavBarContainer_1 = __webpack_require__(/*! ./containers/navigation/TopNavBarContainer */ 573);
	const app_actions_1 = __webpack_require__(/*! ./actions/app-actions */ 506);
	;
	;
	class App extends React.Component {
	    componentWillMount() {
	        const history = reduxRouter.syncHistoryWithStore(react_router_1.browserHistory, store_1.default);
	        store_1.default.dispatch(app_actions_1.setLanguage(this.props.routeParams.lang));
	        console.log("Props: ", this.props);
	        console.log("History", history);
	        console.log("State: ", store_1.default.getState());
	        //history.listen(location => reduxRouter.analyticsService.track(location.pathname));
	    }
	    render() {
	        return (React.createElement("div", { id: "app-container" },
	            React.createElement(TopNavBarContainer_1.default, null),
	            React.createElement("div", { id: "app-content" },
	                React.createElement("main", null, this.props.children))));
	    }
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = App;
	ReactDOM.render(React.createElement(react_redux_1.Provider, { store: store_1.default },
	    React.createElement(react_router_1.Router, { history: react_router_1.browserHistory },
	        React.createElement(react_router_1.Route, { path: "/:lang", component: App },
	            React.createElement(react_router_1.IndexRoute, { component: Home_1.default }),
	            React.createElement(react_router_1.Route, { path: "about", component: AboutView_1.default }),
	            React.createElement(react_router_1.Route, { path: "music", component: MusicView_1.default }),
	            React.createElement(react_router_1.Route, { path: "projects", component: ProjectView_1.default })))), document.getElementById('root'));


/***/ },

/***/ 512:
/*!*************************************************************!*\
  !*** ./src/client/app/components/views/about/AboutView.tsx ***!
  \*************************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const React = __webpack_require__(/*! react */ 299);
	;
	;
	class AboutView extends React.Component {
	    render() {
	        return (React.createElement("div", null,
	            React.createElement("span", { className: "text-span", id: "about-text" }, "Is therdasd dasdd asd\u00E6kl asdkasd a\u00E6dk as\u00E6dlk asd\u00E6lka sd \u00E6dlkas \u00E6kasd as\u00E6dlkasd \u00E6alskd asd\u00E6kasd a\u00E6skd \u00E6lkasd" + " " + "asd\u00E6laksd\u00E6lasd ok" + " " + "a dasdl\u00E6akd\u00E6alsdk \u00E6kas\u00E6dlkal\u00E6sdkasd\u00E6lakds" + " " + "as\u00E6dlkasd\u00E6lkasda\u00E6dlkdskl\u00E6sklkdsl\u00E6adlks\u00E6dkas\u00E6dlka\u00E6dkas\u00E6dkasdssssssssssssssssssssssssssssssssssssss"),
	            React.createElement("img", { id: "leon", src: "../../../../public/images/leon.png" })));
	    }
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = AboutView;


/***/ },

/***/ 513:
/*!*************************************************************!*\
  !*** ./src/client/app/components/views/music/MusicView.tsx ***!
  \*************************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const React = __webpack_require__(/*! react */ 299);
	;
	;
	class MusicView extends React.Component {
	    render() {
	        return (React.createElement("div", null,
	            React.createElement("iframe", { width: "100%", height: "166", scrolling: "no", frameBorder: "no", src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/263791874&color=ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false" }),
	            React.createElement("iframe", { width: "100%", height: "166", scrolling: "no", frameBorder: "no", src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/285887147&color=ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false" })));
	    }
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = MusicView;


/***/ }

})
//# sourceMappingURL=0.c67cb124c8aa156c2d0d.hot-update.js.map