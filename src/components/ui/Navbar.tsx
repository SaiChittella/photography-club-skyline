"use client";
import React, { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const Navbar: React.FC = () => {
    const [activeTab, setActiveTab] = useState<string>("home");
    const pathname = usePathname();
    const [isMediumScreen, setIsMediumScreen] = useState(false);
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const sidebarRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 1200px)");
        setIsMediumScreen(mediaQuery.matches);

        const handler = (event: MediaQueryListEvent) => {
            setIsMediumScreen(event.matches);
        };

        mediaQuery.addEventListener("change", handler);

        return () => mediaQuery.removeEventListener("change", handler);
    }, []);

    const handleTabChange = (tab: string) => {
        setActiveTab(tab);
        const section = document.getElementById(tab);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
            setSidebarOpen(false);
        }
    };

    useEffect(() => {
        if (isSidebarOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isSidebarOpen]);

    useEffect(() => {
        const sections = ["home", "featured", "calendar", "board", "contact", "faq"];
        const observerOptions = {
            root: null,
            rootMargin: "0px",
            threshold: 0.6,
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveTab(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        sections.forEach((sectionId) => {
            const sectionElement = document.getElementById(sectionId);
            if (sectionElement) {
                observer.observe(sectionElement);
            }
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <header className="fixed inset-0 mx-auto flex top-3 z-50 mt-4 h-12 justify-center px-2 md:flex md:px-4 items-center">
            <nav className="sticky inset-0 m-5 h-14 border-2 rounded-xl flex items-center justify-between font-jost text-lg font-medium text-[#CACACA] bg-[#000] w-[75%] flex-wrap">
                {!isMediumScreen && (
                    <div className="hidden md:flex items-center">
                        <img src="/imgs/camera.png" alt="" className="h-8 mx-4 inline-block" />
                        <p className="inline-block align-middle font-semibold text-xl text-white">
                            SHS Photography Club
                        </p>
                    </div>
                )}

                {/* Mobile Menu */}
                {isMediumScreen && (
                    <div className="w-full flex justify-between items-center px-4">
                        <div className="flex items-center space-x-4">
                            <button
                                onClick={toggleSidebar}
                                className="flex items-center px-3 py-2 hover:text-orange-400 hover:border-orange-400"
                            >
                                <img className="fill-current h-6 w-6" src="/imgs/Menu_icon.png" />
                            </button>

                            <p className="font-semibold text-xl text-white text-[3.15vw] md:text-[20px]">
                                SHS Photography Club
                            </p>
                        </div>
                        <img src="/imgs/camera.png" alt="Camera logo" className="h-8" />

                        <div
                            ref={sidebarRef}
                            className={`fixed top-0 left-0 h-full w-64 bg-[#151515] text-white transition-transform transform ${
                                isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                            }`}
                        >
                            <nav className="flex flex-col p-4 space-y-10">
                                <a onClick={() => handleTabChange("home")} className="cursor-pointer flex items-center space-x-2">
                                    <div className="flex flex-row bg-[#000000] rounded-xl relative w-[90%] items-center left-1 h-[52px] top-10">
                                        <img src="/imgs/home_img.svg" className="relative left-1" />
                                        <span className="font-semibold text-[20px] relative left-3 top-[1]">
                                            Home
                                        </span>
                                    </div>
                                </a>
                                <a onClick={() => handleTabChange("featured")} className="cursor-pointer flex items-center space-x-2">
                                    <div className="flex flex-row bg-[#000000] rounded-xl relative w-[90%] items-center left-1 h-[52px] top-10">
                                        <img src="/imgs/featured_img.svg" className="relative left-1" />
                                        <span className="font-semibold text-[20px] relative left-3">
                                            Featured
                                        </span>
                                    </div>
                                </a>
                                <a onClick={() => handleTabChange("calendar")} className="cursor-pointer flex items-center space-x-2">
                                    <div className="flex flex-row bg-[#000000] rounded-xl relative w-[90%] items-center left-1 h-[52px] top-10">
                                        <img src="/imgs/calendar_img.svg" className="relative left-1" />
                                        <span className="font-semibold text-[20px] relative left-3 top-[1]">
                                            Calendar
                                        </span>
                                    </div>
                                </a>
                                <a onClick={() => handleTabChange("board")} className="cursor-pointer flex items-center space-x-2">
                                    <div className="flex flex-row bg-[#000000] rounded-xl relative w-[90%] items-center left-1 h-[52px] top-10">
                                        <img src="/imgs/board_img.svg" className="relative left-1" />
                                        <span className="font-semibold text-[20px] relative left-3 top-[1]">
                                            Board
                                        </span>
                                    </div>
                                </a>
                                <a onClick={() => handleTabChange("contact")} className="cursor-pointer flex items-center space-x-2">
                                    <div className="flex flex-row bg-[#000000] rounded-xl relative w-[90%] items-center left-1 h-[52px] top-10">
                                        <img src="/imgs/contact2.svg" className="relative left-1 " style={{ width: "40px", height: "40px" }} />
                                        <span className="font-semibold text-[20px] relative left-3 top-[1]">
                                            Contact
                                        </span>
                                    </div>
                                </a>
                                <a onClick={() => handleTabChange("faq")} className="cursor-pointer flex items-center space-x-2">
                                    <div className="flex flex-row bg-[#000000] rounded-xl relative w-[90%] items-center left-1 h-[52px] top-10">
                                        <img src="/imgs/faqs.svg" className="relative left-1" style={{ width: "40px", height: "40px" }}  />
                                        <span className="font-semibold text-[20px] relative left-3 top-[1]">
                                            FAQ
                                        </span>
                                    </div>
                                </a>
                            </nav>
                        </div>
                    </div>
                )}

                {/* This is for desktop */}
                {!isMediumScreen && (
                    <div className="hidden md:flex items-center space-x-5 pr-10">
                        <a
                            onClick={() => handleTabChange("home")}
                            className={`cursor-pointer px-2 hover:text-white transition-all ${
                                activeTab === "home" ? "text-orange-400" : ""
                            }`}
                        >
                            Home
                        </a>
                        <a
                            onClick={() => handleTabChange("featured")}
                            className={`cursor-pointer px-2 hover:text-white transition-all ${
                                activeTab === "featured" ? "text-orange-400" : ""
                            }`}
                        >
                            Featured
                        </a>
                        <a
                            onClick={() => handleTabChange("calendar")}
                            className={`cursor-pointer px-2 hover:text-white transition-all ${
                                activeTab === "calendar" ? "text-orange-400" : ""
                            }`}
                        >
                            Calendar
                        </a>
                        <a
                            onClick={() => handleTabChange("board")}
                            className={`cursor-pointer px-2 hover:text-white transition-all ${
                                activeTab === "board" ? "text-orange-400" : ""
                            }`}
                        >
                            Board
                        </a>
                        <a
                            onClick={() => handleTabChange("contact")}
                            className={`cursor-pointer px-2 hover:text-white transition-all ${
                                activeTab === "contact" ? "text-orange-400" : ""
                            }`}
                        >
                            Contact
                        </a>
                        <a
                            onClick={() => handleTabChange("faq")}
                            className={`cursor-pointer px-2 hover:text-white transition-all ${
                                activeTab === "faq" ? "text-orange-400" : ""
                            }`}
                        >
                            FAQ
                        </a>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Navbar;
