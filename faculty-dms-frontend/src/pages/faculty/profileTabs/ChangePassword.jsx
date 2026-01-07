export default function ChangePassword() {
  return (
    <div className="card">
      <h3>Change Password</h3>

      <div className="grid-2">
        <input type="password" placeholder="Current Password" />
        <input type="password" placeholder="New Password" />
        <input type="password" placeholder="Confirm New Password" />
      </div>

      <button className="primary-btn">Update Password</button>
    </div>
  );
}
