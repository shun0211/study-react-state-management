import type { AppProps } from "next/app";
import { useState } from "react";
import { Header } from "src/components/Header";
import { Todo } from "src/types";

export default function MyApp({ Component, pageProps }: AppProps) {
  const TODOS: Todo[] = [
    { id: 1, text: "foo", isDone: false },
    { id: 2, text: "bar", isDone: true },
  ];

  const [todos, setTodos] = useState<Todo[]>(TODOS)

  return (
    <>
      <Header todoCount={todos.length}/>
      <main>
        <Component {...pageProps} todos={todos} setTodos={setTodos} />;
      </main>
    </>
  );
}
