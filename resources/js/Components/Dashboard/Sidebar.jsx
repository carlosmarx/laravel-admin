import Menu from "./Menu";

export default function Sidebar() {
    return (
        <div className="flex flex-col relative pt-16 transition-all" id="sidebar">
            {/* logo */}
            <div id="logo" className="flex font-bold text-zinc-500 text-2xl h-[4%] gap-4 justify-center items-center">

                <img src="/assets/img/logo.png" alt="" className="w-12 h-12" />

                <span>Ad<span className="text-pink-300">m</span>in</span>
            </div>

            {/* Menu */}
            <Menu />
        </div>
    )
}
