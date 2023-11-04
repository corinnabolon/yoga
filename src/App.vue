<template>
  <header>
    <Navbar />
  </header>
  <main>
    <router-view />
  </main>
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
import Navbar from './components/Navbar.vue'


export default {
  setup() {
    return {
      appState: computed(() => AppState)
    }
  },
  components: { Navbar }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

:root {
  --main-height: calc(100vh - 32px - 64px);
  --theme-beige: #F2EE9D;
  --theme-beige-lighten: #eeecad;
  --theme-lightgreen: #7A9D54;
  --theme-darkgreen: #557A46;
  --theme-maroon: #8C3333;
}


footer {
  display: grid;
  place-content: center;
  height: 32px;
}

.raleway {
  font-family: 'Raleway', sans-serif;
}

.bg-theme-beige {
  background-color: var(--theme-beige);
}

.bg-theme-beige-lighten {
  background-color: var(--theme-beige-lighten);
}

.bg-theme-lightgreen {
  background-color: var(--theme-lightgreen);
}

.bg-theme-darkgreen {
  background-color: var(--theme-darkgreen);
}

.bg-theme-maroon {
  background-color: var(--theme-maroon);
}

.text-theme-beige {
  color: var(--theme-beige);
}

.text-theme-darkgreen {
  color: var(--theme-darkgreen);
}

.text-theme-maroon {
  color: var(--theme-maroon);
}

.btn-theme-maroon {
  background-color: var(--theme-maroon);
  color: var(--theme-beige);
}

.btn-theme-maroon:hover {
  background-color: var(--theme-lightgreen);
  color: var(--theme-maroon);
  border: 1px solid var(--theme-maroon);
}

.text-shadow-maroon {
  text-shadow: 2px 2px 3px var(--theme-maroon), 2px 2px 3px var(--theme-maroon), 2px 2px 3px var(--theme-lightgreen);
}

.text-shadow-lightgreen {
  text-shadow: 2px 2px 3px var(--theme-lightgreen), 2px 2px 3px var(--theme-beige), 2px 2px 3px var(--theme-beige);
}
</style>
