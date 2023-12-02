import './App.css';
import Footer from './components/footer/Footer.jsx';
import Logo from './components/logo/Logo.jsx';
import Notes from './components/notes/Notes.jsx';
import TaskList from './components/taskList/TaskList.jsx';
import Title from './components/title/Title.jsx';

function App() {
  return (
    <div className='title-app'>
      <Title />
      <div className='container'>
        <Notes />
        <div className='task-app'>
          <div className='title-list'>
            <h1>
              ToDo List
            </h1>
            <img className='monster-title' src="assets/green-monster_notes.png" alt="Monster mancha" />
          </div>
          <Logo />
          <TaskList />
        </div>
      </div>
      <Footer />
    </div>

  );
}

export default App;
