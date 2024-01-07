export default function Clients() {
    const clients = [
        {
            name:'Client 1',
            logo: '/src/images/1.svg',
        },
        {
            name:'Client 2',
            logo: '/src/images/2.svg',
        },
        {
            name:'Client 3',
            logo: '/src/images/3.svg',
        },
        {
            name:'Client 4',
            logo: '/src/images/4.svg',
        },
        {
            name:'Client 5',
            logo: '/src/images/5.svg',
        },
        {
            name:'Client 6',
            logo: '/src/images/6.svg',
        },
        {
            name:'Client 7',
            logo: '/src/images/7.svg',
        },
    ]; // Array of client data

    return (
        <section>
            <div className="flex justify-between">
                <h2 className="text-8xl">Clients</h2>
                <a className="self-end text-2xl">View all</a>
            </div>

            <div className="grid grid-cols-4 gap-5 mt-8">
                {clients.map((client) => (
                    <div key={client} className="border-solid border border-black rounded">
                        <a className="p-5">{client.name}</a>
                        <img src={client.logo} alt={client.name} />
                    </div>
                ))}
            </div>
        </section>
    );
}