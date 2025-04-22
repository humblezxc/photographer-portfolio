import {useEffect, useState} from "react";
import Cookies from 'universal-cookie';

export default function CookiesPage() {
    const [isBanner, setIsBanner] = useState<boolean | null>(null);

    const cookies = new Cookies();

    useEffect(() => {
        setIsBanner(cookies.get('adBannerDisabled'))
    }, []);
    const handleClick = () => {
        cookies.set('adBannerDisabled', true, {path: '/', maxAge: 60 * 60 * 24 * 30})
        setIsBanner(true);
    }

    return (
        <main>
            <section className="container">
                { !isBanner && (
                    <div className="flex justify-between">
                        <h1>Close me</h1>
                        <button onClick={handleClick}>close</button>
                    </div>
                )}
            </section>
        </main>
    )
}
