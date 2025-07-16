function UserProfile() {
  return (
    <>
      <div class="profile">
        <img src="avatar.png" alt="User Avatar" />
        <h2>User Profile</h2>
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" readonly />
        <br />
        <p>Bio: A short bio goes here.</p>
      </div>
      <button class="btn primary">Save Changes</button>
    </>
  );
}

export default UserProfile;