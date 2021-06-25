import HomePage from '../Components/HomePage/HomePage'
import UserPage from '../Components/UsersPage/UserPage'
import MyInfoPage from '../Components/MyInfoPage/MyInfoPage'
import LoginPage from '../Components/login/LoginPage';
import UserListPage from '../Components/UsersPage/UserListPage';
// import LoginPage from '../Components/login/LoginPage'

export const routes = [
    {
        path: '/app',
        text: 'Home',
        exact: true,
        main: HomePage,
    },
    {
        path: '/app/users',
        text: 'Users',
        main: UserPage
    },
    {
        path: '/app/my-info',
        text: 'My Info',
        main: MyInfoPage
    },

    {
        path: '/app/users/:id',
        main: UserListPage
    },
    {
        path: '/login',
        main: LoginPage

    }

]