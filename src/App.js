import logo from './logo.svg';
import './App.css';
import { Col, Row } from 'react-grid-system';
import kanbanLogo from "../src/assets/kanban_image.png";
import KanbanBoard from './components/KanbanBoard';

function App() {
  return (
    <div className="App">
      <div className='flexbox-container'>
        <img src={kanbanLogo} style={{ width: 75, height: 60}} alt='logo' ></img>
        <h2 style={{color:"#1ba94c" ,margin:15 }}>Kanban Dashboard</h2>
      </div>
      <br/>
      <KanbanBoard/>
    </div>
  );
}

export default App;
