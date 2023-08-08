//import adapter from '@sveltejs/adapter-auto';
import adapter from 'svelte-adapter-static-digitalocean';



import { vitePreprocess } from '@sveltejs/kit/vite';


/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter({
            // default options are shown
            pages: 'build',
            assets: 'build',
            fallback: '404.html',
            precompress: false,
            strict: true,
            spec: '.do/spec.yaml',
            name: ''
        }),
	}, 
	//preprocess: vitePreprocess()
};



export default config;
