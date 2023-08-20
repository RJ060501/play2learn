<template>
     <div class="row, mx-2 my-3">
    <label class="col fw-bold m-1" :for="id">{{label}}</label>
    <select :id="id" :value="currentValue">
      <option v-for="option in options" :key="option[1]"
        :value="option[1]">
        {{option[0]}}
      </option>
    </select>
  </div>
</template>
    
    <script>
    export default {
  name:'SelectInput',
  props: {
    id: String,
    label: String,
    options: Array,
    currentValue: String,
  },
}
    </script>
    
    <style>
    
    </style>