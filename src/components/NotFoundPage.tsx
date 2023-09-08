import {Link} from "react-router-dom";

export default function NotFoundPage() {
    return (
        <main className="flex flex-col justify-center">
            <section className="bg-purple-300 container flex justify-center align-middle flex-1">
                <div className="flex justify-center items-center">
                    This page doesn't exist. Go&nbsp;<Link style={{textDecoration: "underline"}} to="/">home</Link>
                </div>
            </section>
        </main>
    );
}
