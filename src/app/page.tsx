import HomePage from "./home/page";
import Featured from "./_featured/page";
import Contact from "./_contact/page";
import Calendar from "./_calendar/page";
import AestheticCircle from "@/components/ui/AestheticCircle";
import Faq from "./_faq/page";
import Board from "./_board/page";
import Head from "next/head";

export default function Home() {
	return (
		<main>
			<Head>
				<meta
					name="Photography Club's Website"
					content="This is the main website for Photography Club Skyline High School."
				/>
				<meta name="keywords" content="next.js, SEO, meta tags" />
				<meta name="Alpine Dev" content="Alpine Dev" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				/>
				<meta charSet="UTF-8" />
			</Head>
			<div id="home" className="relative overflow-hidden">
				<AestheticCircle className="-left-[50%] bg-[#6C254C]"></AestheticCircle>
				<AestheticCircle className="-right-[50%] -top-[50%] bg-[#BC5604]"></AestheticCircle>
				<HomePage></HomePage>
			</div>
			<div id="featured">
				<Featured></Featured>
			</div>
			<div id="calendar" className="">
				<Calendar />
			</div>
			<div id="board">
				<Board></Board>
			</div>
			<div id="contact">
				<Contact></Contact>
			</div>
			<div id="faq" className="relative">
				<Faq></Faq>
				<p className="left-0 bottom-0 rounded-tr-lg bg-[#101010] py-2 px-4 text-sm shadow-lg shadow-black fixed">
					Created by the Alpine Dev Team. Contact us at
					<br />
					<b>alpinedevservice@gmail.com</b> for your own website.
				</p>
			</div>
		</main>
	);
}
