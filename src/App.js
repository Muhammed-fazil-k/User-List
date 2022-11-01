import "./App.css";
import UserForm from "./components/User/UserForm";
import UserList from "./components/User/UserList";
import { UserProvider } from "./context/UserContext";

function App() {
  return (
    <UserProvider>
      <div className="App">
        <UserForm />
        <UserList />
      </div>
    </UserProvider>
  );
}

export default App;
