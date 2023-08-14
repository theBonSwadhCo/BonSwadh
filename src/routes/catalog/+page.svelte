<script>
	export let data;
	console.log(data);

	let searchedTerm = '';
	$: filteredrecipes = data.results.filter((recipe) => {
		return recipe.properties.Name.title[0].plain_text
			.toLowerCase()
			.includes(searchedTerm.toLowerCase());
	});

	let featuredrecipes = [data.results[0], data.results[1]];
</script>

<main>
	<header>
		<h1>Our Catalog</h1>
		<p>
			Discover a world of flavors with our diverse recipe collection, designed to delight your taste
			buds and satisfy every craving. Experience the joy of culinary exploration as we bring you an
			array of dishes that cater to a variety of preferences and occasions.
		</p>

		<input placeholder="Search for Recipe" type="text" bind:value={searchedTerm} />
	</header>

	{#if filteredrecipes.length != 0}<section>
			{#each filteredrecipes as item}
				<article>
					<img src={item.properties.cover.files[0].name} alt="" />
					<h2>{item.properties.Name.title[0].plain_text}</h2>
					<p>{item.properties.about.rich_text[0].plain_text}</p>
					<a href="/catalog/{item.id}">View Recipe</a>
				</article>
			{/each}
		</section>
	{:else if filteredrecipes.length == 0}
		<p class="msg">Sorry, we couldn't find what are looking for</p>
		<br />
		<p class="msg">Check out these while you're at it:</p>

		<section>
			{#each featuredrecipes as item}
				<article>
					<img src={item.properties.cover.files[0].name} alt="" />
					<h2>{item.properties.Name.title[0].plain_text}</h2>
					<p>{item.properties.about.rich_text[0].plain_text}</p>
					<a href="/catalog/{item.id}">View Recipe</a>
				</article>
			{/each}
		</section>
	{/if}
</main>

<style>
	header {
		margin-left: auto;
		margin-right: auto;
		display: flex;
		flex-direction: column;
		max-width: calc(var(--space-3xl) * 6);
		align-items: center;
		justify-content: center;
		text-align: center;
		gap: var(--space-s);
		margin-bottom: var(--space-xl);
	}

	input {
		background: transparent;
		outline: none;
		border: none;
		border-bottom: 2px var(--clr-txt) solid;
		user-select: none;
	}

	input::placeholder {
		color: var(--clr-txt);
		opacity: 40%;
		user-select: none;
	}

	p.msg {
		text-align: center;
	}

	section {
		max-width: calc(var(--space-3xl) * 8);

		margin-left: auto;
		margin-right: auto;
		display: grid;
		grid-template-columns: 1fr 1fr;
		/* place-items: center; */
		gap: var(--space-s);
	}

	@media screen and (max-width: 600px) {
		section {
			grid-template-columns: 1fr;
		}
	}

	img {
		aspect-ratio: 1/1;
		object-fit: cover;
		-webkit-user-drag: none;
	}

	article {
		display: flex;
		flex-direction: column;
		gap: var(--space-xs);
	}

	a {
		max-width: fit-content;
	}
</style>
