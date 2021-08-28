import {useEffect, useState} from "react";
import {getPostOfUser} from "../../services/user.axios.service";
import Posts from "../posts/Posts";
import Adress from "../adress/Adress";

export default function User({item: userItem}) {
    let {adress} = userItem;

  let [posts, setPosts] = useState([]);

  useEffect(()=>{
    getPostOfUser(userItem.id).then(({data}) => setPosts([...data]));
  },[userItem.id])

  return (
      <div>
          <h2>{userItem.id} {userItem.name}</h2>
          <Adress adress={adress}/>
          <Posts items={posts}/>
      </div>
  );
}
