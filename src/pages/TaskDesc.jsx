import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button.jsx";
import Titulo from "../components/Titulo";

function TaskDesc() {
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const desc = searchParams.get("desc");
  const nav = useNavigate();

  function goBack() {
    nav("/");
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center ">
      <div className="w-[500px] p-4 space-y-4">
        <Titulo>{title}</Titulo>
        <div className="bg-slate-100 rounded-md space-y-4 p-4 text-center flex justify-center flex-col">
          <p className="bg-slate-400 w-full text-white rounded-md p-4">
            {desc}
          </p>
          <Button onClick={goBack}>Voltar</Button>
        </div>
      </div>
    </div>
  );
}

export default TaskDesc;
