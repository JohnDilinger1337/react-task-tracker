import Task from "./Task";

const Tasks = ({ tasks, onDelete, onReminder }) => {
  return (
    <>
      {tasks.map((e) => (
        <Task key={e.id} task={e} onDelete={onDelete} onReminder={onReminder} />
      ))}
    </>
  );
};

export default Tasks;
