<template>
  <div class="cards-area">
    <div class="md-layout md-gutter md-alignment-center-center">
      <div class="md-layout-item md-size-30 md-medium-size-40 md-small-size-100">
        <AddDirt />
      </div>

      <div class="md-layout-item md-size-30 md-medium-size-40 md-small-size-100">
        <a href="#dirt-table" class="card-anchor">
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
              <img src="../assets/dumptruck.png" alt="dumptruck" />
            </md-card-media>
            <!-- </md-ripple> -->
          </md-card>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import AddDirt from "./AddDirt";

export default {
  name: "Cards",
  components: { AddDirt }
};
</script>

<style lang="scss" scoped>
.card-anchor {
  text-decoration: none;
}

.md-layout-item {
  margin: 8px 0;
}

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