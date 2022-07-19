import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	:root {
		--background: #f8f2f5;
		--red: #e52e4d;
		--blue: #5429cc;
		--green: #33cc95;
		--blue-light: #6933ff;
		--text-title: #363F5F;
		--text-body: #969cb3;
		--shape: #fff;
	}

	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: 'Poppins', sans-serif;
		font-weight: 400;
	}

	h1,h2,h3, strong {
		font-weight: 600;
	}

	html {
		@media (max-width: 1080px) {
			font-size: 93.75%;
		}
		@media (max-width: 720px) {
			font-size: 87.5%;
		}
	}

	body {
		background: var(--background);
		-webkit-font-smoothing: var(--background); 
	}

	button {
		transition: filter 0.2s;
		cursor: pointer;

		&:hover {
			filter: brightness(0.9);
		}

		&:active {
			filter: brightness(0.8);
		}
	}
`