import { PipelineToolbar } from './toolbar.jsx';
import { PipelineUI } from './ui.jsx';
import { SubmitButton } from './submit.js';

function App() {
  return (
    <div>
      <div className="toolbar">
        <PipelineToolbar />
      </div>
      <div className="canvas-wrap">
        <PipelineUI />
      </div>
      <div className="footer">
        <SubmitButton />
      </div>
    </div>
  );
}

export default App;
