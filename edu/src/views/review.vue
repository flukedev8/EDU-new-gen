<template>
  <div class="allsheet">
  <searchreview />
  <tablereview/>
  </div>
</template>

<script>
import searchreview from '../components/searchreview';
import tablereview from '../components/tablereview';
export default {
  name: 'allsheets',
  components: {
    searchreview,
    tablereview,
  },
};
</script>

<style>

</style>