import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome to the dashboard!</p>
      
      {/* Add a Link to navigate to the CreateProduct page */}
      <button>      <Link to="/api/product">Create a new product</Link></button>
    </div>
  );
}

export default Dashboard;