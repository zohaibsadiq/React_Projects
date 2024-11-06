import { Typography, Button } from '@mui/material';
import { paginationStyles } from './paginationStyles';

const Pagination = ({ currentPage, totalPages, setPage }) => {
  const classes = paginationStyles();
  const handlePrev = () => {
    if (currentPage === 1) return;
    setPage((prev) => prev - 1);
  };
  const handleNext = () => {
    if (currentPage === totalPages) return;
    setPage((prev) => prev + 1);
  };
  return (
    <div className={classes.container}>
      <Button onClick={handlePrev} className={classes.button} variant='contained' color='primary' type='button'>
        prev
      </Button>
      <Typography variant='h4' className={classes.pageNumber}>
        {currentPage}
      </Typography>
      <Button onClick={handleNext} className={classes.button} variant='contained' color='primary' type='button'>
        Next
      </Button>
    </div>
  );
};

export default Pagination;
