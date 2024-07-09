"use client";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { ReactNode, useRef } from "react";
import { INLINES, Inline, BLOCKS, Block } from "@contentful/rich-text-types";

interface EventCardProps {
	title: String;
	date: String;
	description: String;
	learnMore?: any;
	daysUntil: number;
}

const EventCard: React.FC<EventCardProps> = ({
	title,
	date,
	description,
	learnMore,
	daysUntil,
}) => {
	const dialogRef = useRef<HTMLDialogElement | null>(null);

	function openDialog() {
		if (dialogRef.current) {
			dialogRef.current.show();
		}
	}

	function closeDialog() {
		if (dialogRef.current) {
			dialogRef.current.close();
		}
	}

	const options = {
		renderNode: {
			[BLOCKS.HEADING_1]: (node: Block | Inline, children: ReactNode) => (
				<h1 className="text-2xl font-bold">{children}</h1>
			),
			[BLOCKS.HEADING_2]: (node: Block | Inline, children: ReactNode) => (
				<h2 className="text-xl font-bold">{children}</h2>
			),
			[BLOCKS.HEADING_3]: (node: Block | Inline, children: ReactNode) => (
				<h3 className="text-lg font-bold">{children}</h3>
			),
			[INLINES.HYPERLINK]: (
				node: Block | Inline,
				children: ReactNode
			) => (
				<a
					href={node.data.uri}
					className="text-orange-400 hover:text-white transition-all underline"
				>
					{children}
				</a>
			),
			["embedded-asset-block"]: (
				node: Block | Inline,
				children: ReactNode
			) => <img src={node.data.target.fields.file.url} alt="" />,
			[BLOCKS.TABLE]: (node: Block | Inline, children: ReactNode) => (
				<table className="border border-slate-200">
					<tbody>{children}</tbody>
				</table>
			),
			[BLOCKS.TABLE_HEADER_CELL]: (
				node: Block | Inline,
				children: ReactNode
			) => (
				<th
					align={"center"}
					className="border border-slate-200 px-5 bg-neutral-700"
				>
					{children}
				</th>
			),
			[BLOCKS.TABLE_CELL]: (
				node: Block | Inline,
				children: ReactNode
			) => (
				<td align={"center"} className="border border-slate-200 px-5">
					{children}
				</td>
			),
			[BLOCKS.HR]: (node: Block | Inline, children: ReactNode) => (
				<hr className="my-2" />
			),
		},
	};

	return (
		<div className="bg-[#101010] w-96 h-[350px] rounded-[35px] inline-block ml-[36px] px-10 py-8 align-top">
			<p className="text-4xl font-bold">{title}</p>
			<p className="mb-5 text-base text-[#A9A9A9]">
				{date}{" "}
				<span className="text-[#DB6200]">
					{" "}
					({daysUntil} days)
				</span>
			</p>
			<p className="text-wrap mb-5">{description}</p>

			{learnMore != null ? (
				<button
					onClick={openDialog}
					className="bg-[#DB6200] py-1 px-4 rounded-lg"
				>
					Learn More
				</button>
			) : null}

			<dialog
				ref={dialogRef}
				className="bg-[#101010] w-[40%] h-[75%] rounded-[35px] fixed inset-0 mx-auto text-white px-10 py-8 border-2 border-white z-30 overflow-y-scroll"
			>
				<div className="flex justify-between place-items-center mb-5">
					<p className="text-4xl font-bold align-middle">{title}</p>
					<button onClick={closeDialog} className="align-middle">
						X
					</button>
				</div>

				{documentToReactComponents(learnMore, options)}
			</dialog>
		</div>
	);
};

export default EventCard;
