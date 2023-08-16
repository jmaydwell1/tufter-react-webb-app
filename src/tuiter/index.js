import { Routes, Route } from "react-router";
import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar";
import HomeScreen from "./home-screen";
import ExploreScreen from "./explore-screen";
import BookmarksScreen from "./bookmarks-screen";
import ProfileScreen from "./profile-screen";
import WhoToFollowList from "./who-to-follow-list";
import whoReducer from "./reducers/who-reducer";
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from "react-redux";
import tuitsReducer from "./reducers/tuits-reducer";
import LoginScreen from "./user/login-screen";
import RegisterScreen from "./user/register-screen";
import authReducer from "./reducers/auth-reducer";
import ProtectedRoute from "./services/protected-route";
import AuthContext from "./services/auth-context";

const store = configureStore(
  {
    reducer: {
      who: whoReducer, tuits: tuitsReducer,
      user: authReducer
    }
  });

function Tuiter() {
  return (
    <Provider store={store}>
      <AuthContext>
        <div>
          <Nav />
          <div className="row">
            <div className="col-2">
              <NavigationSidebar />
            </div>
            <div className="col-7">
              <Routes>
                <Route path="/home" element={<HomeScreen />} />
                <Route path="/explore" element={<ExploreScreen />} />
                <Route path="/bookmarks" element={<BookmarksScreen />} />
                <Route path="/profile" element={<ProfileScreen />} />
                <Route path="/login" element={<LoginScreen />} />
                <Route path="/register" element={<RegisterScreen />} />
                <Route path="/profile" element={
                  <ProtectedRoute>
                    <ProfileScreen />
                  </ProtectedRoute>
                } />

              </Routes>
            </div>
            <div className="col-3">
              <WhoToFollowList />
            </div>
          </div>
        </div>
      </AuthContext>
    </Provider>
  );
}
export default Tuiter;

