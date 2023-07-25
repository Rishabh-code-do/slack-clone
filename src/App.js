import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Chat from './Chat';
import {
  BrowserRouter as Router,
  Routes,
  Route} from "react-router-dom";
import Login from './Login';
import { useStateValue } from './StateProvider';
function App() {
  const [{user},dispatch] = useStateValue();
  return (
    <div className="App">
      <Router>
        {!user ? (<Login/>):(
        <>
        <Header/>
        <div className='app__body'>
          <Sidebar/>
          <Routes>
            <Route path="/room/:roomId" element={<Chat/>} />
            <Route path="/title/:title" element={<h1 className='app__welcome'>Create New +</h1>}/>
            <Route path="/" element={<div className='app__welcome'>
              <h1>Welcome To Slack</h1>
              </div>} />
          </Routes>
        </div>
        </>)}
      </Router>
    </div>
  );
}

export default App;
