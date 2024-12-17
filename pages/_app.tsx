import { TasksProvider } from "@/provider/TasksContext";
import "@/styles/globals.css";
import "@/styles/TaskBoard.css";
import "@/styles/TaskCard.css";
import "@/styles/Button.css";
import 'material-icons/iconfont/material-icons.css';
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <TasksProvider>
      <Component {...pageProps} />
    </TasksProvider>
  );
}
