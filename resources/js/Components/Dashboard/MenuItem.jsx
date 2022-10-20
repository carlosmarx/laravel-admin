import { Link } from "@inertiajs/inertia-react";

export default function MenuItem({ href, title, active, children }) {
    return (
        <>
            <Link href={href}
            className={
                active
                ? 'flex items-center gap-4 relative rounded-r-lg h-11 transition-colors duration-1000 text-sm hover:cursor-pointer ml-0 bg-pink-200'
                : 'flex items-center gap-4 relative rounded-r-lg h-11 transition-colors duration-1000 text-sm hover:cursor-pointer ml-8'
            }
            >
            {active ? (<div className="w-2 h-full bg-pink-300"></div>) : null}
                    {children}
                    <span>{title}</span>
            </Link>
        </>
    )
}
