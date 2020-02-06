<template>
  <div>
    <div class="md-layout md-gutter md-alignment-center-center">
      <div class="md-layout-item md-size-40 md-small-size-100">
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
      
      <div class="md-layout-item md-size-40 md-small-size-100">
        <a href="#inventory-map">
        <md-card md-with-hover>
          <md-ripple>
          <md-card-header>
            <md-avatar class="md-avatar-icon">
              <md-icon>timer</md-icon>
            </md-avatar>

            <div class="md-title">Yesterday, 9:27PM CST</div>
            <div class="md-subhead">Last dirt request</div>
          </md-card-header>
          <md-card-media>
            <img src="../assets/dumptruck.png" alt="Dumptruck" />
          </md-card-media>
          <md-card-header>
            <div class="md-title">I need dirt</div>
            <div class="md-subhead">Find dirt close by</div>
          </md-card-header>
          </md-ripple>
        </md-card>
      </a>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  name: "Cards",
  methods: {
    sendMessage() {
      window.alert("Send a message...");
    },
    doACall() {
      window.alert("Calling someone...");
    }
  }
};
</script>

<style lang="scss" scoped>
.md-layout {
  margin: 32px;
}

.md-card {
  width: 320px;
  margin: 4px;
  display: inline-block;
  vertical-align: top;
}

.md-card-example {
  .md-subhead {
    .md-icon {
      $size: 16px;

      width: $size;
      min-width: $size;
      height: $size;
      font-size: $size !important;
    }

    span {
      vertical-align: middle;
    }
  }

  .card-reservation {
    margin-top: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .md-icon {
      margin: 8px;
    }
  }

  .md-button-group {
    display: flex;

    .md-button {
      min-width: 60px;
      border-radius: 2px;
    }
  }
}
</style>