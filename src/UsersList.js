import { useEffect, useState } from "react";
import Table from "./Table";
import axios from "axios";
const UsersList = () => {
  const [users, setUsers] = useState("");
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }, []);

  return(
    <div>
       <div>
      <table className="Table" border={5}>
        <tr>
          <th>name</th>
          <th>email</th>
          <th>Phone</th>
          <th>Adress</th>
          <th>website</th>
          <th>Company Name</th>
        </tr>
        
    {users && users.map((el) => <Table key={el.id} el={el} />)}
    </table>
    </div>
    </div>
  );
};
export default UsersList;