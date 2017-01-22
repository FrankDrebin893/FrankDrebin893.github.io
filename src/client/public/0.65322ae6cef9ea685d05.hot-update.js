webpackHotUpdate(0,{

/***/ 312:
/*!**********************************!*\
  !*** ./src/client/app/index.tsx ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const React = __webpack_require__(/*! react */ 313);
	const ReactDOM = __webpack_require__(/*! react-DOM */ 340);
	const react_redux_1 = __webpack_require__(/*! react-redux */ 477);
	const Home_1 = __webpack_require__(/*! ./components/views/Home */ 514);
	const store_1 = __webpack_require__(/*! ./store */ 515);
	const AboutView_1 = __webpack_require__(/*! ./components/views/about/AboutView */ 525);
	const MusicView_1 = __webpack_require__(/*! ./components/views/music/MusicView */ 526);
	const ProjectView_1 = __webpack_require__(/*! ./components/views/projects/ProjectView */ 527);
	const react_router_1 = __webpack_require__(/*! react-router */ 528);
	var reduxRouter = __webpack_require__(/*! react-router-redux */ 520);
	// Style
	__webpack_require__(/*! ../public/sass/master.scss */ 581);
	const TopNavBarContainer_1 = __webpack_require__(/*! ./containers/navigation/TopNavBarContainer */ 586);
	const app_actions_1 = __webpack_require__(/*! ./actions/app-actions */ 519);
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

/***/ 525:
/*!*************************************************************!*\
  !*** ./src/client/app/components/views/about/AboutView.tsx ***!
  \*************************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const React = __webpack_require__(/*! react */ 313);
	;
	;
	class AboutView extends React.Component {
	    render() {
	        return (React.createElement("div", null,
	            React.createElement("span", { className: "text-span", id: "about-text" }, "Hies asdkasd a\u00E6dk as\u00E6dlk asd\u00E6lka sd \u00E6dlkas \u00E6kasd as\u00E6dlkasd \u00E6alskd asd\u00E6kasd a\u00E6skd \u00E6lkasd" + " " + "asdd"),
	            React.createElement("img", { id: "leon", src: "../../../../public/images/leon.png" })));
	    }
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = AboutView;


/***/ },

/***/ 526:
/*!*************************************************************!*\
  !*** ./src/client/app/components/views/music/MusicView.tsx ***!
  \*************************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const React = __webpack_require__(/*! react */ 313);
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
//# sourceMappingURL=0.65322ae6cef9ea685d05.hot-update.js.map