import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import { useState } from "react";
import { useEffect } from "react";
import Titulo from "./components/Titulo";
function App() {
  let [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  function onTaskClick(taskid) {
    const newTasks = tasks.map((task) => {
      if (task.id == taskid) {
        //puxando os valores do objeto inteiro e alterando somente "done" para seu oposto
        return { ...task, done: !task.done };
      } else {
        return task;
      }
    });
    setTasks(newTasks);
  }

  function onDelTaskClick(taskid) {
    const newTask = tasks.filter((task) => task.id != taskid);

    setTasks(newTask);
  }

  function onTaskAdd(title, desc) {
    const newTasks = {
      id: tasks.length + 1,
      title: title,
      desc: desc,
      done: false,
    };
    setTasks([...tasks, newTasks]);
  }

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center ">
      <div className="w-[500px] p-4 space-y-4">
        <Titulo>Gerenciador de Tarefas</Titulo>
        <AddTask onTaskAdd={onTaskAdd} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDelTaskClick={onDelTaskClick}
        />
      </div>
    </div>
  );
}

export default App;
