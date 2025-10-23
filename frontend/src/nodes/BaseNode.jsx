import { Handle, Position } from 'reactflow';

export const BaseNode = ({
  id,
  title,
  children,
  inputs = [],
  outputs = [],
  style = {},
}) => {
  return (
    <div
      style={{
        minWidth: 220,
        minHeight: 84,
        border: '1px solid var(--node-border)',
        borderRadius: 12,
        background: 'linear-gradient(180deg, var(--panel), var(--panel-2))',
        boxShadow: '0 10px 30px rgba(0,0,0,0.25)',
        color: 'var(--text)',
        padding: 10,
        position: 'relative',
        ...style,
      }}
    >
      <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 8, color: 'var(--muted)' }}>{title}</div>
      <div>{children}</div>
      {/* Inputs (targets) */}
      {inputs.map((inp, index) => (
        <Handle
          key={`in-${inp.id}`}
          type="target"
          position={Position.Left}
          id={`${id}-${inp.id}`}
          style={{ top: `${(index + 1) * (100 / (inputs.length + 1))}%`, background: 'var(--handle)' }}
        />
      ))}
      {/* Outputs (sources) */}
      {outputs.map((out, index) => (
        <Handle
          key={`out-${out.id}`}
          type="source"
          position={Position.Right}
          id={`${id}-${out.id}`}
          style={{ top: `${(index + 1) * (100 / (outputs.length + 1))}%`, background: 'var(--handle)' }}
        />
      ))}
    </div>
  );
};
