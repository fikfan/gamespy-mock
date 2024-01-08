
export default function Clients() {

    const clients = [
        {
            name: 'Client 1',
            logo: require('../public/images/1.svg').default,
        },
        {
            name: 'Client 2',
            logo: require('../public/images/2.svg').default,
        },
        {
            name: 'Client 3',
            logo: require('../public/images/3.svg').default,
        },
        {
            name: 'Client 4',
            logo: require('../public/images/4.svg').default,
        },
        {
            name: 'Client 1',
            logo: require('../public/images/1.svg').default,
        },
        {
            name: 'Client 2',
            logo: require('../public/images/2.svg').default,
        },
        {
            name: 'Client 3',
            logo: require('../public/images/3.svg').default,
        },
        {
            name: 'Client 4',
            logo: require('../public/images/4.svg').default,
        },
        // ...and so on for all your clients
    ];

    return (
        <section>
            <div className="flex justify-between">
                <h2 className="text-8xl">Clients</h2>
                <a className="self-end text-2xl">View all</a>
            </div>

            <div className="grid grid-cols-4 gap-8 mt-8 relative">
                {clients.map((client) => (
                    <div key={client.id} className="border-solid border border-black rounded min-h-[150px] hover:bg-slate-300 transition ease-in-out">
                        <img src={client.logo.src} alt={client.name} className="m-auto h-full brightness-0" style={{maxWidth: 40 + '%'}} />
                    </div>
                ))}
            </div>
        </section>
    );
}