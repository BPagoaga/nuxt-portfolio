<template>
    <ul>
        <post-list-item v-for="post in posts" :key="post.id" :post="post"></post-list-item>
    </ul>
</template>

<script>
import PostListItem from '@/components/Post/PostListItem'

export default {
  data() {
    return {}
  },
  props: ['posts'],
  components: { PostListItem }
}
</script>

