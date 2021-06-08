<template>
  <div class="wrapper">
    <form action="#">
      <app-checkbox-list
          v-for="list in lists"
          :key="'checkbox' + list.id"
          class="checkbox-group accordion"
          :items="list.items"
          :checked="list.checked"
          :id="list.id"
          :name="list.name"
          :open="list.open"
          :hasItems="list.hasItems">
        <app-checkbox-item
            v-for="item in list.items"
            :id="item.id"
            :key="item.id"
            :name="item.name"
            :color="item.color"
            :check="item.checked"
            @checkboxChange="change(list.id, $event)"
            @changeValue="changeValue(list.id, $event)"
            @changeColor="changeColor(list.id, $event)"
            :value="item.quantity"
        ></app-checkbox-item>
      </app-checkbox-list>
    </form>
  </div>
</template>

<script>
import AppCheckboxList from "@/components/AppCheckboxList";
import AppCheckboxItem from "@/components/AppCheckboxItem";

export default {
  methods: {
    change(listId, id) {
      this.$store.commit('changeItemCheck', {id, listId})
    },
    changeValue(listId, id) {
      this.$store.commit('changeListQuantity', {id, listId, value: +event.target.value})
    },
    changeColor(listId, id) {
      this.$store.commit('changeItemColor', {id, listId, value: event.target.value})
    }
  },
  computed: {
    lists() {
      return this.$store.getters.getLists
    }
  },
  name: "TheForm",
  components: {
    AppCheckboxItem,
    AppCheckboxList,
  }
}
</script>
