// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Greeting from './components/Greeting';

// const App = () => (
//   <Router>
//     <div>
//       <Routes>
//         <Route exact path="/" element={<Greeting />} />
//         {/* More routes here if needed */}
//         <Route component={() => <div>404 Not Found</div>} />
//       </Routes>
//     </div>
//   </Router>
// );

// export default App;

// ====================

// import "@hotwired/turbo-rails"
// import axios from 'axios';
// import Greeting from './components/Greeting';
// import { useEffect, useState } from 'react';
// // import "../controllers/hello_controller"
// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// const API_URL = 'http://localhost:3001/api/v1/messages';

// function getAPIData() {
//   return axios.get(API_URL).then((response) => response.data);
// }

// function App() {
//   <Router>
//     <div>
//       <Routes>
//         <Route exact path="/" element={<Greeting />} />
//         {/* More routes here if needed */}
//         <Route component={() => <div>404 Not Found</div>} />
//       </Routes>
//     </div>
//   </Router>
// };



// function App() {
//   return (<h1>Hello Wooooorld!</h1>);
// }



// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//      <App/>,
//   </React.StrictMode>
// );

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (<h1>Hello World!</h1>);
}

// ReactDOM.render(
//   <App/>,
//   document.getElementById('root'),
// );

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
