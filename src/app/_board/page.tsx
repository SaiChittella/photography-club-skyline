"use client";
import Board from "../../components/ui/Board";
import React, { useRef, useState, useEffect } from "react";
import { createClient, EntrySkeletonType } from "contentful";

interface BoardFields extends EntrySkeletonType {
	title: string;
	description: string;
	name: string;
	image: {
		fields: {
			file: {
				url: string;
			};
		};
	};
}

interface Props extends EntrySkeletonType<BoardFields> {}

export default function BoardPage() {
	const scrollContainerRef = useRef<HTMLDivElement>(null);
	const [currentIndex, setCurrentIndex] = useState(0);
	const [board, setBoard] = useState<Props[]>([]);

	const client = createClient({
		space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE || "",
		accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN || "",
	});

	useEffect(() => {
		const fetchBoard = async () => {
			try {
				const response = await client.getEntries<BoardFields>({
					content_type: "board",
				});

				const convertedItems = response.items.map((item) => {
					return item as unknown as Props;
				});

				setBoard(convertedItems);
			} catch (error) {
				console.error("Error fetching blog posts:", error);
			}
		};

		fetchBoard();
	}, []);

	const scroll = (direction: "left" | "right") => {
		if (scrollContainerRef.current) {
			const newIndex =
				direction === "left" ? currentIndex - 1 : currentIndex + 1;
			if (newIndex >= 0 && newIndex < board.length) {
				setCurrentIndex(newIndex);
				scrollContainerRef.current.scrollTo({
					left: scrollContainerRef.current.clientWidth * newIndex,
					behavior: "smooth",
				});
			}
		}
	};

	if (board.length === 0) {
		return <div>Loading...</div>;
	}

	return (
		<div className="relative w-full overflow-hidden">
			<button
				className={`absolute left-0 top-1/2 transform -translate-y-1/2 z-10  text-white p-2 ${
					currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
				}`}
				onClick={() => scroll("left")}
				disabled={currentIndex === 0}
			>
				<img
					src="/imgs/chevron.svg"
					height={20}
					width={20}
					alt="Scroll Left"
				/>
			</button>
			<button
				className={`absolute scale-x-[-1] right-0 top-1/2 transform -translate-y-1/2 z-10  text-white p-2 ${
					currentIndex === board.length - 1
						? "opacity-50 cursor-not-allowed"
						: ""
				}`}
				onClick={() => scroll("right")}
				disabled={currentIndex === board.length - 1}
			>
				<img
					src="/imgs/chevron.svg"
					height={20}
					width={20}
					alt="Scroll Right"
				/>
			</button>

			<div
				className="flex overflow-x-hidden"
				ref={scrollContainerRef}
				style={{ width: "100vw" }}
			>
				{board.map((member, index) => (
					<div key={index} className="flex-shrink-0 w-full">
						<Board
							title={member.fields.title}
							description={member.fields.description}
							image={member.fields.image.fields.file.url}
							name={member.fields.name}
						/>
					</div>
				))}
			</div>
		</div>
	);
}
