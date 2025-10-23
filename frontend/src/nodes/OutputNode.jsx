import { useState } from 'react';
import { BaseNode } from './BaseNode.jsx';

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
  const [outputType, setOutputType] = useState(data?.outputType || 'Text');

  return (
    <BaseNode id={id} title="Output" inputs={[{ id: 'value' }] }>
      <div style={{ display: 'grid', gap: 8 }}>
        <label style={{ display: 'grid', gap: 4 }}>
          <span style={{ fontSize: 12, color: 'var(--muted)' }}>Name</span>
          <input
            style={{ borderRadius: 8, border: '1px solid #2a3a5e', background: '#0f1a2e', color: 'var(--text)', padding: '6px 8px' }}
            type="text"
            value={currName}
            onChange={(e) => setCurrName(e.target.value)}
          />
        </label>
        <label style={{ display: 'grid', gap: 4 }}>
          <span style={{ fontSize: 12, color: 'var(--muted)' }}>Type</span>
          <select
            style={{ borderRadius: 8, border: '1px solid #2a3a5e', background: '#0f1a2e', color: 'var(--text)', padding: '6px 8px' }}
            value={outputType}
            onChange={(e) => setOutputType(e.target.value)}
          >
            <option value="Text">Text</option>
            <option value="Image">Image</option>
          </select>
        </label>
      </div>
    </BaseNode>
  );
};
