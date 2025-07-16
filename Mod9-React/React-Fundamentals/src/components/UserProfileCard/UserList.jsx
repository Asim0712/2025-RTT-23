
import UserProfileCard from "./UserProfileCard";

function Userlist(){
const users= [
    { id: 1, name: " Asim", email: 'asimdaud0@gmail.com' },
   { id: 2, name: " Adil", email: 'asimdaud0@gmail.com' },
   { id: 3, name: " Aqib", email: 'asimdaud0@gmail.com' },
   { id: 4, name: " Evan", email: 'asimdaud0@gmail.com' },
];

const UserElements = users.map((user) => (
    <userProfileCard user={user} key={user.id} />
))
return (
    <div>
        <h2>User List</h2>
        {/* {UserElements} */}
        {users.map((user) => (
            <li>
                <UserProfileCard user={user} key={user.id} />
            </li>
        ))}
    </div>
);
}


export default Userlist;