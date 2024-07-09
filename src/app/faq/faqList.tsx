"use client";

import React, { useState } from "react";

interface FAQ {
	question: string;
	answer: string;
}

interface faqListProps {
	FAQs: FAQ[];
}

const FAQList: React.FC<faqListProps> = ({ FAQs }) => {
	const [activeFAQ, setActiveFAQ] = useState<number | null>(null);

	const toggleFAQ = (index: number) => {
		setActiveFAQ(activeFAQ === index ? null : index);
	};

	const renderAnswer = (answer: string) => {
		if (answer.startsWith("https")) {
			return (
				<a
					href={answer}
					target="_blank"
					rel="noopener noreferrer"
					className="pl-11 text-lg text-blue-500 underline"
				>
					Click Here!
				</a>
			);
		}
		return <p className="pl-11 text-lg">{answer}</p>;
	};

	return (
		<div className="space-y-4">
			{FAQs.map((FAQ, index) => (
				<div key={index}>
					{index > 0 && <hr className="border-gray-600 my-4" />}
					<div
						className="bg-black p-4 rounded-lg cursor-pointer flex items-center"
						onClick={() => toggleFAQ(index)}
					>
						<span
							className={`transform transition-transform mr-4 ${
								activeFAQ === index ? "rotate-90" : "rotate-0"
							}`}
						>
							▶
						</span>
						<h4
							className={`text-2xl flex-grow ${
								activeFAQ === index
									? "font-bold text-orange-400"
									: "font-semibold"
							}`}
						>
							{FAQ.question}
						</h4>
					</div>
					{activeFAQ === index && (
						<div className="mt-2 border-gray-600 pt-2">
							{renderAnswer(FAQ.answer)}
						</div>
					)}
				</div>
			))}
			<hr className="border-gray-600 my-4" />
		</div>
	);
};

export type { FAQ };
export default FAQList;
