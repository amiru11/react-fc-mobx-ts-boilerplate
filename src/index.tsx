import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';

import Root from 'client/Root';
import * as serviceWorker from './serviceWorker';

import './index.scss';

const ROOT_DIV_ID = 'root';

ReactDOM.render(<Root />, document.getElementById(ROOT_DIV_ID));

serviceWorker.unregister();
