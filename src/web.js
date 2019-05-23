// // un wimport React from 'react';
// // import { render } from 'react-dom';


// import React from 'react';
// import { render } from 'react-dom';
// import Login from './pages/login';
// import SignUp from './pages/signUp';
// import Payment from './pages/payment';
// import { typography, fontFamily, shadows } from './designSystem';

// /*
//  * <Profile /> is defined with platform-independent components
//  * from react-primitives. We can use it in our web UI, and
//  * continue to use primitives, or mix them with DOM elements
//  */
// export default () => (
//   <div>
//     <h1>Cross-platform components!</h1>
//   </div>
// );

/**
  * dom-entry.js
  * Standard ReactDOM setup for the browser
  */
 import React from 'react';
 import { render } from 'react-dom';
 import Row from './components/Row';
 
 render(<Row title='Foo' subtitle='Bar' />, document.getElementById('root'));