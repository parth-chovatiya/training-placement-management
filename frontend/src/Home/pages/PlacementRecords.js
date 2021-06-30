import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

const func = (index) => {
  if(index===0){
    return (
      [
        { no: '2020-01-05', customerId: '110917001', amount: 3 },
        { no: '2020-01-02', customerId: 'Anonymous1', amount: 1 },
      ]
    )
  }
  else if(index===1){
    return (
      [
        { no: '2020-01-05', customerId: '110917002', amount: 3 },
        { no: '2020-01-02', customerId: 'Anonymous2', amount: 1 },
      ]
    )
  }
  else if(index===2){
    return (
      [
        { no: '2020-01-05', customerId: '110917003', amount: 3 },
        { no: '2020-01-02', customerId: 'Anonymous3', amount: 1 },
      ]
    )
  }
  else if(index===3){
    return (
      [
        { no: '2020-01-05', customerId: '110917004', amount: 3 },
        { no: '2020-01-02', customerId: 'Anonymous4', amount: 1 },
      ]
    )
  }
  else if(index===4){
    return (
      [
        { no: '2020-01-05', customerId: '110917005', amount: 3 },
        { no: '2020-01-02', customerId: 'Anonymous5', amount: 1 },
      ]
    )
  }
  else if(index===5){
    return (
      [
        { no: '2020-01-05', customerId: '110917002', amount: 3 },
        { no: '2020-01-02', customerId: 'Anonymous2', amount: 1 },
      ]
    )
  }
  else if(index===6){
    return (
      [
        { no: '2020-01-05', customerId: '110917002', amount: 3 },
        { no: '2020-01-02', customerId: 'Anonymous2', amount: 1 },
      ]
    )
  }
}

function createData(name, calories, fat, carbs, protein, price, index) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    price,
    history: func(index)
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="right">{row.calories}</TableCell>
        <TableCell align="right">{row.fat}</TableCell>
        <TableCell align="right">{row.carbs}</TableCell>
        <TableCell align="right">{row.protein}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              {/* <Typography variant="h6" gutterBottom component="div">
                History
              </Typography> */}
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>No</TableCell>
                    <TableCell>Name of Industries</TableCell>
                    <TableCell align="right">Package (L/A)</TableCell>
                    <TableCell align="right">Total Placed</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {
                   row.history.map((historyRow, index) => (
                      <TableRow key={historyRow}>
                        <TableCell component="th" scope="row">
                          {historyRow.no}
                        </TableCell>
                        <TableCell>{historyRow.customerId}</TableCell>
                        <TableCell align="right">{historyRow.amount}</TableCell>
                        <TableCell align="right">
                          {Math.round(historyRow.amount * row.price * 100) / 100}
                        </TableCell>
                      </TableRow>
                    ))}  
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        no: PropTypes.string.isRequired,
      }),
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};

const rows = [
  createData('Placement Record For A Y 2019 - 20', 237, 9.0, 37, 4.3, 4.99, 0),
  createData('Placement Record For A Y 2019 - 20', 237, 9.0, 37, 4.3, 4.99, 1),
  createData('Placement Record For A Y 2018 - 19', 262, 16.0, 24, 6.0, 3.79, 2),
  createData('Placement Record For A Y 2017 - 18', 305, 3.7, 67, 4.3, 2.5, 3),
  createData('Placement Record For A Y 2016 - 17', 356, 16.0, 49, 3.9, 1.5, 4),
  createData('Placement Record For A Y 2015 - 16', 305, 3.7, 67, 4.3, 2.5, 5),
  createData('Placement Record For A Y 2014 - 15', 356, 16.0, 49, 3.9, 1.5, 6),
];

export default function PlacementRecords() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Placement Record</TableCell>
            <TableCell align="right">Companies Visited</TableCell>
            <TableCell align="right">Students Placed</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
