import { useState } from "react";
import { motion } from "framer-motion";
import { IoIosArrowBack } from "react-icons/io";
import { MdMenu, MdExpandMore, MdExpandLess } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineRobot, AiOutlineCode, AiOutlineBgColors, AiOutlineSound, AiOutlineDollar, AiOutlineCoffee ,AiOutlineTool} from "react-icons/ai";
import { FaRobot, FaPenFancy, FaPaintBrush, FaRegClock, FaBalanceScale, FaKey, FaLock, FaQrcode, FaIdBadge, FaCalendarAlt, FaCode, FaPalette, FaFillDrip, FaGuitar, FaMusic, FaCalculator, FaPiggyBank, FaGamepad, FaMagic, FaBook } from "react-icons/fa";

import { IoGameControllerOutline } from "react-icons/io5"
import { SiGitignoredotio } from "react-icons/si";

export default function Sidebar() {
    const [open, setOpen] = useState(true);
    const [expandedSections, setExpandedSections] = useState({});
    const { pathname } = useLocation();

    const toggleSection = (section) => {
        setExpandedSections((prev) => ({
            ...prev,
            [section]: !prev[section],
        }));
    };

    const Nav_animation = {
        open: { width: "18rem", transition: { damping: 40 } },
        closed: { width: "0rem", transition: { damping: 40 } },
    };



    const categories = [
        {
            name: "AI Tools",
            icon: <AiOutlineRobot size={20} />,
            items: [
                { name: "AI Chat", icon: <FaRobot size={18} />, route: "/aichat" },
                { name: "AI Writer", icon: <FaPenFancy size={18} />, route: "/aiwriter" },
                { name: "AI Image Generator", icon: <FaPaintBrush size={18} />, route: "/aiimagegenerator" },
            ],
        },
        {
            name: "Utilities",
            icon: <AiOutlineTool size={20} />,
            items: [
                { name: "Countdown Timer", icon: <FaRegClock size={18} />, route: "/countdowntimer" },
                { name: "Unit Converter", icon: <FaBalanceScale size={18} />, route: "/unitconverter" },
                { name: "Password Generator", icon: <FaKey size={18} />, route: "/password_generator" },
                { name: "Cryptography Tool", icon: <FaLock size={18} />, route: "/cryptographytool" },
                { name: "QR Code Generator", icon: <FaQrcode size={18} />, route: "/qrcodegenerator" },
            ],
        },
        {
            name: "Development",
            icon: <AiOutlineCode size={20} />,
            items: [
                { name: "Git Ignore", icon: <SiGitignoredotio size={18} />, route: "/git_ignore" },
                { name: "UUID Generator", icon: <FaIdBadge size={18} />, route: "/uuidgenerator" },
                { name: "Epoch Timestamp", icon: <FaCalendarAlt size={18} />, route: "/epochtimestamp" },
                { name: "JSON Formatter", icon: <FaCode size={18} />, route: "/jsonformatter" },
            ],
        },
        {
            name: "Design",
            icon: <AiOutlineBgColors size={20} />,
            items: [
                { name: "RGB to HEX Converter", icon: <FaPalette size={18} />, route: "/rgbtohex" },
                { name: "Color Palette Generator", icon: <FaFillDrip size={18} />, route: "/colorpalette" },
            ],
        },
        {
            name: "Music",
            icon: <AiOutlineSound size={20} />,
            items: [
                { name: "Guitar Tuner", icon: <FaGuitar size={18} />, route: "/guitartuner" },
                { name: "Chord Progression Generator", icon: <FaMusic size={18} />, route: "/chordprogression" },
            ],
        },
        {
            name: "Finance",
            icon: <AiOutlineDollar size={20} />,
            items: [
                { name: "Compound Interest Calculator", icon: <FaCalculator size={18} />, route: "/interestcalculator" },
                { name: "Savings Goal Calculator", icon: <FaPiggyBank size={18} />, route: "/savingsgoal" },
            ],
        },
        {
            name: "Games",
            icon: <FaGamepad size={20} />,
            items: [
                { name: "Magic 8 Ball", icon: <FaMagic size={18} />, route: "/magic8ball" },
                { name: "Snake", icon: <IoGameControllerOutline size={18} />, route: "/snake" },
            ],
        },
        {
            name: "Coffee",
            icon: <AiOutlineCoffee size={20} />,
            items: [
                { name: "Sign My Guestbook", icon: <FaBook size={18} />, route: "/guestbook" },
            ],
        },
    ];


    return (
        <div>
            <motion.div
                variants={Nav_animation}
                initial={{ width: "4rem" }}
                animate={open ? "open" : "closed"}
                className="bg-gray-50 text-gray-700 shadow-md md:max-w-[18rem]  max-w-[16rem] overflow-hidden h-screen fixed z-[999] lg:relative "
            >
                <div className="flex items-center justify-between p-5 border-b border-gray-300">
                    <Link to="/" className="text-xl font-semibold text-blue-600">
                        Dev Ease
                    </Link>
                    <IoIosArrowBack
                        onClick={() => setOpen(!open)}
                        className=" lg:hidden cursor-pointer text-gray-500"
                        size={24}
                    />
                </div>

                <div className="flex flex-col h-full overflow-y-auto p-4">
                    {categories.map((category) => (
                        <div key={category.name} className="mb-4">
                            <div
                                className="flex items-center justify-between cursor-pointer p-2 md:p-3 rounded hover:bg-gray-200"
                                onClick={() => toggleSection(category.name)}
                            >
                                <div className="flex items-center gap-2">
                                    {category.icon}
                                    <span className="font-medium text-[18px] md:text-xl ">{category.name}</span>
                                </div>
                                {expandedSections[category.name] ? (
                                    <MdExpandLess size={20} />
                                ) : (
                                    <MdExpandMore size={20} />
                                )}
                            </div>
                            <motion.ul
                                initial={false}
                                animate={expandedSections[category.name] ? "open" : "closed"}
                                variants={{
                                    open: { opacity: 1, height: "auto" },
                                    closed: { opacity: 0, height: 0 },
                                }}
                                transition={{ duration: 0.3 }}
                                className="pl-4 overflow-hidden"
                            >
                                {category.items.map((item) => (
                                    <li key={item.name} className="py-1">
                                        <Link
                                            to={item.route}
                                            className={`flex items-center gap-2 p-2 rounded hover:bg-blue-500 hover:text-white ${pathname === item.route ? "bg-blue-500 text-white" : ""
                                                }`}
                                        >
                                            {item.icon}
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </motion.ul>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* Sidebar toggle for small devices */}
            <div className="flex justify-between items-center py-1 gap-6 px-1 md:py-2 md:px-3">
                <div className="p-1 text-gray-800 lg:hidden" onClick={() => setOpen(true)}>
                    <MdMenu size={25} />
                </div>
                <div className="relative w-10 h-10 lg:hidden ">
                    <img
                        src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_640.png"
                        alt="Profile" />
                </div>
            </div>
        </div>
    );
}
