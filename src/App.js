import './App.css';
import Logo from './components/logo/Logo.jsx';
import Notes from './components/notes/Notes.jsx';
import TaskList from './components/taskList/TaskList.jsx';

function App() {
  return (
    <div className='container'>
      <Notes />
      <div className='task-app'>
        <h1>
          ToDo List
        </h1>
        <Logo />
        <TaskList />
      </div>
    </div>
  );
}

export default App;
