import { createClient, EntrySkeletonType } from "contentful";
import { FAQ } from "./faqList"
import FAQList from "./faqList";

const FAQComponent: React.FC = async () => {
	// Create client
	const client = createClient({
		space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE || '',
		accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN || '',
	});

	// Type for contentful req
	interface FAQFields extends EntrySkeletonType {
		fields: {
			question: string;
			answer: string;
		};
	}

	// Contentful req
	let { items } = await client.getEntries<FAQFields>({
		content_type: "faq",
	});

	// Formatting
	let FAQs: FAQ[] = []

	for (let i = 0; i < items.length; i++) {
		const question = items[i].fields.question;
		const answer = items[i].fields.answer;
		FAQs.push({ question: question, answer: answer })
	}



	return (
		<div className="lg:block flex place-items-center flex-col">
			<img
				src="/imgs/faqs_img.png"
				alt="Photography"
				className="align-middle object-cover w-1/2 h-[40vw] hidden lg:inline-block"
			/>
			<div className="lg:w-1/2 bg-black text-white inline-flex flex-col justify-center p-10 align-middle">
				<h1 className="text-6xl mb-10 text-center font-bold  ">FAQs</h1>

				<FAQList FAQs={FAQs}></FAQList>

			</div>
		</div>

	);
};

export default FAQComponent;
