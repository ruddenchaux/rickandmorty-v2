import MoodIcon from '@mui/icons-material/Mood';
import { Box, Typography } from '@mui/material';

export default function ComingSoon() {
  return (
    <Box
      sx={{ display: 'flex', justifyContent: 'center', mt: 48, pt: 2, pb: 2 }}
    >
      <Typography
        variant="h4"
        align="center"
        paragraph
        sx={{ display: 'flex', alignItems: 'center' }}
      >
        Coming soon&nbsp;
        <MoodIcon fontSize="large" />
      </Typography>
    </Box>
  );
}
