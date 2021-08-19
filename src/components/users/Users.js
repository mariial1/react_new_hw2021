import {usersList} from "../../data-file";

export default function Users() {
  return (
    <div>
        {
          usersList.map(userItem => <div> {userItem.id} {userItem.name}</div>)
        }
    </div>
  );
}
