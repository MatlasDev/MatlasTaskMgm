{
  /* Lucide sempre precisa importar o icone para poder ser usado */
}
import { ChevronRight, Trash, Check, X } from "lucide-react";
import TaskDesc from "../pages/TaskDesc";
import { useNavigate } from "react-router-dom";
import Buttont from "./ButtonT.jsx";
{
  /* Ao passar valores pela funcao do componente, se for usado {} e as variaveis que serao usadas nao e nescessario usar props */
}
function Tasks({ tasks, onTaskClick, onDelTaskClick }) {
  const nav = useNavigate();

  function descClick(title, desc) {
    const query = new URLSearchParams();
    query.set("title", title);
    query.set("desc", desc);
    nav(`desc?${query.toString()}`);
  }
  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {/*.map passa por todos os valores de um objeto em lista criando uma variavel que representa o objeto atual*/}
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          {/* esse on click ativa uma funcao criada em App e enviada via props para determinar se uma tarefa foi feita ou nao */}
          <button
            onClick={() => onTaskClick(task.id)}
            className="bg-slate-400 w-full text-white p-2 rounded-md text-left flex gap-2"
          >
            {task.done ? <Check /> : <X />}
            {task.title}
          </button>
          <Buttont
            onClick={() => descClick(task.title, task.desc)}
            className="bg-slate-400 text-white p-2 rounded-md"
          >
            <ChevronRight />
          </Buttont>
          {/*  esse on click ativa uma funcao criada em App e enviada via props para apagar uma tarefa*/}
          <Buttont
            onClick={() => onDelTaskClick(task.id)}
            className="bg-slate-400 text-white p-2 rounded-md"
          >
            <Trash />
          </Buttont>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
