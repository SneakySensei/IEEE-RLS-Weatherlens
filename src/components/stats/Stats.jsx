import React from "react";
import Header from "./Header";
import MinMaxTemp from "./MinMaxTemp";

const Stats = () => {
	return (
		<section className="main-content">
			<Header />
			<h1>Today’s Highlights</h1>
			<section class="stats">
				<MinMaxTemp minTemp={20} maxTemp={25} unit="F" />
				<article>2</article>
				<article>3</article>
				<article>4</article>
				<article>5</article>
				<article>6</article>
			</section>
		</section>
	);
};

export default Stats;
