import GhostContentAPI from "@tryghost/content-api";

// Create API instance with site credentials
const api = new GhostContentAPI({
    url: 'https://gecko-inc.ghost.io',
    key: '45528cac15fac0487110838312',
    version: "v3"
});

export async function getPosts() {
    return await api.posts
        .browse({
            limit: "all",
        })
        .catch(err => {
            console.error(err);
        });
}

export async function getSinglePost(postSlug) {
    return await api.posts
        .read({
            slug: postSlug
        })
        .catch(err => {
            console.error(err);
        });
}