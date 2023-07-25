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
            <Route path="/" element={<h1>Welcome</h1>} />
          </Routes>
        </div>
        </>)}
      </Router>
    </div>
  );
}

export default App;
