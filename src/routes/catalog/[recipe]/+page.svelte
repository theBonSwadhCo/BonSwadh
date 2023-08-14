<script>
	export let data;
	console.log(data);
</script>

<main>
	<img src={data.properties.cover.files[0].name} alt="" />
	<h1>{data.properties.Name.title[0].plain_text}</h1>
	<p>{data.properties.about.rich_text[0].plain_text}</p>

	{#each data.children as item}
		{#if item.type == 'heading_2'}
			<h2>{item.heading_2.rich_text[0].plain_text}</h2>
		{:else if item.type == 'paragraph' && item.paragraph.rich_text[0].plain_text !== ''}
			<p>{item.paragraph.rich_text[0].plain_text}</p>
		{:else}
			<br />
		{/if}
	{/each}
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		max-width: 50rem;
		justify-content: center;
		margin-right: auto;
		margin-left: auto;
	}

	img {
		aspect-ratio: 1/1;
		object-fit: cover;
	}

	h2 {
		margin-top: var(--space-l);
	}
</style>
