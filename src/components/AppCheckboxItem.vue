<template>
  <li class="list__item">
    <div class="checkbox">
      <input class="visually-hidden" type="checkbox" :id="id" :checked="check"
             @change.prevent="$emit('checkboxChange', id)">
      <label :for="id">
        <img src="../assets/img/check-icon.svg" alt="check" width="24" height="19">
        <span>{{ name }}</span>
      </label>
    </div>
    <div class="counter">
      <label>
        <input type="number" min="1" max="99" class="counter__input" :value="value"
               @change.prevent="$emit('changeValue', id)">
      </label>
      <label>
        <span class="counter__indicator indicator indicator--big" :style="{backgroundColor: color}"></span>
        <input class="visually-hidden" type="color" :id="'color-' + id" name="head" :value="color"
               @change.prevent="$emit('changeColor', id)">
      </label>
    </div>
  </li>
</template>

<script>
export default {
  emits: ['checkboxChange', 'changeValue', 'changeColor'],
  props: {
    name: {type: String, required: true},
    color: {type: String, required: true},
    check: {type: Boolean, required: true},
    id: {type: String, required: true},
    value: {type: Number, required: true}
  },
  name: "AppCheckboxItem",
}
</script>

<style lang="scss">
.list__item {
  display: flex;
  justify-content: space-between;
  align-items: center;

  + .list__item {
    margin-top: 22px;
  }
}

.counter {
  display: flex;
  align-items: center;

  label {
    display: flex;
    align-items: center;
  }

  input[type="number"] {
    font-size: 28px;
    text-align: right;
    width: 60px;
    border: none;

    @media (max-width: 767px) {
      font-size: 18px;
    }
  }
}

.counter__indicator {
  margin-left: 20px;
}

.indicator {
  display: block;
  width: 19px;
  height: 19px;
  border: none;
  padding: 0;

  &--big {
    width: 32px;
    height: 32px;
  }

  &.red {
    background-color: red;
  }

  &.yellow {
    background-color: yellow;
  }

  &.green {
    background-color: green;
  }

  &.blue {
    background-color: blue;
  }
}
</style>
