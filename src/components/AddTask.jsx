import { useState } from "react";
import Input from "./Input";
import Button from "./Button";

function AddTask(props) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <Input
        type="text"
        placeholder="Digite o nome da tarefa"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <Input
        type="text"
        placeholder="Digite detalhes da tarefa"
        value={desc}
        onChange={(event) => setDesc(event.target.value)}
      />
      <Button
        onClick={() => {
          if (title.trim() === "" || desc.trim() === "") {
            alert("Preencha todos os campos");
            return;
          }
          props.onTaskAdd(title, desc);
          setTitle("");
          setDesc("");
        }}
      >
        Adicionar
      </Button>
    </div>
  );
}

export default AddTask;
