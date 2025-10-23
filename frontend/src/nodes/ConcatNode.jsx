import { useState } from 'react';
import { BaseNode } from './BaseNode.jsx';

export const ConcatNode = ({ id, data }) => {
  const [separator, setSeparator] = useState(data?.separator ?? ' ');
  return (
    <BaseNode id={id} title="Concat" inputs={[{ id: 'a' }, { id: 'b' }]} outputs={[{ id: 'out' }]}>
      <label style={{ display: 'grid', gap: 6 }}>
        <span style={{ fontSize: 12, color: 'var(--muted)' }}>Separator</span>
        <input
          type="text"
          value={separator}
          onChange={(e) => setSeparator(e.target.value)}
          style={{ borderRadius: 8, border: '1px solid #2a3a5e', background: '#0f1a2e', color: 'var(--text)', padding: '6px 8px' }}
        />
      </label>
    </BaseNode>
  );
};
