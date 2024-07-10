"use client";
import { useState, useEffect } from "react";
import { createClient, EntrySkeletonType } from "contentful";

const client = createClient({
	space: "zocut71aknyu",
	accessToken: "2qq7_bi7cUxPd6mSyc5mza1wxfp9l7nGijagPWskrGE",
});

interface ImageFields extends EntrySkeletonType {
	image: {
		fields: {
			file: {
				url: string;
			};
		};
	};
	credit: string;
}

interface Props extends EntrySkeletonType<ImageFields> {}

const Featured: React.FC = () => {
	const [expanded, setExpanded] = useState<boolean>(false);
	const [blogPosts, setBlogPosts] = useState<Props[]>([]);
	const halfLength = Math.ceil(blogPosts.length / 2);

	const handleSeeMoreClick = (): void => {
		setExpanded(!expanded);
	};

	useEffect(() => {
		const fetchBlogPosts = async () => {
			try {
				const response = await client.getEntries<ImageFields>({
					content_type: "image",
				});

				const convertedItems = response.items.map((item) => {
					return item as unknown as Props;
				});

				setBlogPosts(convertedItems);
			} catch (error) {
				console.error("Error fetching blog posts:", error);
			}
		};

		fetchBlogPosts();
	}, []);

	if (blogPosts.length === 0) {
		return <div>Loading...</div>;
	}

	return (
		<div style={{ background: "rgb(14, 14, 14)" }} className="py-5">
			<div className="font-bold lg:text-[55px] md:text-[55px] text-[40px] flex items-center justify-center">
				<p>Featured Photos</p>
			</div>

			<div
				className={`mt-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 px-16 w-full gap-14 ${
					expanded ? "" : "overflow-hidden max-h-[500px]"
				}`}
			>
				<div className="space-y-20">
					{blogPosts.slice(0, halfLength).map((post, index) => (
						<div key={index} className="relative group">
							<img
								src={post.fields.image.fields.file.url}
								alt={`Image ${index}`}
								className="rounded-3xl w-full h-full object-cover"
							/>
							<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-gray-800 bg-opacity-75 transition-opacity duration-300 rounded-3xl">
								<p className="text-white text-lg">
									<span className="text-orange-400">
										Credit:
									</span>{" "}
									{post.fields.credit}
								</p>
							</div>
						</div>
					))}
				</div>

				<div className="space-y-20">
					{blogPosts.slice(halfLength).map((post, index) => (
						<div key={index} className="relative group">
							<img
								src={post.fields.image.fields.file.url}
								alt={`Image ${index}`}
								className="rounded-3xl w-full h-full object-cover"
							/>
							<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-gray-800 bg-opacity-75 transition-opacity duration-300 rounded-3xl">
								<p className="text-white text-lg">
									<span className="text-orange-400">
										Credit:
									</span>{" "}
									{post.fields.credit}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>

			<div className="flex justify-center mt-5">
				<button
					onClick={handleSeeMoreClick}
					className="text-orange-500 font-bold text-2xl underline"
				>
					{expanded ? "See Less" : "See More"}
				</button>
			</div>
		</div>
	);
};

export default Featured;
