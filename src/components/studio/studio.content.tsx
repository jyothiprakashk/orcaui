/* eslint-disable */
import React, { useCallback, useState } from "react";
import ReactFlow, {
  addEdge,
  Background,
  Connection,
  MarkerType
} from "react-flow-renderer";
import { EndNode } from "../node/step/end";
import { StartNode } from "../node/step/start";
import { CommandNode } from "../node/step/command";
import { CustomEdge } from "./edge";

const nodeSource = [
  {
    id: "1",
    type: "start",
    data: {
      data: { label: "Input Node" }
    },
    position: { x: 10, y: 0 }
  },
  {
    id: "2",
    type: "command",
    data: {
      label: (
        <>
          This is a <strong>default node</strong>
        </>
      )
    },
    position: { x: 200, y: 6 }
  }
];

const edgeSource = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
    type: "buttonedge"
  },
  {
    id: "e1-3",
    source: "2",
    target: "3",

    type: "buttonedge"
  }
];

const nodeTypes = { command: CommandNode, start: StartNode, end: EndNode };

const edgeTypes = {
  buttonedge: CustomEdge
};

export function StudioContent() {
  const [nodes, setNodes] = useState(nodeSource);
  const [edges, setEdges] = useState(edgeSource);

  const onConnect = useCallback(
    // @ts-ignore
    (connection: Connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges]
  );
  return (
    <div className="flex">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
        panOnScroll={false}
        zoomOnScroll={false}
        selectNodesOnDrag={false}
        maxZoom={1}
        minZoom={1}
        edgeTypes={edgeTypes}
        style={{ backgroundColor: "#B8CEFF", position: "absolute" }}
      >
        <Background color="#aaa" gap={16} />
      </ReactFlow>
    </div>
  );
}
