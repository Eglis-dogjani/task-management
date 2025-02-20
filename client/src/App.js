import './App.css';
import Filterbar from './Components/Filterbar'
import Navbar from './Components/Navbar';
import { TaskProvider } from './Context/TaskContext.js';
import Tasks from "./Components/TaskList"

function App() {
    return (
        <>
            <TaskProvider>
                <Navbar />
                <Filterbar />
                <Tasks />
            </TaskProvider>
        </>
    );
}

export default App;
