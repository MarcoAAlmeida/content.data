<template>
    <picture class="image">
      <img
        :src="imgSrc"
        :alt="alt"
        draggable="false"
      >
    </picture>
  </template>
  
  <script>
  export default {
    name: 'ImgThumb',
    props: {
      src: {
        type: String,
        required: true
      },
      alt: {
        type: String,
        required: true
      }
    },
    computed: {
      imgSrc () {
        return require(`~/public/img/${this.src}`)
      }
    }
  }
  </script>
  
  <style lang="scss" scoped>
  picture {
    margin: auto;
    display: flex;
    img {
      width: 3em;
      margin: auto;
      object-fit: scale-down;
    }
  }
  </style>
  