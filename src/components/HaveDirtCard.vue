<template>
  <div>
    <md-card md-with-hover>
      <!-- <md-ripple> -->
      <div class="card-content-left">
        <md-card-header>
          <md-avatar class="md-avatar-icon">
            <md-icon>timer</md-icon>
          </md-avatar>

          <div class="md-title">Today, 4:15PM CST</div>
          <div class="md-subhead">Last dirt submission</div>
        </md-card-header>

        <md-card-header>
          <div class="md-title">I have dirt</div>
          <div class="md-subhead">Modify dirt inventory</div>
        </md-card-header>
      </div>
      <md-card-media>
        <img src="../assets/excavator.png" alt="E=excavator" />
      </md-card-media>
      <!-- </md-ripple> -->
    </md-card>
  </div>
</template>

<script>
export default {
  name: "HaveDirtCard"
};
</script>

<style lang="scss" scoped>
// change scoped property and elevate this?
.md-card.md-theme-default {
  margin: 0;
  width: 100%;
  display: inline-block;
  vertical-align: top;
  display: flex;
}

.card-content-left {
  flex-grow: 1;
}

.md-card-media {
  border-bottom-right-radius: 2px;
  border-top-right-radius: 2px;
  width: 140px;
  display: flex;
  align-items: center;
}
</style>