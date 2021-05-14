<template>
  <div class="hello">
    <h1>Gecko main page</h1>
    <h2>Welcome to awesome</h2>
    <nuxt-link to="/blog" class="btn">Go to blog</nuxt-link>
  </div>
</template>

<script>
import {getPosts} from "../api/posts";

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

.btn {
  padding: 16px 24px;
  background-color: coral;
  border-radius: 12px;
  color: white;
  text-decoration: none;
}
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.hello {
  margin: 0 auto;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
}

.hello > h1, h2 {
  margin: 24px 0 0 0;
}

.hello > h2 {
  margin-bottom: 48px;
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
