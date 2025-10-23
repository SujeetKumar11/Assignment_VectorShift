import { useState } from 'react';
import { BaseNode } from './BaseNode.jsx';

export const DelayNode = ({ id, data }) => {
  const [ms, setMs] = useState(data?.ms ?? 500);
  return (
    <BaseNode id={id} title="Delay" inputs={[{ id: 'in' }]} outputs={[{ id: 'out' }]}>
      <label style={{ display: 'grid', gap: 6 }}>
        <span style={{ fontSize: 12, color: 'var(--muted)' }}>Milliseconds</span>
        <input
          type="number"
          min={0}
          value={ms}
          onChange={(e) => setMs(Number(e.target.value))}
          style={{ borderRadius: 8, border: '1px solid #2a3a5e', background: '#0f1a2e', color: 'var(--text)', padding: '6px 8px' }}
        />
      </label>
    </BaseNode>
  );
};
