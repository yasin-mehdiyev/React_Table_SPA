import * as userService from "../../../services/UserService";
import { setUsers } from "./userSlice";

export const fetchUsers = () => async (dispatch: any) => {
    try {
        const response: any = await userService.getAllUsers();
        dispatch(setUsers(response));
    } catch (error) {
        console.log("error", error);
    }
};