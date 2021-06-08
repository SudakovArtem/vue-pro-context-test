<template>
  <div class="container">
    <TheForm/>
    <TheIndicators/>
  </div>
</template>

<script>
import "./assets/style.scss"
import TheForm from "@/components/TheForm";
import TheIndicators from "@/components/TheIndicators";

export default {
  components: {
    TheIndicators,
    TheForm,
  }
}
</script>
