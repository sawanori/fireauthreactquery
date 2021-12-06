import React, { VFC } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useLogout } from '../hooks/useLogout'
import { Layout } from '../components/Layout'
import { ChevronDoubleLeftIcon, LogoutIcon, ChevronDoubleRightIcon } from '@heroicons/react/solid';
import firebase from 'firebase'
import { NewsListMemo } from '../components/NewsList'
import { NewsEditMemo } from '../components/NewsEdit'
import { TaskListMemo } from '../components/TaskList'
import { TaskEditMemo } from '../components/TaskEdit'


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
            <p className="mt-10 mb-5 text-blue-500 text-xl font-bold">News Edit</p>
            <div className="grid grid-cols-2 gap-40">
                <NewsListMemo />
                <NewsEditMemo />
            </div>
            <p className="mt-20 mb-5 text-blue-500 text-xl font-bold">Task Edit</p>
            <div className="grid grid-cols-2 gap-40">
                <TaskListMemo />
                <TaskEditMemo />
            </div>
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
