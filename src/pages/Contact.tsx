import {Link} from "react-router-dom";
import React, {useState} from "react";

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
                    <Link className="flex gap-2" to="https://www.instagram.com/fol.photo/">
                        <svg width="40px" height="40px" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                            <rect fill="none" height="256" width="256" />
                            <circle
                                cx="128"
                                cy="128"
                                fill="none"
                                r="40"
                                stroke="#000"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="8"
                            />
                            <rect
                                fill="none"
                                height="184"
                                rx="48"
                                stroke="#000"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="8"
                                width="184"
                                x="36"
                                y="36"
                            />
                            <circle cx="180" cy="76" r="8" />
                        </svg>
                    </Link>
                </li>
                <li>
                    <Link className="flex gap-2" to="#">
                        <svg width="40px" height="40px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                            <path
                                fill="none"
                                stroke="#000000"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M40.83,8.48c1.14,0,2,1,1.54,2.86l-5.58,26.3c-.39,1.87-1.52,2.32-3.08,1.45L20.4,29.26a.4.4,0,0,1,0-.65L35.77,14.73c.7-.62-.15-.92-1.07-.36L15.41,26.54a.46.46,0,0,1-.4.05L6.82,24C5,23.47,5,22.22,7.23,21.33L40,8.69a2.16,2.16,0,0,1,.83-.21Z"
                            />
                        </svg>
                    </Link>
                </li>
                <li>
                    <Link className="flex" to="mailto:fol.photo27@gmail.com">
                        <svg
                            width="40px"
                            height="40px"
                            viewBox="0 0 64 64"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                            <g id="emailer_2_">
                                <rect fill="#37474F" height="1" width="14" x="28" y="15"/>
                                <rect fill="#37474F" height="1" width="20" x="28" y="19"/>
                                <rect fill="#37474F" height="1" width="32" x="16" y="31"/>
                                <rect fill="#37474F" height="1" width="32" x="16" y="27"/>
                                <rect fill="#37474F" height="1" width="32" x="16" y="23"/>
                                <rect fill="#37474F" height="1" width="14" x="28" y="11"/>
                                <path
                                    d="M54,23.61V16L43,5H10v18.74L5,28v8.891V59h54V39.05V28L54,23.61z M44,7.414L51.586,15H44V7.414z M7.811,58   l22.495-18.33c0.435-0.354,1.052-0.557,1.694-0.557s1.26,0.203,1.694,0.557L56.189,58H7.811z M58,28.556L37.319,40.045l0.835,0.68   L58,29.699v9.342v19.145L34.326,38.895c-0.64-0.521-1.482-0.781-2.326-0.781s-1.687,0.261-2.326,0.781L6,58.186V36.864v-7.165   l19.846,11.025l0.834-0.68L6,28.556v-0.094l4-3.407v4.724l1,0.556V6h31.586H43v10h10v14.333l1-0.556v-4.723l4,3.407V28.556z"
                                    fill="#37474F"/>
                                <path d="M25,11h-9v9h9V11z M24,19h-7v-7h7V19z" fill="#37474F"/>
                            </g>
                        </svg>
                    </Link>
                </li>
            </ul>
            <form action={`mailto:fol.photo27@gmail.com?subject=${form.subject}&body=${form.message}`} method="post" className="flex flex-col gap-5">
                <input type="text" name="subject" placeholder="Subject" onChange={handleChange}
                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                <textarea name="message" placeholder="Message text" onChange={handleChange}
                          className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                <button className="button">Send Email</button>
            </form>
        </>
    );
}
