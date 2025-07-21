// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

import { contextBridge, ipcRenderer } from "electron";
import { WindowAction } from "./shared/types/utils";

const renderer = {
  close: () => {
    ipcRenderer.send(WindowAction.Close);
  },
  minimize: () => {
    ipcRenderer.send(WindowAction.Minimize);
  },
  maximize: () => {
    ipcRenderer.send(WindowAction.Maximize);
  }
};

contextBridge.exposeInMainWorld("electron", renderer);

export type IRenderer = typeof renderer;
