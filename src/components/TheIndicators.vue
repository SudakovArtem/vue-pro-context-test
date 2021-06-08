<template>
  <div class="wrapper">
    <app-indicator-list
        v-for="list in lists"
        :key="list.id"
        :name="list.name"
        :items="list.items"
        :listId="list.id"
    ></app-indicator-list>
  </div>
</template>

<script>
import AppIndicatorList from "@/components/AppIndicatorList";

export default {
  name: "TheIndicators",
  computed: {
    lists() {
      return this.$store.getters.getLists
    }
  },
  components: {
    AppIndicatorList,
  }
}
</script>
