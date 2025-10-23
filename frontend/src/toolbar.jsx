import { DraggableNode } from './draggableNode.jsx';

export const PipelineToolbar = () => {
  return (
    <div>
      <div className="palette">
        <DraggableNode type='customInput' label='Input' />
        <DraggableNode type='llm' label='LLM' />
        <DraggableNode type='customOutput' label='Output' />
        <DraggableNode type='text' label='Text' />
        <DraggableNode type='delay' label='Delay' />
        <DraggableNode type='concat' label='Concat' />
        <DraggableNode type='uppercase' label='Uppercase' />
        <DraggableNode type='math' label='Math' />
        <DraggableNode type='http' label='HTTP' />
      </div>
    </div>
  );
};
