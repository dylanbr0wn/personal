import rss from '@astrojs/rss';
import { getRSS, published } from '@data/post';
type MarkdownInstance = import('astro').MarkdownInstance<any>;


const postsImported: MarkdownInstance[] = Object.values(import.meta.globEager('../content/blog/**/*.md'));


export const get = () => rss(getRSS(postsImported));