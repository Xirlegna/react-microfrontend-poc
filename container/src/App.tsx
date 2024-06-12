import React from 'react';

const Input = React.lazy(() => import('toolkit/Input'));

const App: React.FC = () => {
  return (
    <div>
      <h4>Container</h4>
      <Input />
    </div>
  );
};

export default App;
