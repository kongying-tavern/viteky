<script setup lang="ts">
import { useUserStore } from '~/stores/user'

const props = defineProps<{ name: string }>()
const router = useRouter()
const user = useUserStore()
const { t } = useI18n()

watchEffect(() => {
  user.setNewName(props.name)
})
</script>

<template>
  <div>
    <p class="text-4xl">
      <carbon-pedestrian class="inline-block" />
    </p>
    <p>
      {{ t('intro.hi', { name: props.name }) }}
    </p>

    <p class="text-sm opacity-50">
      <em>{{ t('intro.dynamic-route') }}</em>
    </p>

    <template v-if="user.otherNames.length">
      <div class="text-sm mt-4">
        <span class="opacity-75"> {{ t('intro.aka') }}: </span>
        <ul>
          <li v-for="_name in user.otherNames" :key="_name">
            <router-link :to="`/hi/${name}`" replace>
              {{ name }}
            </router-link>
          </li>
        </ul>
      </div>
    </template>

    <div>
      <button class="btn m-3 text-sm mt-6" @click="router.back()">
        {{ t('button.back') }}
      </button>
    </div>
  </div>
</template>
