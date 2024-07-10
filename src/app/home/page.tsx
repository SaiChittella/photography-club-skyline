"use client";
import React, { useEffect, useState } from "react";

const Home: React.FC = () => {
	const [isMediumScreen, setIsMediumScreen] = useState(false);
	const photography_club_home_img = "/imgs/photography_club_home_img.png";

	useEffect(() => {
		const mediaQuery = window.matchMedia("(max-width: 1045px)");
		setIsMediumScreen(mediaQuery.matches);

		const handler = (event: MediaQueryListEvent) => {
			setIsMediumScreen(event.matches);
		};

		mediaQuery.addEventListener("change", handler);

		return () => mediaQuery.removeEventListener("change", handler);
	}, []);

	return (
		<div className="min-h-screen flex items-center justify-center pt-10">
			<div
				className="container mx-auto px-8 md:flex md:justify-between md:items-center relative z-10"
				style={{ marginLeft: "13%" }}
			>
				{!isMediumScreen && (
					<div className="w-full md:w-1/2">
						<div>
							<h1 className="items-center text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-8">
								WELCOME TO OUR CLUB
							</h1>
						</div>

						<div>
							<p className="items-center font-Jost tracking-[0.22em] text-[25px] text-gray-300 mb-8">
								Join and connect with talented photographers to:
							</p>
						</div>

						<div style={{ marginLeft: "10%" }}>
							<ul className="list-none text-lg md:text-xl text-gray-300">
								<li className="mb-4 text-[30px]">
									<span className="font-bold text-[#da6102]">
										EXPLORE
									</span>{" "}
									Photography
								</li>
								<li className="mb-4 text-[30px]">
									<span className="font-bold text-[#da6102]">
										LEARN
									</span>{" "}
									Photography
								</li>
								<li className="mb-4 text-[30px]">
									<span className="font-bold text-[#da6102]">
										CREATE
									</span>{" "}
									Photography
								</li>
								<li className="mb-4 text-[30px]">
									<span className="font-bold text-[#da6102]">
										SHARE
									</span>{" "}
									Photography
								</li>
							</ul>
						</div>
					</div>
				)}

				{isMediumScreen && (
					<div className="w-full" style={{ marginTop: "8%" }}>
						<div>
							<h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-8">
								WELCOME TO OUR CLUB
							</h1>
						</div>

						<div>
							<p className="font-Jost tracking-[0.22em] text-[25px] text-gray-300 mb-8">
								Join and connect with talented photographers to:
							</p>
						</div>

						<div className="flex justify-center items-center">
							<ul className="list-none text-lg md:text-xl text-gray-300">
								<li className="mb-4 text-[30px]">
									<span className="font-bold text-[#da6102]">
										EXPLORE
									</span>{" "}
									Photography
								</li>
								<li className="mb-4 text-[30px]">
									<span className="font-bold text-[#da6102]">
										LEARN
									</span>{" "}
									Photography
								</li>
								<li className="mb-4 text-[30px]">
									<span className="font-bold text-[#da6102]">
										CREATE
									</span>{" "}
									Photography
								</li>
								<li className="mb-4 text-[30px]">
									<span className="font-bold text-[#da6102]">
										SHARE
									</span>{" "}
									Photography
								</li>
							</ul>
						</div>
					</div>
				)}

				{!isMediumScreen && (
					<div className="md:w-1/2 mt-8 md:mt-0 relative z-10">
						<img
							src={photography_club_home_img}
							alt="Photography Club"
							className="lg:w-[75%] rounded-lg shadow-lg"
							style={{
								maxWidth: "100%",
								height: "auto",
								marginLeft: "5%",
								marginTop: "6%",
							}}
						/>
					</div>
				)}
			</div>

			{isMediumScreen && (
				<div
					className="absolute inset-0 bg-cover bg-center"
					style={{
						backgroundImage: `url(${photography_club_home_img})`,
						opacity: 0.4,
					}}
				></div>
			)}
		</div>
	);
};

export default Home;
