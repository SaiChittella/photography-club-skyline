interface BoardProps {
	name: string;
	title: string;
	description: string;
	image: string;
}

const Board: React.FC<BoardProps> = ({ name, title, description, image }) => {
	return (
		<div className="mt-10 mb-20 relative overflow-hidden">
			<div className="flex justify-center flex-col items-center lg:left-10 relative">
				<p className="font-bold lg:text-7xl text-5xl">Meet the Team</p>
				<p className="font-semibold lg:text-xl mt-2">
					It wouldn't be possible{" "}
					<span className="text-[#DB6200]">without</span> these people
				</p>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 sm:grid-cols-1 gap-5 top-10 relative mb-10 right-10">
				<div className="flex justify-center items-center relative lg:left-auto left-14">
					<div
						className="bg-gray-700 rounded-full overflow-hidden"
						style={{ width: "42vw", height: "42vw" }}
					>
						<img
							src={image}
							alt="Profile"
							className="w-full h-full object-cover"
						/>
					</div>
				</div>
				<div className="flex flex-col relative justify-center items-center lg:items-start">
					<div className="w-3/4 relative left-10 flex items-center flex-col">
						<h1 className="lg:text-6xl text-4xl font-bold">
							{name}
						</h1>
						<p className="text-[#DB6200] font-Jost tracking-[0.2em] text-xl lg:text-2xl relative items-center justify-center">
							{title}
						</p>
					</div>
					<p className="w-[95%] lg:w-[105%] mt-5 lg:text-lg text-[#A9A9A9] lg:right-5 relative tracking-[0.08em] items-center left-12 lg:left-auto">
						{description}
					</p>
				</div>
			</div>
		</div>
	);
};

export default Board;
