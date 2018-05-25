<template>
  <div class="container">
    <h1 class="title">
      Hello World
    </h1>
    <p class="subtitle">
      My first website with <strong>Bulma</strong>!

      Ben ici ça va ressembler à un one page classique
    </p>
    <div :class="['network',online ? 'online' : 'offline']">
      <div class="circle"></div>
      {{ online ? 'online' : 'offline' }}
    </div>
    <div class="links">
      <a href="https://nuxtjs.org/" target="_blank" class="button is-primary" rel="noopener">Documentation</a>
      <a href="https://github.com/nuxt/nuxt.js" target="_blank" class="button is-light" rel="noopener">GitHub</a>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'index',
  components: {},
  data() {
    return {
      online: true
    }
  },
  mounted() {
    if (!window.navigator) {
      this.online = false
      return
    }
    this.online = Boolean(window.navigator.onLine)
    window.addEventListener('offline', this._toggleNetworkStatus)
    window.addEventListener('online', this._toggleNetworkStatus)
  },
  methods: {
    _toggleNetworkStatus({ type }) {
      this.online = type === 'online'
    }
  },
  destroyed() {
    window.removeEventListener('offline', this._toggleNetworkStatus)
    window.removeEventListener('online', this._toggleNetworkStatus)
  }
}
</script>

<style>
.links {
  padding-top: 15px;
}

.network {
  font-weight: 400;
  font-size: 1rem;
}

.network .circle {
  display: inline-block;
  width: 1rem;
  height: 1rem;
  background: green;
  padding: 0.1rem 0.5rem;
  border-radius: 1rem;
}

.network.offline .circle {
  background: red;
}
</style>
