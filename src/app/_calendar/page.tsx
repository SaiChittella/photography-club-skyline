import AestheticCircle from "../../components/ui/AestheticCircle";
import EventScroller from "./EventScroller";
import { createClient, EntrySkeletonType } from "contentful";
import EventCard from "../../components/ui/EventCard";
import React from "react";

export default async function Calendar() {
	const client = createClient({
		space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE || "",
		accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN || "",
	});

	interface EventFields extends EntrySkeletonType {
		fields: {
			title: String;
			date: String;
			description: String;
			learnMoreDescription?: Document;
		};
	}

	let { items } = await client.getEntries<EventFields>({
		content_type: "event",
	});

	const now = new Date();

	items = items.filter((item) => new Date(item.fields.date) >= now);

	items.sort((a, b) => {
		const dateA = new Date(a.fields.date);
		const dateB = new Date(b.fields.date);
		if (dateA < dateB) {
			return -1;
		} else {
			return 1;
		}
	});

	return (
		<div className="relative overflow-hidden py-10">
			<AestheticCircle className="bg-[#BC5604] -left-[50%] -top-[50%]" />
			<AestheticCircle className="bg-[#6C254C] -right-[50%] -bottom-[100%]" />

			<p className="text-[70px] text-center font-bold">Events</p>

			<EventScroller>
				{items.map((entry) => {
					const dateObject = new Date(entry.fields.date);
					const differenceMs = dateObject.getTime() - now.getTime();

					const daysUntil = Math.ceil(
						differenceMs / (1000 * 60 * 60 * 24)
					);
					if (entry.fields.learnMoreDescription) {
						return (
							<EventCard
								title={entry.fields.title}
								date={entry.fields.date}
								description={entry.fields.description}
								learnMore={entry.fields.learnMoreDescription}
								key={entry.sys.id}
								daysUntil={daysUntil}
							/>
						);
					} else {
						return (
							<EventCard
								title={entry.fields.title}
								date={entry.fields.date}
								description={entry.fields.description}
								key={entry.sys.id}
								daysUntil={daysUntil}
							/>
						);
					}
				})}
			</EventScroller>
		</div>
	);
}
