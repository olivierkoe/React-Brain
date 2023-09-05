import React from "react";
// import TaskList from "./components/TaskList";
// import TaskForm from "./components/TaskForm";
// import { TaskContext } from "./components/context";
// import { getTasks } from "./components/data";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css'
import Accueil from './components/accueil'
const App = () => {

  // const [tasks, setTasks] = React.useState([]);

  // React.useEffect(() => {
  //   getTasks().then(response => { setTasks(response) })
  // }, [])

  return (
    <>
      <Navbar />
      <Accueil />
      <Footer />


      {/* // <TaskContext.Provider value={{ tasks, setTasks }} >
    //   <TaskForm />
    //   <TaskList />
    // </TaskContext.Provider> */}
    </>
  )
}

export default App

