import { useState } from 'react';
import { Button } from '@mui/material';

const Boton = () => {
  const [count, setCount] = useState(0);

  return (
    <Button variant="outlined" color="secondary" onClick={() => setCount(count + 1)}>
      Contador: {count}
    </Button>
  );
};

export default Boton;
