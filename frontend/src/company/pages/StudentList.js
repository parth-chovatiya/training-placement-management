import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";


const columns = [
  { id: "fullName", label: "Full Name", minWidth: 150 },
  { id: "studentId", label: "Student Id No.", minWidth: 100 },
  {
    id: "enrolementNo",
    label: "Enrolement No.",
    minWidth: 130,
  },
  {
    id: "email",
    label: "Email",
    minWidth: 140,
  },
  {
    id: "contact",
    label: "Contact No",
    minWidth: 120,
  },
  { id: "gender", label: "Gender", minWidth: 80 },
  { id: "dob", label: "Date of Birth", minWidth: 100 },
  { id: "religion", label: "Religion", minWidth: 80 },
  { id: "address", label: "Address", minWidth: 180 },
  { id: "aadhaarNo", label: "Aadhaar No", minWidth: 100 },
  { id: "cgpa", label: "CGPA", minWidth: 80 },
  { id: "coursetype", label: "Course Type", minWidth: 100 },
  { id: "department", label: "Department", minWidth: 100 },
  { id: "passingyear", label: "Passing Year", minWidth: 80 },
  { id: "placed", label: "Placed", minWidth: 80 },
  { id: "company", label: "Company", minWidth: 100 },
];

function createData(
  fullName,
  studentId,
  enrolementNo,
  email,
  contact,
  gender,
  dob,
  religion,
  address,
  aadhaarNo,
  cgpa,
  coursetype,
  department,
  passingyear,
  placed,
  company
) {
  placed=placed?"True":"False"
  return {
    fullName,
    studentId,
    enrolementNo,
    email,
    contact,
    gender,
    dob,
    religion,
    address,
    aadhaarNo,
    cgpa,
    coursetype,
    department,
    passingyear,
    placed,
    company,
  };
}
const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 440,
  },
});

export default function StickyHeadTable(props) {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  
  const rows = [];
  for (let i = 0; i < props.data.length; i++) {
    rows.push(
      createData(
        props.data[i].fullName,
        props.data[i].studentId,
        props.data[i].enrolementNo,
        props.data[i].email,
        props.data[i].contact,
        props.data[i].gender,
        props.data[i].dob,
        props.data[i].religion,
        props.data[i].address1 +
          (props.data[i].address2 !== undefined ? props.data[i].website : "") +
          " " +
          props.data[i].city +
          " " +
          props.data[i].state +
          " " +
          props.data[i].zipcode,
        props.data[i].aadhaarNo,
        props.data[i].cgpa,
        props.data[i].coursetype,
        props.data[i].department,
        props.data[i].passingyear,
        props.data[i].placed,
        props.data[i].company,
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
        <Table stickyHeader aria-label="sticky table">
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
