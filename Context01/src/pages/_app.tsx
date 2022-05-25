import type { AppProps } from "next/app";
import { createContext, useContext, useState } from "react";
import { Header } from "src/components/Header";
import { Todo } from "src/types";

const TODOS: Todo[] = [
  { id: 1, text: "foo", isDone: false },
  { id: 2, text: "bar", isDone: true },
];

export const ThemeContext = createContext("light");
export const LangContext = createContext("ja");

export default function MyApp({ Component, pageProps }: AppProps) {
  const [todos, setTodos] = useState<Todo[]>(TODOS)
  const [theme, setTheme] = useState("light")


  return (
    <>
      <ThemeContext.Provider value={theme}>
        <Header todoCount={todos.length}/>
        <main>
          <button onClick={() => {
            setTheme((prev) => (prev === 'dark' ? "light" : "dark"))
          }}>テーマ切り替え</button>
          <Component {...pageProps} todos={todos} setTodos={setTodos} />;
        </main>
      </ThemeContext.Provider>
    </>
  );
}
