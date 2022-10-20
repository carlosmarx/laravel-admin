import { MdDashboard, MdAssignment, MdPeople, MdLocalMall, MdPieChart, MdLogout } from "react-icons/md";
import MenuItem from "./MenuItem";

export default function Menu() {
    return (
        <div id="menu" className="mt-16 flex flex-col gap-8 transition-all duration-300">
            <MenuItem title="Dashboard" href={route('admin.dashboard')} active={route().current('admin.dashboard')}>
                <MdDashboard size={28} />
            </MenuItem>

            <MenuItem title="Orders" href={route('admin.orders')} active={route().current('admin.orders')}>
                <MdAssignment size={28} />
            </MenuItem>

            <MenuItem title="Customers" href={null} active={false}>
                <MdPeople size={28} />
            </MenuItem>

            <MenuItem title="Products" href={null} active={false}>
                <MdLocalMall size={28} />
            </MenuItem>

            <MenuItem title="Analytics" href={null} active={false}>
                <MdPieChart size={28} />
            </MenuItem>

            <MenuItem title="Analytics" href={null} active={false}>
                <MdPieChart size={28} />
            </MenuItem>

            <MenuItem title="Logout" href={null} active={false}>
                <MdLogout size={28} />
            </MenuItem>
        </div>
    )
}
