export default function Contact() {
    return (
        <main>
            <section className="container flex-1">
                <h1>Modal window</h1>
                <p>Write me here:</p>
                <ul>
                    <li>Instagram</li>
                    <li>telegram</li>
                    <li>mail</li>
                </ul>
                <div className="flex flex-col bg-yellow-400" style={{minHeight: "600px"}}>
                    <div className="bg-green-400 -mt-20 self-center -z-1" style={{minHeight: "300px", maxWidth: "300px"}}>img</div>
                    <p>layout test</p>
                </div>

            </section>
        </main>
    );
}
