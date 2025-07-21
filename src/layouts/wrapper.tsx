import React from "react";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup
} from "@/components/ui/resizable";

interface Props {
  sidebar: React.ReactNode;
  children: React.ReactNode;
}

export function Wrapper({ children, sidebar }: Props) {
  return (
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel minSize={25} defaultSize={25}>
        {sidebar}
      </ResizablePanel>

      <ResizableHandle />

      <ResizablePanel>{children}</ResizablePanel>
    </ResizablePanelGroup>
  );
}
