<template>
    <div class="container">
        <h1 class="title">
        Ze blog qui tue
        </h1>
        <p class="subtitle">
        My first website with <strong>Bulma</strong>!

        Ben ici ça va ressembler à un blog classique
        </p>

        <post-list :posts="posts"></post-list>
    </div>
</template>

<script>
import PostsService from '@/services/PostsService'
import PostList from '@/components/Post/PostList'

export default {
  data() {
    return {
      title: 'Posts',
      posts: null
    }
  },
  components: { PostList },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Articles about javascript, front-end and back-end webdevelopment, node and express, api-platform, symfony, etc.'
        }
      ]
    }
  },
  watch: {
    '$route.query.search': {
      immediate: true,
      async handler(value) {
        this.posts = (await PostsService.index(value)).data
      }
    }
  },
  async mounted() {
    // request to the backend to get all posts
    this.posts = (await PostsService.index()).data
  }
}
</script>

