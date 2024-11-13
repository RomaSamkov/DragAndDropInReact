import { Task } from "./types";

type TaskCardProps = {
  task: Task;
};

export default function TaskCard({ task }: TaskCardProps) {
  return (
    <div
      //   ref={setNodeRef}
      //   {...listeners}
      //   {...attributes}
      className="cursor-grab rounded-lg bg-neutral-700 p-4 shadow-sm hover:shadow-md"
      //   style={style}
    >
      <h3 className="font-medium text-neutral-100">{task.title}</h3>
      <p className="mt-2 text-sm text-neutral-400">{task.description}</p>
    </div>
  );
}
