import ApiService from '@/services/ApiService'

export default {
  index (search) {
    return ApiService().get('posts', {
      params: {
        search
      }
    })
  },
  post (post) {
    return ApiService().post('posts', post)
  },
  show (postId) {
    return ApiService().get(`posts/${postId}`)
  },
  put (post) {
    return ApiService().put(`posts/${post.id}`, post)
  }
}
