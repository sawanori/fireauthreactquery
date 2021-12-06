import Cookie from "universal-cookie";
import firebase from '../firebaseConfig'
import { unSubMeta } from "./useUserChanged";
import { useQueryClient, QueryClient } from 'react-query';
import { useDispatch } from "react-redux";
import { resetEditedNews, resetEditedTask } from '../slices/uiSlice'

const cookie = new Cookie()
export const useLogout = () => {
    const dispatch = useDispatch()
    const queryClient = useQueryClient()
    const logout = async () => {
        if (unSubMeta) {
            unSubMeta()
        }
        dispatch(resetEditedTask())
        dispatch(resetEditedTask())
        await firebase.auth().signOut()
        queryClient.removeQueries("tasks")
        queryClient.removeQueries("news")
        cookie.remove('token')
    }
    return { logout }
}
