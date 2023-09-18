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
    <div>
      {customers.map((c) => {
        return (
          <Customer
            key={c.id}
            id={c.id}
            name={c.name}
            birthday={c.birthday}
            gender={c.gender}
            job={c.job}
          />
        );
      })}
    </div>
  );
}

export default App;
