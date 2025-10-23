import { useState } from 'react';
import { BaseNode } from './BaseNode.jsx';

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
  const [inputType, setInputType] = useState(data?.inputType || 'Text');

  return (
    <BaseNode id={id} title="Input" outputs={[{ id: 'value' }] }>
      <div style={{ display: 'grid', gap: 8 }}>
        <label style={{ display: 'grid', gap: 4 }}>
          <span style={{ fontSize: 12, color: 'var(--muted)' }}>Name</span>
          <input
            style={{
              borderRadius: 8,
              border: '1px solid #2a3a5e',
              background: '#0f1a2e',
              color: 'var(--text)',
              padding: '6px 8px',
            }}
            type="text"
            value={currName}
            onChange={(e) => setCurrName(e.target.value)}
          />
        </label>
        <label style={{ display: 'grid', gap: 4 }}>
          <span style={{ fontSize: 12, color: 'var(--muted)' }}>Type</span>
          <select
            style={{ borderRadius: 8, border: '1px solid #2a3a5e', background: '#0f1a2e', color: 'var(--text)', padding: '6px 8px' }}
            value={inputType}
            onChange={(e) => setInputType(e.target.value)}
          >
            <option value="Text">Text</option>
            <option value="File">File</option>
          </select>
        </label>
      </div>
    </BaseNode>
  );
};
