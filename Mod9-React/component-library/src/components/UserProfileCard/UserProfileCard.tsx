import type { UserProfileCardProps } from "../../types";

function UserProfileCard({
  user,
  showEmail,
  showRole,
  onEdit,
  children,
}: UserProfileCardProps) {
  return (
    <div className="flex flex-col justify-center items-center p-4 bg-blue-100 max-w-xl rounded-xl">
      <div className="flex items-center text-center">
        <img src={user.avatarUrl} alt={user.name} style={{width: '8rem'}}/>
        <div>
          <h2>{user.name}</h2>
          {showEmail && <p>{user.email}</p>}
          {showRole && <p>{user.role}</p>}
        </div>
      </div>
      <div>
        {onEdit && <button onClick={() => onEdit(user.id)}
            className="text-center bg-blue-500 text-white px-24 py-2 rounded-md mt-5"
            >Edit Profile</button>}
        {children}
      </div>
    </div>
  );
}

export default UserProfileCard;