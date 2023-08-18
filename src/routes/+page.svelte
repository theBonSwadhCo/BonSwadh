<img src="/left.png" alt="" class="left" /><img src="/right.png" alt="" class="right" />

<main>
	<header>
		<h1>Bon-Swadh</h1>
		<p>
			For those with packed routines, especially young individuals, explore a selection of rapid and
			bona fide Indian recipes. Crafted to accommodate time constraints, these recipes deliver
			genuine flavors without compromise. Discover quick preparations like stir-fries and comforting
			stews, along with effortless twists on staples like rice. Enjoy the convenience of
			microwave-ready snacks that still capture the essence of Indian cuisine, providing a taste of
			home even during busy moments.
		</p>
		<a href="/catalog">View Recipes</a>
	</header>
</main>

<style>
	header {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		flex-direction: column;
		gap: var(--space-xs);

		width: 90%;
		background: #cc9b67;
		border-radius: var(--space-2xs);
		padding: var(--space-2xl);
		/* -webkit-transform: translateY(35%); */
		/* transform: translateY(35%); */
	}

	header > * {
		z-index: 2;
	}

	main {
		min-height: 93vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	p {
		max-width: 60ch;
	}

	a {
		border: #000 2px solid;
	}

	img {
		position: absolute;
		z-index: 1;
		max-height: 60%;
		bottom: 50%;
		transform: translateY(50%);
	}
	.left {
		left: 0;
	}
	.right {
		right: 0;
	}

	@media screen and (max-width: 1000px) {
		img {
			max-height: 40%;
		}
	}
	@media screen and (max-width: 800px) {
		img {
			max-height: 22%;
		}
	}
	@media screen and (max-width: 700px) {
		img {
			display: none;
		}
	}
</style>
