<template>
    <div id="equation">
      Anagram
    </div>
  
  </template>
  
  <script>
    export default {
      name: 'GameWord',
      props: {
      answer: String
    }
    }
  </script>

<style scoped>
  #equation {
    font-size: 1.6em;
    margin: auto;
    width: 90%;
  }
  </style>