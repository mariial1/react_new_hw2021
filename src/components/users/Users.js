import {usersList} from "../../data-file";
import User from "../user/User";

export default function Users() {
  return (
    <div>
        {
          usersList.map(userItem => <User key={userItem.id} item={userItem}/>)
        }
    </div>
  );
}
