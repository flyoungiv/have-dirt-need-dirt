<template>
  <div>
    <md-card md-with-hover>
      <md-ripple>
        <md-card-header>
          <md-avatar class="md-avatar-icon">
            <md-icon>timer</md-icon>
          </md-avatar>

          <div class="md-title">Today, 4:15PM CST</div>
          <div class="md-subhead">Last dirt submission</div>
        </md-card-header>
        <md-card-media>
          <img src="../assets/excavator.png" alt="Excavator" />
        </md-card-media>
        <md-card-header>
          <div class="md-title">I have dirt</div>
          <div class="md-subhead">Modify dirt inventory</div>
        </md-card-header>
      </md-ripple>
    </md-card>
  </div>
</template>

<script>
export default {
  name: "HaveDirtCard",
};
</script>

<style lang="scss" scoped>
// change scoped property and elevate this?
.md-card {
  width: 320px;
  margin: 4px;
  display: inline-block;
  vertical-align: top;
}
</style>