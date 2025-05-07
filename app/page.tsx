"use client";
import { useState } from "react";

export default function Home() {
  const [todos, setTodos] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const addTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    setTodos([input.trim(), ...todos]);
    setInput("");
  };

  const removeTodo = (idx: number) => {
    setTodos(todos.filter((_, i) => i !== idx));
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground p-4">
      <div className="w-full max-w-md bg-white dark:bg-zinc-900 rounded-xl shadow p-6">
        <h1 className="text-2xl font-semibold mb-4 text-center">Todo List</h1>
        <form onSubmit={addTodo} className="flex gap-2 mb-6">
          <input
            className="flex-1 px-3 py-2 border border-zinc-200 dark:border-zinc-700 rounded focus:outline-none focus:ring-2 focus:ring-black/10 dark:bg-zinc-800"
            type="text"
            placeholder="Add a new todo..."
            value={input}
            onChange={e => setInput(e.target.value)}
            aria-label="Add todo"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-black text-white rounded hover:bg-zinc-800 transition-colors"
          >
            Add
          </button>
        </form>
        <ul className="space-y-2">
          {todos.length === 0 && (
            <li className="text-zinc-400 text-center">No todos yet.</li>
          )}
          {todos.map((todo, idx) => (
            <li key={idx} className="flex items-center justify-between bg-zinc-50 dark:bg-zinc-800 rounded px-3 py-2">
              <span>{todo}</span>
              <button
                onClick={() => removeTodo(idx)}
                className="text-zinc-400 hover:text-red-500 transition-colors text-sm"
                aria-label={`Remove todo: ${todo}`}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
