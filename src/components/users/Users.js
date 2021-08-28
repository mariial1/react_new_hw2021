import User from "../user/User";
import {useEffect, useState} from "react";
//import {getUsers} from "../../services/user.service";
import {getAxiosUsers} from "../../services/user.axios.service";

export default function Users() {

    let [users, setUsers] = useState([]);

  useEffect(()=> {
   // getUsers().then(value => setUsers([...value]));
   getAxiosUsers().then(({data}) => setUsers([...data]));
    }, []);

  return (
    <div>
        {
          users.map((userItem,index) => <User key={userItem.id} item={userItem}/>)
        }
    </div>
  );
}
