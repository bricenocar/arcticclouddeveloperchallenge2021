<template>
    <div class="container-fluid">
      <div class="row blog">
        <div class="col-md-12 overview">
          <h3 class="lightbrowntitle">ACDC Blog</h3>
          </div>
        </div>
      </div>
</template>
<script>
import Butter from 'buttercms';

export default {
  name: 'Blog', //this is the name of the component
  methods: {
    track () {
      this.$ga.page('/')
    }
  }
}
</script>
<style>

</style>