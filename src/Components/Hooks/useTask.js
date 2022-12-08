import { useEffect, useState } from "react";

const useTask = () => {
  const [task, setTask] = useState([]);
  useEffect(() => {
    fetch('https://todo-server.up.railway.app/tasks')
      .then(res => res.json())
      .then(data => {
        setTask(data);
      })
  }, [task]);
  return { task };
};

export default useTask;