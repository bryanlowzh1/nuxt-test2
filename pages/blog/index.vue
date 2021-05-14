<template>
  <div class="container">
    <main>
      <h2>Latest stuff</h2>
      <ul>
        <li v-for="(post, index) in posts" :key="index">
          <img :src="post.feature_image">
          <div class="content">
            <nuxt-link :to="{path: '/blog/' + post.slug}">
              {{ post.title }}
            </nuxt-link>
            <p>{{post.excerpt}}</p>
          </div>
        </li>
      </ul>
    </main>
  </div>
</template>

<script>
import {getPosts} from "~/api/posts";

export default {
  async asyncData() {
    const posts = await getPosts();
    return {
      posts: posts
    }
  }
}
</script>

<style>

ul {
  list-style: none;
}

li > img {
  width: 300px;
  height: 200px;
  align-self: center;
  justify-self: center;
  margin: auto;
}

li {
  margin: 24px 0 24px 0;
  padding: 24px;
  border-radius: 12px;
  background-color: hsla(100, 20%, 80%, 0.5);
  display: grid;
  grid-auto-flow: row;
  grid-row-gap: 24px;
  justify-content: center;
}
.content {
  display: grid;
  grid-auto-flow: row;
  grid-row-gap: 12px;
}
li a {
  text-decoration: none;
  font-weight: 600;
  color: black;
  /*padding: 12px 0 12px 0;*/
}
.container {
  margin: 0 auto;
  width: auto;
  max-width: 500px;
  /*min-height: 100vh;*/
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

main {
  width: 100%;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
  'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
