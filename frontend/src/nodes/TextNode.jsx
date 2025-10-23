import { useMemo, useRef, useState, useEffect } from 'react';
import { BaseNode } from './BaseNode.jsx';
import { Handle, Position } from 'reactflow';

const extractVariables = (text) => {
  const regex = /\{\{\s*([a-zA-Z_$][0-9a-zA-Z_$]*)\s*\}\}/g;
  const vars = new Set();
  let m;
  while ((m = regex.exec(text)) !== null) {
    vars.add(m[1]);
  }
  return Array.from(vars);
};

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const variables = useMemo(() => extractVariables(currText), [currText]);

  // Auto-resize: measure text area content
  const textareaRef = useRef(null);
  const [size, setSize] = useState({ width: 240, height: 110 });

  useEffect(() => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = 'auto';
    el.style.width = '100%';
    const newHeight = Math.min(280, Math.max(70, el.scrollHeight + 10));
    const newWidth = 260 + Math.min(220, Math.floor(currText.length / 20) * 20);
    setSize({ width: newWidth, height: newHeight + 60 });
  }, [currText]);

  const inputHandles = variables.map((v) => ({ id: `var-${v}` }));
  const outputHandles = [{ id: 'output' }];

  return (
    <div style={{ position: 'relative' }}>
      <BaseNode id={id} title="Text" inputs={inputHandles} outputs={outputHandles} style={{ minWidth: size.width, minHeight: size.height }}>
        <label style={{ display: 'grid', gap: 6 }}>
          <span style={{ fontSize: 12, color: 'var(--muted)' }}>Text</span>
          <textarea
            ref={textareaRef}
            value={currText}
            onChange={(e) => setCurrText(e.target.value)}
            style={{
              resize: 'none',
              width: '100%',
              minHeight: 64,
              borderRadius: 8,
              border: '1px solid #2a3a5e',
              background: '#0f1a2e',
              color: 'var(--text)',
              padding: '8px 10px',
              lineHeight: 1.4,
            }}
          />
        </label>
      </BaseNode>
    </div>
  );
};
