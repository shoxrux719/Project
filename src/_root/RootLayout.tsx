import React from 'react'
import { Outlet, Navigate, NavLink } from 'react-router-dom'

const RootLayout = () => {
    return (
        <div className=''>
            <nav className='flex justify-between b1px] items-center p-4  container mx-auto sticky '>
               
                <img className='w-[146px] h-[18px]' src="//gh.uz/wp-content/uploads/new-logo-gh.svg" alt="Golden House" />

                <ul className='flex space-x-6 text-[12px]'>
                    <NavLink to='/to' end>
                        <li>Квартиры</li>
                    </NavLink>
                    <li>Коммерция</li>
                    <li>Ипотека</li>
                    <li>О компании</li>
                    <li>Партнёры</li>
                    <li>Вакансии</li>
                    <li>Новости</li>
                    <li>Контакты</li>
                </ul>


                <div className='flex gap-1 items-center'>
                    <p className='font-bold text-[13px] mr-[53px]'>+998 (78) 113-03-85</p>
                    <img className='w-4 h-3 rounded-[2px]' src="/public/assets/images/uz.png" alt="" />

                    <p className='text-[12px]'>UZ</p>
                    <svg className='ml-[10px]' xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24"><path fill="currentColor" d="M11.98 19.094q-.291 0-.577-.106q-.286-.105-.503-.323L9.752 17.63q-2.67-2.425-4.71-4.717Q3 10.622 3 8.15q0-1.908 1.296-3.204T7.5 3.65q1.094 0 2.279.553T12 6.289q1.037-1.533 2.221-2.086T16.5 3.65q1.908 0 3.204 1.296T21 8.15q0 2.529-2.125 4.862t-4.652 4.622l-1.142 1.031q-.218.218-.513.323t-.587.106m-.47-11.767q-.898-1.448-1.867-2.063Q8.675 4.65 7.5 4.65q-1.5 0-2.5 1t-1 2.5q0 1.108.627 2.272q.627 1.165 1.684 2.386q1.056 1.22 2.429 2.498q1.371 1.277 2.856 2.629q.173.154.404.154t.404-.154q1.485-1.352 2.857-2.63q1.372-1.276 2.429-2.497q1.056-1.222 1.683-2.386T20 8.15q0-1.5-1-2.5t-2.5-1q-1.175 0-2.144.615q-.97.614-1.867 2.062q-.08.135-.214.202T12 7.596t-.275-.067t-.213-.202M12 11.398" /></svg>
                </div>
            </nav>
            <hr />
            <Outlet />
            <footer>
                footer
            </footer>
        </div>

    )
}

export default RootLayout