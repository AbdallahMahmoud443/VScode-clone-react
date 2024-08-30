import { ReactNode } from "react";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";

interface IProps {
  Sidebar: ReactNode;
  Main: ReactNode;
  showSideBar: boolean;
}
const ResizablePanel = ({ Sidebar, Main, showSideBar }: IProps) => {
  return (
    <>
      <PanelGroup autoSaveId="conditional" direction="horizontal">
        {showSideBar && (
          <>
            <Panel
              id="sidebar"
              minSize={10}
              order={1}
              defaultSize={15}
              collapsible
            >
              {Sidebar}
            </Panel>
            <PanelResizeHandle className="border-r-2 border-[#64646473]" />
          </>
        )}
        <Panel minSize={30} order={2} defaultSize={85}>
          {Main}
        </Panel>
      </PanelGroup>
    </>
  );
};

export default ResizablePanel;
