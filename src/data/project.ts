type MarkdownInstance = import('astro').MarkdownInstance<any>;
// Which mode is the environment running in? https://vitejs.dev/guide/env-and-mode.html#intellisense-for-typescript
const { MODE } = import.meta.env;

export type Project = {
    title: string,
    desc: string,
    img: URL,
    url: URL,
    Content: MarkdownInstance["Content"]
}

export function single(post: MarkdownInstance): Project {
    return {
        ...post.frontmatter,
        Content: post.Content,
    }
}

export function published(posts: MarkdownInstance[]): Project[] {
    return posts
        .filter(post => post.frontmatter.title)
        .map(post => single(post))
}