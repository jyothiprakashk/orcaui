import React from "react";
import { getBezierPath, getEdgeCenter } from "react-flow-renderer";

interface CustomInterface {
  id: string;
  sourceX: number;
  sourceY: number;
  targetX: number;
  targetY: number;
}

const foreignObjectSize = 40;

const onEdgeClick = (evt: any, id: any) => {
  evt.stopPropagation();
  alert(`remove ${id}`);
};

export function CustomEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY
}: CustomInterface) {
  const edgePath = getBezierPath({
    sourceX,
    sourceY,
    targetX,
    targetY
  });
  const [edgeCenterX, edgeCenterY] = getEdgeCenter({
    sourceX,
    sourceY,
    targetX,
    targetY
  });

  return (
    <>
      <path id={id} className="react-flow__edge-path" d={edgePath} />
      <foreignObject
        width={foreignObjectSize}
        height={foreignObjectSize}
        x={edgeCenterX - foreignObjectSize / 2}
        y={edgeCenterY - foreignObjectSize / 2}
        className="edgebutton-foreignobject"
        requiredExtensions="http://www.w3.org/1999/xhtml"
      >
        <button
          className="edgebutton"
          onClick={(event) => onEdgeClick(event, id)}
          style={{ fontSize: "28px" }}
        >
          +
        </button>
      </foreignObject>
    </>
  );
}
