// interface User {
//     id: Number;
//     name: String;
//     email: String;
// }



function UserProfileCard({ user }) {
    return (
        <div>

            <h2>User Profile Card</h2>

            <h2>{user.name}</h2>
            <h2>{user.email}</h2>
        </div>
    )
}
export default UserProfileCard;