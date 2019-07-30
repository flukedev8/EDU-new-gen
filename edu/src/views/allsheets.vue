<template>
  <div class="allsheet">
  <searchsheet />
  <tablesheet/>
  </div>
</template>

<script>
import searchsheet from '../components/searchsheet';
import tablesheet from '../components/tablesheet';
export default {
  name: 'allsheets',
  components: {
    searchsheet,
    tablesheet,
  },
};
</script>

<style>

</style>