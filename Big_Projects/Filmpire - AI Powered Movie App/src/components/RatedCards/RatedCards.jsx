import { Box, Typography } from '@mui/material';
import { RatedCardsStyles } from './RatedCardsStyles';
import { Movie } from '../index';

const RatedCards = ({ title, data }) => {
  console.log(title, data);
  console.log(`datainratedcard`, data);
  const classes = RatedCardsStyles();
  return (
    <Box>
      <Typography variant='h5' gutterBottom>
        {title}
      </Typography>
      <Box display='flex' flexWrap='wrap' className={classes.container}>
        {data?.results?.map((movie, i) => (
          <Movie key={movie.id} movie={movie} i={i} />
        ))}
      </Box>
    </Box>
  );
};
export default RatedCards;
