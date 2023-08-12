<script>
	var x = false;
</script>

<main>
	<div class="container">
		<div class="nav_">🌑</div>

		<div class="about">

			
			<div class="title c">
				Hey! I'm Tanaka. I am an aspiring data scientist and AI researcher, based in Nottingham, UK.
				I'm a creative data enthusiast 📊🎨 with a passion for Python, JavaScript, and Golang. I
				transform data into insights, love building end-to-end data products ☁️, and experimenting
				with data modelling and machine learning to solve challenges. 
			</div>

			<div class="sub-heading c">My Work</div>
			<div class="c e">The Gardening App</div>
			<div class="d">I developed a prototype for an AI-powered gardening app, it harnesses the power of OpenAI's Language Model (LLM) API  to provide users with information about growing plants. The core objective of this  project revolves around the creation of an intelligent assistance platform that empowers gardeners with expert support and assistance across a wide range of growing tasks. The Data Science project report coming soon. </div>

			<a href="http://165.22.120.128:5173/" class="text-link">Try out the prototype now 🌱</a>

			<div class="mes c">
				🚧 This website is still under construction and being updated regularly - more content is
				coming soon
			</div>

			{#if x}
				<div class="sub-heading c">My work</div>
				<div class="col">
					<div class="c">1</div>
					<div class="c">2</div>
					<div class="c">3</div>
				</div>
			{/if}
		</div>
	</div>
</main>

<style lang="postcss">
	:global(html) {
		background-color: #ffeee7;
		margin: 0;
		padding: 0;
		font-family: Open Sans;
	}

	.container {
		width: 80%;
		margin: auto;
	}

	.nav_ {
		padding-top: 20px;
		padding-bottom: 20px;
		font-size: 25px;
		font-weight: 600;
		text-transform: uppercase;
	}

	.about {
		width: 80%;
		margin: auto;
		padding-top: 40px;
	}

	.col {
		display: grid;
		grid-template-columns: 1fr; /* Set the number of columns as needed */
		grid-gap: 10px; /* Adjust the gap between divs as desired */
	}

	.c {
		padding-top: 30px;
	}

	.d {
		padding-top: 10px;
		padding-bottom: 10px;
	}

	.e {
		font-weight: 600;
	}

	/* Style the link to look like text with underline */
	.text-link {
	text-decoration: none; /* Remove default underline */
	color: inherit; /* Use the default text color */
	font-family: inherit; /* Use the default font */
	font-size: inherit; /* Use the default font size */
	transition: font-size 0.3s, text-decoration 0.3s; /* Add transitions for hover effect */
	border-bottom: 1px solid currentColor; /* Add underline on hover using current text color */
	}

	/* Add hover effect to increase text size and underline */
	.text-link:hover {
	font-size: 110%; /* Increase font size on hover */
	border-bottom: 4px solid currentColor; /* Add underline on hover using current text color */
	}



	.title {
		font-size: 22px;
		line-height: 1.8;
		font-weight: 600;
	}

	.sub-heading {
		font-size: 20px;
		font-weight: 800;
	}

	.mes {
		font-size: 20px;
		font-weight: 600;
		font-style: italic;
		color: rgb(76, 76, 76);
		padding-top: 40px
	}
</style>
