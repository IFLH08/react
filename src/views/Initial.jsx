import { useState } from 'react';
import { Container, Typography, Button, Box } from '@mui/material';

const Initial = () => {
  const [message, setMessage] = useState("Este es el valor inicial");

  return (
    <Container>
      <Box mt={4}>
        <Typography variant="h5">Vista Inicial</Typography>
        <Typography variant="body1" mt={2}>
          {message}
        </Typography>
        <Button variant="contained" color="primary" onClick={() => setMessage("Valor actualizado")}>
          Actualizar Mensaje
        </Button>
      </Box>
    </Container>
  );
};

export default Initial;
