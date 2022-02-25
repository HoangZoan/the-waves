import DashboardLayout from "../../hoc/dashboardLayout";

const UserDashboard = ({ users }) => {
  return (
    <DashboardLayout title="Overview">
      <div className="user_nfo_panel">
        <div>
          <span>{users.data.firstname}</span>
          <span>{users.data.lastname}</span>
          <span>{users.data.email}</span>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default UserDashboard;
