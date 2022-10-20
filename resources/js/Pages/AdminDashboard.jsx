import Sidebar from "@/Components/Dashboard/Sidebar";

export default function AdminDashboard() {
    return (
        <div className="bg-gradient-to-tr from-[#ffe1bc] to-[#f3c6f1] h-screen flex justify-center items-center">
            <div id="appGlass" className="grid grid-cols-layout h-[97%] w-[97%] bg-zinc-50 rounded-3xl overflow-hidden">
                <Sidebar />
            </div>
        </div>
    );
}
