<script>
	import './style.css';
</script>

<svelte:head>
	<title>Bon Swadh</title>
</svelte:head>
<nav>
	<ul>
		<li><a href="/">Bon-Swadh</a></li>
		<li><a href="/catalog">Catalog</a></li>
		<li><a href="/contact">Contact</a></li>
	</ul>
</nav>
<slot />

<style>
	nav {
		display: flex;
		justify-content: center;
	}

	ul {
		display: flex;
		gap: var(--space-s);
	}

	a {
		text-decoration: none;
	}
</style>
