import * as fs from "fs";
import { NextApiRequest } from "next";

const FILENAME = "tasks.json";

interface Task {
  id: number;
  name: string;
  task: string;
  priority: string;
  date: string;
}

const saveData = (tasks: Task[]) => {
  fs.writeFileSync(FILENAME, JSON.stringify({ tasks }));
};

const readData = () => {
  try {
    const data = JSON.parse(fs.readFileSync(FILENAME, "utf8")) as {
      tasks: Task[];
    };
    return data;
  } catch (error) {
    return { tasks: [] };
  }
};

export default function handler(req: NextApiRequest, res) {
  const { tasks } = req.body;
  const db = readData();

  switch (req.method) {
    case "POST":
      db.tasks = [...db.tasks, ...tasks];
      saveData(db.tasks);
      return res.status(200).end();

    case "GET":
      console.log(db);
      return res.status(200).json(db);

    case "DELETE":
      const { taskId } = req.body;
      db.tasks = db.tasks.filter((task) => task.id !== taskId);
      saveData(db.tasks);
      return res.status(200).end();
  }
}
