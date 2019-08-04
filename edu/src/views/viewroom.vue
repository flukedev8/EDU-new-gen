<template>
  <div class="viewroom">
  <roomstory />
  <roomcomment/>
  <roomboxcomment/>
  </div>
</template>

<script>
import roomstory from '../components/roomstory';
import roomcomment from '../components/roomcomment';
import roomboxcomment from '../components/roomboxcomment';

export default {
  name: 'viewroom',
  components: {
    roomstory,
    roomcomment,
    roomboxcomment,
  },
};
</script>
     
<style>

</style>