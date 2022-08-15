import Form from "./Form";
import "../stylesheets/ListofTask.css";
import React, { JSXElementConstructor, ReactNode, useState } from "react";
import Task from "./Task";

const ListofTask = () => {
  const [almacenedTask, newTask] = useState<any[]>([]);

  const AddTask = (e: any) => {
    if (e.text.trim()) {
      e.text = e.text.trim();
      const update = [e, ...almacenedTask];
      newTask(update);
    }
  };

  const deleteTask = (id: any) => {
    const update = almacenedTask.filter((e) => e.id !== id);
    newTask(update);
  };

  const compTask = (id: any) => {
    const update = almacenedTask.map((e) => {
      if (e.id === id) {
        e.complete = !e.complete;
      }
      return e;
    });
    newTask(update);
  };

  return (
    <>
      <Form onSubmit={AddTask} />
      <div className="task-list-container">
        {almacenedTask.map((e) => (
          <Task
            key={e.id}
            id={e.id}
            text={e.text}
            complete={e.complete}
            compTask={compTask}
            deleteTask={deleteTask}
          />
        ))}
      </div>
    </>
  );
};

export default ListofTask;
