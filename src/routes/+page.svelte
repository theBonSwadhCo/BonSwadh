<img class="img1" src="cob.svg" alt="" /><img src="basil.svg" alt="" class="img2" />
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
	img {
		position: absolute;
		max-height: 80vh;
		max-width: 35vw;
		bottom: 20%;
		opacity: 0.4;
		position: absolute;
		top: 50%;
		-webkit-transform: translateY(-50%);
		transform: translateY(-50%);
		user-select: none;
		-webkit-user-drag: none;

		z-index: -2;
	}

	.img1 {
		right: 2.5%;
	}
	.img2 {
		left: 2.5%;
	}

	header {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		flex-direction: column;
		min-height: 100%;
		gap: var(--space-xs);

		-webkit-transform: translateY(35%);
		transform: translateY(35%);
	}

	p {
		max-width: 60ch;
	}
</style>
