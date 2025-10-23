import { BaseNode } from './BaseNode.jsx';

export const LLMNode = ({ id, data }) => {
  const inputs = [
    { id: 'system' },
    { id: 'prompt' },
  ];
  const outputs = [{ id: 'response' }];

  return (
    <BaseNode id={id} title="LLM" inputs={inputs} outputs={outputs}>
      <div style={{ fontSize: 12, color: 'var(--muted)' }}>Large Language Model</div>
    </BaseNode>
  );
};
