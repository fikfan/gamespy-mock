export default function Header() {
    return (
        <header className="flex items-center justify-between pt-3 mb-24">
            <div className="flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 32 32">
                    <path d="M 16.388672 6.0019531 C 15.611672 6.0019531 15.385172 7.0820312 14.451172 7.0820312 C 13.546172 7.0820312 12.888969 6.2714844 12.042969 6.2714844 C 11.235969 6.2714844 10.713547 6.8640313 10.310547 8.0820312 C 8.9335469 12.245031 8.9939063 12.068109 9.0039062 12.287109 C 9.0039063 13.619109 13.881156 17.990234 20.410156 17.990234 L 20.410156 18 C 22.091156 18 24.519531 17.624703 24.519531 15.470703 C 24.539531 15.106703 24.569516 15.377781 23.478516 10.300781 C 23.252516 9.2697812 23.045047 8.80125 21.373047 7.90625 C 20.065047 7.18725 17.224672 6.0019531 16.388672 6.0019531 z M 8.2695312 13.039062 C 5.9695313 13.149063 3 13.570234 3 16.240234 C 3 20.610234 13.189766 26 21.259766 26 C 27.439766 26 29 23.160156 29 20.910156 C 29 19.140156 27.499063 17.139453 24.789062 15.939453 C 25.020063 17.177453 25 17.558703 25 17.720703 C 25 19.827703 22.844813 21 20.007812 21 C 13.612813 21.011 8 16.873437 8 14.148438 C 8 13.768437 8.1295313 13.387063 8.2695312 13.039062 z"></path>
                </svg>
                <span className="text-xl">Gamerspy</span>
            </div>
            <div className="flex items-center justify-space-around rounded-full gap-4 border border-secondary px-4 pl-6 py-2">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 24 24">
                    <path d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z"></path>
                </svg>
                <a href="" className="text-xl hover:underline">Home</a>
                <a href="" className="text-xl hover:underline">About</a>
                <a href="" className="text-xl px-4 py-2 bg-primary text-white hover:bg-white border hover:border-primary transition-all hover:text-primary rounded-full">Contact</a>
            </div>
        </header>
    )
}