"use client";
import React, { useEffect, useState } from "react";

export default function Contact() {
    const discordLogo = "/imgs/discord_logo.png";
    const mailLogo = "/imgs/mail.png";
    const [isMediumScreen, setIsMediumScreen] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 900px)");
        setIsMediumScreen(mediaQuery.matches);

        const handler = (event: MediaQueryListEvent) => {
            setIsMediumScreen(event.matches);
        };

        mediaQuery.addEventListener("change", handler);

        return () => mediaQuery.removeEventListener("change", handler);
    }, []);

    return (
        <div
            className="min-h-screen bg-cover bg-center bg-opacity-50"
            style={{
                backgroundImage: `url("https://wallpaper.dog/large/20466229.jpg")`,
            }}
        >
            {!isMediumScreen && (
                <div className="bg-black bg-opacity-50 text-white min-h-screen flex flex-col items-center justify-center p-4">
                    <div className="text-center mb-4 -translate-y-40">
                        <p className="font-bold text-2xl mb-1">
                            Got something to talk about?
                        </p>
                        <p className="font-bold text-7xl mb-6">Contact Us</p>
                    </div>
                    <div className="flex flex-col md:flex-row gap-8">
                        <div className="flex flex-col items-center bg-opacity-75 p-6 rounded-lg text-center w-full md:w-1/2 no-outline transform transition-all duration-500 hover:scale-110">
                            <img
                                src={discordLogo}
                                alt="Discord Logo"
                                className="w-24 h-18 mb-12 hover:scale-110 transition-transform duration-300 mt-[-80px]"
                            />
                            <h3 className="text-2xl font-semibold mb-5">
                                Join our discord:
                            </h3>
                            <div className="text-lg text-center w-13">
                                You can find our amazing community on{" "}
                                <a
                                    href="https://discord.gg/CtaBs7mvYe"
                                    className="text-white underline focus:outline-none"
                                >
                                    discord
                                </a>
                                .<p>Pop on over, have a chat!</p>
                            </div>
                        </div>
                        <div className="w-0.5 h-200 bg-gray-500 mt-[-130px] mb-[-50px]"></div>
                        <div className="flex flex-col items-center bg-opacity-75 p-6 rounded-lg text-center w-full md:w-1/2 no-outline transform transition-all duration-500 hover:scale-110">
                            <img
                                src={mailLogo}
                                alt="Mail Logo"
                                className="w-24 h-18 mb-12 hover:scale-110 transition-transform duration-300 mt-[-80px]"
                            />
                            <h3 className="text-2xl font-semibold mb-5">
                                Shoot us an email:
                            </h3>
                            <div className="text-lg text-center">
                                Here’s our email:{" "}
                                <a
                                    href="mailto:officialshsphotography@gmail.com"
                                    className="text-white underline focus:outline-none"
                                >
                                    officialshsphotography@gmail.com
                                </a>
                                .<p>Feel free to send us a message.</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {isMediumScreen && (
                <div className="bg-black bg-opacity-50 text-white min-h-screen flex flex-col items-center justify-center px-5">
                    <div className="text-center mb-4 mt-0 -translate-y-45">
                        <p className="font-bold text-xl mb-2 2xl">
                            Got something to talk about?
                        </p>
                        <p className="font-bold text-6xl mb-6">Contact Us</p>
                    </div>
                    <div className="flex flex-col space-y-8">
                        <div className="flex flex-col items-center bg-opacity-75 p-6 rounded-lg text-center no-outline transform transition-all duration-500 hover:scale-110">
                            <img
                                src={discordLogo}
                                alt="Discord Logo"
                                className="w-30 h-20 mb-6 hover:scale-110 transition-transform duration-300"
                            />
                            <h3 className="text-2xl font-semibold mb-2">
                                Join our discord:
                            </h3>
                            <div className="text-lg text-center">
                                You can find our amazing community on{" "}
                                <a
                                    href="https://discord.gg/CtaBs7mvYe"
                                    className="text-white underline focus:outline-none"
                                >
                                    discord
                                </a>
                                .<p>Pop on over, have a chat!</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center bg-opacity-75 p-6 rounded-lg text-center no-outline transform transition-all duration-500 hover:scale-110">
                            <img
                                src={mailLogo}
                                alt="Mail Logo"
                                className="w-30 h-20 mb-6 hover:scale-110 transition-transform duration-300"
                            />
                            <h3 className="text-2xl font-semibold mb-2">
                                Shoot us an email:
                            </h3>
                            <div className="text-lg text-center">
                                Here’s our email:{" "}
                                <a
                                    href="mailto:officialshsphotography@gmail.com"
                                    className="text-white underline focus:outline-none"
                                >
                                    officialshsphotography@gmail.com
                                </a>
                                .<p>Feel free to send us a message anytime!</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
