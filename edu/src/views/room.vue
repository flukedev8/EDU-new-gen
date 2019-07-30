<template>
  <div class="allsheet">
  <searchroom />
  <tabletoproom/>
  <tableroom/>
  </div>
</template>

<script>
import searchroom from '../components/searchroom';
import tableroom from '../components/tableroom';
import tabletoproom from '../components/tabletoproom';
export default {
  name: 'allsheets',
  components: {
    searchroom,
    tableroom,
    tabletoproom,
  },
};
</script>

<style>

</style>