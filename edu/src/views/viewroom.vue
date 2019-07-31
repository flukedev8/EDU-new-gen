<template>
  <div class="viewroom">
  <roomstory />
  <roomcomment/>
  </div>
</template>

<script>
import roomstory from '../components/roomstory';
import roomcomment from '../components/roomcomment';
export default {
  name: 'viewroom',
  components: {
    roomstory,
    roomcomment,
  },
};
</script>
     
<style>

</style>