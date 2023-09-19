import Table from "@mui/material/Table";
import Paper from "@mui/material/Paper";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import TableContainer from "@mui/material/TableContainer";
import "./App.css";
import Customer from "./components/Customer";

const customers = [
  {
    id: 1,
    name: "홍길동",
    birthday: "991231",
    gender: "남자",
    job: "대학생",
  },
  {
    id: 2,
    name: "이순신",
    birthday: "881231",
    gender: "남자",
    job: "프로그래머",
  },
  {
    id: 3,
    name: "홍문도",
    birthday: "771231",
    gender: "남자",
    job: "디자인어",
  },
];

function App() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 1080 }}>
        <TableHead>
          <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생년월일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>직업</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {customers.map((c) => (
            <Customer
              key={c.id}
              id={c.id}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default App;
