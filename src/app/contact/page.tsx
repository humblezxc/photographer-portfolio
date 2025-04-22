'use client'

import {useState} from "react";
import Link from "next/link";
import {MailIcon, TestInstagramIcon, TestTelegramIcon} from "../../../public/svg/svg";

export default function Contact() {
    const [form, setForm] = useState({
        subject: '',
        message: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    return (
        <>
            <p className="mb-4 text-xl">Write me here:</p>
            <ul className="flex justify-around px-7 py-2">
                <li>
                    <Link className="flex gap-2" href="https://www.instagram.com/fol.photo/">
                        <TestInstagramIcon/>
                    </Link>
                </li>
                <li>
                    <Link className="flex gap-2" href="#">
                        <TestTelegramIcon/>
                    </Link>
                </li>
                <li>
                    <Link className="flex" href="mailto:fol.photo27@gmail.com">
                        <MailIcon/>
                    </Link>
                </li>
            </ul>
            <form action={`mailto:fol.photo27@gmail.com?subject=${form.subject}&body=${form.message}`} method="post"
                  className="flex flex-col gap-5">
                <input type="text" name="subject" placeholder="Subject" onChange={handleChange}
                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                <textarea name="message" placeholder="Message text" onChange={handleChange}
                          className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                <button className="button">Send Email</button>
            </form>
        </>
    );
}
