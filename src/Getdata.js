import Axios from "axios";
import { useState, useEffect } from "react";
import Details from "./Details";

function GetData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    Axios.get("https://dummyjson.com/users")
      .then((res) => {
        if (res.status === 200) {
          setData(res.data.users);
        } else {
          Promise.reject();
        }
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  const Table = () => {
    return data.map((val, ind) => {
      return <Details obj={val} />;
    });
  };

  return (
    <div>
      <h1>Dummy Data</h1>
      <table>
        <tr>
          <th>Sno</th>
          <th>Profile Pic</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Gender</th>
          <th>E-mail</th>
          <th>Username</th>
          <th>Domain</th>
          <th>IP</th>
          <th>University</th>
        </tr>
        <Table />
      </table>
    </div>
  );
}

export default GetData;
