<template>
  <BaseModal v-model="value" v-slot="{ hide }">
    <BaseModalCard>
      <div class="tw-text-right tw-mb-4">
        <BtnsActionsBase class="" icon="close" @click="hide" />
      </div>
      <div class="text-about" v-if="currentProg" v-html="currentProg.specification"></div>
    </BaseModalCard>
  </BaseModal>
</template>

<script setup lang="ts">
  const value = defineModel<boolean>({ default: false });

  import { useCreditProgramCalc } from '@/other-modules/credit-program-calc/store';
  import { useCreditPrograms } from '@/stores/credit-programs';

  const creditCalc = useCreditProgramCalc();
  const creditProg = useCreditPrograms();

  const progs = computed(() => creditProg.creditProgs?.data ?? []);
  const currentProg = computed(() => {
    return progs.value.find(prog => prog.id === creditCalc.groupId) ?? null;
  });
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
