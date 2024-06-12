import React from 'react';

const TextField = React.lazy(() => import('toolkit/TextField'));
const Button = React.lazy(() => import('toolkit/Button'));

const App: React.FC = () => {
  return (
    <div>
      <h4>Container</h4>
      <TextField />
      <Button>Save</Button>
    </div>
  );
};

export default App;
