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
    position: { x: 200, y: 0 }
  },
  {
    id: "3",
    type: "end",
    data: { label: "Input Node" },
    position: { x: 400, y: 0 }
  }
];
const nodeTypes = { command: CommandNode, start: StartNode, end: EndNode };

const edgeSource = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
    animated: true,
    markerEnd: {
      type: MarkerType.ArrowClosed
    }
  },
  {
    id: "e1-3",
    source: "2",
    target: "3",
    animated: true,
    markerEnd: {
      type: MarkerType.ArrowClosed
    }
  }
];

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
        style={{ backgroundColor: "#B8CEFF", position: "absolute" }}
      >
        <Background color="#aaa" gap={16} />
      </ReactFlow>
    </div>
  );
}
