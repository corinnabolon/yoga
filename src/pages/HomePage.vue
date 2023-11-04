<template>
  <div class="container-fluid">
    <section class="row">
      <div v-if="poses" class="col-12 my-3">
        <div v-for="pose in poses" :key="pose.id">
          <PoseCard :poseProp="pose" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { computed, onMounted } from "vue";
import { yogaService } from '../services/YogaService.js'
import Pop from "../utils/Pop.js";
import { logger } from "../utils/Logger.js";
import { AppState } from "../AppState.js";

export default {
  setup() {

    onMounted(() => {
      getPoses();
      getBeginnerPoses();
    }
    )

    async function getPoses() {
      try {
        logger.log("HomePage")
        await yogaService.getPoses()
      } catch (error) {
        Pop.error(error)
      }
    }

    async function getBeginnerPoses() {
      try {
        await yogaService.getBeginnerPoses()
      } catch (error) {
        Pop.error(error)
      }
    }

    return {
      poses: computed(() => AppState.poses),

    }
  }
}
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: 50vw;

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
