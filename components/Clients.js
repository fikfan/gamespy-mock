export default function Client() {
    return (
        <section>
            <div className="flex justify-between">
                <h2 className="text-8xl">Clients</h2>
                <a className="self-end text-2xl">View all</a>
            </div>

            <div className="grid grid-cols-4 gap-5 mt-8">
                <div className="border-solid border border-black rounded">
                    <a className="p-5">1</a>
                </div>
                <div className="border-solid border border-black rounded">
                    <a className="p-5">2</a>
                </div>
                <div className="border-solid border border-black rounded">
                    <a className="p-5">3</a>
                </div>
                <div className="border-solid border border-black rounded">
                    <a className="p-5">4</a>
                </div>
            </div>

        </section>
    )
}