import React, { VFC } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useLogout } from '../hooks/useLogout'
import { Layout } from '../components/Layout'
import { ChevronDoubleLeftIcon, LogoutIcon, ChevronDoubleRightIcon } from '@heroicons/react/solid';
import firebase from 'firebase'


const Tasks = () => {
    const router = useRouter()
    const { logout } = useLogout()
    const user = firebase.auth().currentUser
    return (
        <Layout title="tasks">
            <p>{user?.email}</p>
            <LogoutIcon
                className="h-5 w-5 my-3 text-blue-500 cursor-pointer"
                onClick={() => {
                    logout()
                    router.push('/')
                }}
            />
            <Link href="/">
                <div className="mt-20 flex items-center cursor-pointer">
                    <ChevronDoubleRightIcon />
                    <span>Back to main page</span>
                </div>
            </Link>
        </Layout>
    )
}

export default Tasks
