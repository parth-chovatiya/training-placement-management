import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import moment from 'moment'
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";

const useStylehead = makeStyles((theme) => ({
  table: {
    marginTop: theme.spacing(3),
    "& thead th": {
      fontSize: '17px',
      backgroundColor: "#d5d9f0",
    },
    "& tbody td": {
      fontWeight: "400",
    },
    "& tbody tr:hover": {
      backgroundColor: "#f2f4fb"
    }
  }
}))

const columns = [
  { id: "orgname", label: "Organization Name", minWidth: 170 },
  { id: "orgwebsite", label: "Organization Website", minWidth: 100 },
  { id: "orgaddress", label: "Organization Address", minWidth: 200 },
  {
    id: "hrname",
    label: "HR Name",
    minWidth: 110,
    // align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "hremail",
    label: "HR Email",
    minWidth: 150,
    // align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "hrcontact",
    label: "HR Contact No.",
    minWidth: 140,
    // align: "right",
    // format: (value) => value.toFixed(2),
  },
  {
    id: "interviewDate",
    label: "Interview Date",
    minWidth: 170,
    // align: "right",
    // format: (value) => value.toFixed(2),
  },
];

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 440,
  },
});

export default function StickyHeadTable(props) {
  const classeshead = useStylehead();
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  // const rows=[]
  function createData(
    orgname,
    orgwebsite,
    orgaddress,
    hrname,
    hremail,
    hrcontact,
    interviewDate
  ) {
    return {
      orgname,
      orgwebsite,
      orgaddress,
      hrname,
      hremail,
      hrcontact,
      interviewDate: moment(interviewDate).utc().format('MM/DD/YYYY'),
    };
  }
  console.log(props.data);
  const rows = [];
  for (let i = 0; i < props.data.length; i++) {
    rows.push(
      createData(
        props.data[i].orgname,
        props.data[i].website,
        props.data[i].address1 +
          (props.data[i].address2 !== undefined ? props.data[i].website : "") +
          " " +
          props.data[i].city +
          " " +
          props.data[i].state +
          " " +
          props.data[i].zipcode,
        props.data[i].hrname,
        props.data[i].hremail,
        props.data[i].hrcontact,
        props.data[i].interviewDate
      )
    );
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table" className={classeshead.table}>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
