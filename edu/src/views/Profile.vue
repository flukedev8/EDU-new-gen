<template>
  <div class="allsheet">
  <tableprofilesheet />
  <tableprofileroom/>
  </div>
</template>

<script>
import tableprofileroom from '../components/tableprofileroom';
import tableprofilesheet from '../components/tableprofilesheet';

export default {
  name: 'allsheets',
  components: {
    tableprofileroom,
    tableprofilesheet,

  },
};
</script>

<style>

</style>