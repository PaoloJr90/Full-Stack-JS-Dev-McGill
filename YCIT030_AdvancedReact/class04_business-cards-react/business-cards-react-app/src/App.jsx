import Card from "./components/Card";

import { usersData } from "./common/userData";

function App() {
  return (
    <div className="container">
      <h1>Business Cards:</h1>
      <div className="wrapper">
        {usersData.map((user, index) => {
          return (
            <Card
              key={`user-${index}`}
              name={user.name}
              position={user.position}
              phone={user.phone}
              email={user.email}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
