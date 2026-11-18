<template>
  <BaseModal v-model="value" v-slot="{ hide }">
    <BaseModalCard>
      <div class="tw-text-right tw-mb-4">
        <BtnsActionsBase class="" icon="close" @click="hide" />
      </div>
      <div class="text-about" v-html="currentText"></div>
    </BaseModalCard>
  </BaseModal>
</template>

<script setup lang="ts">
  const value = defineModel<boolean>({ default: false });

  defineProps<{
    currentText: string,
  }>();
</script>

<style scoped lang="scss">
  .text-about {
    &:deep(p) {
      margin: 10px 0;
    }

    &:deep(ol) {
      list-style: disc;
      padding-left: 20px;
    }

    &:deep(strong) {
      @apply tw-font-freesetdemi;
    }
  }
</style>
