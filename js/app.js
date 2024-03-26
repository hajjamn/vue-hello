console.log('ciao mondo')

const { createApp } = Vue

createApp({
  data() {
    return {
      message: 'Vue',
      pictureUrl: 'https://media.tenor.com/1_-rzgLny2IAAAAi/wave-hello.gif'
    }
  }
}).mount('#app')