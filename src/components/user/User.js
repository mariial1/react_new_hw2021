import {useEffect, useState} from "react";
import {getPostOfUser} from "../../services/user.axios.service";
import Posts from "../posts/Posts";
import Address from "../adress/Adress";


export default function User({item: userItem}) {
    let {address} = userItem;

  let [posts, setPosts] = useState([]);

  useEffect(()=>{
    getPostOfUser(userItem.id).then(({data}) => setPosts([...data]));
  },[userItem.id])

  return (
      <div>
          <h2>{userItem.id} {userItem.name}</h2>
          <Address address={address}/>
          <Posts items={posts}/>
      </div>
  );
}
