import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box component="footer" sx={{ p: 2, backgroundColor: '#f0f0f0', mt: 5, textAlign: 'center' }}>
      <Typography variant="body2" color="textSecondary">
        © 2025 Mi Aplicación React
      </Typography>
    </Box>
  );
};

export default Footer;
