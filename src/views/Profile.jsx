import { Container, Typography, Box } from '@mui/material';
import Boton from '../components/Boton';

const Profile = () => {
  return (
    <Container>
      <Box mt={4}>
        <Typography variant="h5">Perfil del Usuario</Typography>
        <Typography variant="body1" mt={2}>
          El boton de abajo es un boton personalizado
        </Typography>
        <Box mt={2}>
          <Boton />
        </Box>
      </Box>
    </Container>
  );
};

export default Profile;
