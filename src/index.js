import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import NewItemPage from './NewItemPage';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

ReactDOM.render(
	<div className="global-wrapper">
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={App} />
				<Route path="/adiciona" component={NewItemPage} />
				{/* <Route path="/edita" component={NewItemPage} /> */}
			</Switch>
		</BrowserRouter>
	</div>
	,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
