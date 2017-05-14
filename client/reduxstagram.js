import React from 'react';

import { render } from 'react-dom';

// Import css:
import css from './styles/style.styl';

// import component:
import Main from './components/Main';

render(<Main><p>hello</p></Main>, document.getElementById('root'));
