import React from 'react';
import Presentation from './components/Presentation';

const App: React.FC = () => {
  return (
    <div className="w-full h-screen bg-background text-primary overflow-hidden font-sans selection:bg-accent selection:text-white">
      <Presentation />
    </div>
  );
};

export default App;