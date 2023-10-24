<div class="container">
	<header></header>
	<main>
		<slot />
	</main>
</div>

<style>
	.container {
		position: fixed;
		top: 0;
		left: 0;
		height: 100vh;
		width: 100vw;
		display: block;
		background-color: darkslateblue;
		color: rgb(220, 219, 219);
	}

	main {
		height: 100%;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
