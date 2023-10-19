import links from '@/config/links'

export default function Footer() {
    return (
        <footer className="mt-16 mb-12">
            <div className="flex items-center justify-between border-t border-black pt-3">
                <div>
                    © Gamespy 1991-2014
                </div>
                <div className="flex gap-2">
                    {links.map((link,index) => {
                        return (
                            <a className="hover:underline decoration-solid transition-all ease-in-out" key={index} href={link.url}>{link.text}</a>
                        )
                    })}
                </div>
            </div>
        </footer>
    )
}