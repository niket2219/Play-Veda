import AppNavigator from "./Navigators/AppNavigator";
import AuthNavigator from "./Navigators/AuthNavigator";
import { AuthProvider, useAuth } from "./AuthContext";

export default function App() {
  return (
    <AuthProvider>
      <Main />
    </AuthProvider>
  );
}

function Main() {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <AppNavigator /> : <AuthNavigator />;
}
