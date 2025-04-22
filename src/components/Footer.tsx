import Link from "next/link";

export default function Footer() {
    return (
        <footer>
            <section className="container text-center py-5">
                <div className="flex justify-center gap-6 mb-3">
                    <Link href=''>
                        <svg width="30px" height="30px" viewBox="0 0 48 48" id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg">
                            <path d="M35.38,10.46a2.19,2.19,0,1,0,2.16,2.22v-.06A2.18,2.18,0,0,0,35.38,10.46Z" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M40.55,5.5H7.45a2,2,0,0,0-1.95,2v33.1a2,2,0,0,0,2,2h33.1a2,2,0,0,0,2-2V7.45A2,2,0,0,0,40.55,5.5Z" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M24,15.72A8.28,8.28,0,1,0,32.28,24h0A8.28,8.28,0,0,0,24,15.72Z" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link>
                    <Link href=''>
                        <svg width="30px" height="30px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                            <path
                                fill="none"
                                stroke="#000000"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M40.83,8.48c1.14,0,2,1,1.54,2.86l-5.58,26.3c-.39,1.87-1.52,2.32-3.08,1.45L20.4,29.26a.4.4,0,0,1,0-.65L35.77,14.73c.7-.62-.15-.92-1.07-.36L15.41,26.54a.46.46,0,0,1-.4.05L6.82,24C5,23.47,5,22.22,7.23,21.33L40,8.69a2.16,2.16,0,0,1,.83-.21Z"
                            />
                        </svg>
                    </Link>
                    <Link href=''>
                        <svg width="30px" height="30px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                            <path
                                fill="none"
                                stroke="#000000"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M18.73,22.4A10.55,10.55,0,1,0,29.27,33V4.5A10.55,10.55,0,0,0,39.82,15.05"
                            />
                        </svg>
                    </Link>
                </div>
                <div>
                    © 2023 Copyrights by <Link href='' className="link link_decoration">Fol.photo.</Link> All Rights
                    Reserved. Designed by&nbsp;
                    <Link className="link link_decoration" href="https://github.com/humblezxc"
                          style={{textDecoration: "underline"}} target="_blank"
                    >humblezxc</Link>
                </div>
            </section>
        </footer>
    );
}
