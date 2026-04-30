<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { findResidentById } from '@/api'
import router from '@/router'
import OrishaAvatar from '@/components/atoms/OrishaAvatar'
import { getGender, getAvatar } from '@/model/resident'
import type { Resident } from '@/api/types'
import { usePathStore } from '@/stores/path'

const pathStore = usePathStore()

const pathShallowCopy = [...pathStore.path]

const resident: Resident = ref({
  id: '1',
  prefixedId: '',
  nomComplet: '',
  nomNaissance: '',
  age: 0,
  ageTexte: '',
  dateNaissance: '',
  ins: '',
  secteurSousSecteur: {
    idEtablissementSecteur: 0,
    prefixedIdEtablissementSecteur: '',
    libelleEtablissementSecteur: '',
    idEtablissementSousSecteur: 0,
    prefixedIdEtablissementSousSecteur: '',
    libelleEtablissementSousSecteur: '',
    libelleComplet: '',
  },
  chambre: {
    idEtablissementChambre: 0,
    prefixedIdEtablissementChambre: '',
    libelleEtablissementChambre: '',
  },
  situationAdministrative: {
    idSituationAdministrative: 0,
    prefixedIdSituationAdministrative: '',
    texte: '',
    couleur: '',
  },
  isFavorite: false,
})

const tabs = ref([
  {
    name: 'synthese',
    label: 'Synthèse',
  },
  {
    name: 'soins',
    label: 'Soins',
  },
  {
    name: 'admin',
    label: 'Administratif',
  },
  {
    name: 'alimentation',
    label: 'Alimentation',
  },
  {
    name: 'intendance',
    label: 'Intendance',
  },
  {
    name: 'others',
    label: 'Autres',
  },
])

const activeTab = ref('synthese')

onMounted(async () => {
  const user = await findResidentById(router.currentRoute.value.params.id)
  resident.value = user
})

function tabSelected(tab) {
  activeTab.value = tab.name
  pathStore.updatePath([...pathShallowCopy, tab.label])
}
</script>

<template>
  <div class="resident-file">
    <div class="resident-file__hero">
      <OrishaAvatar class="orisha-a-avatar--headband" :image="getAvatar(resident)" />
      <div class="resident-file__info">
        <div class="resident-file__name">
          {{ resident.nomComplet }}
        </div>
        <div class="resident-file__details">
          <div class="resident-file__tag resident-file__id">
            <b>GIR {{ resident.id }}</b>
          </div>
          <div class="resident-file__tag resident-file__age">
            <i class="ph-light" :class="`ph-gender-${getGender(resident)}`" />
            <b>{{ resident.age }} ans</b> ({{ resident.dateNaissance }})
          </div>
          <div class="resident-file__tag resident-file__room">
            <b>CH {{ resident.chambre.libelleEtablissementChambre }}</b>
          </div>
          <div class="resident-file__tag resident-file__doctor">
            Médecin traitant <b>ÄRZTIN V.</b>
          </div>
        </div>
      </div>
    </div>
    <div class="orisha-tabs">
      <div
        v-for="tab in tabs"
        :key="tab.name"
        class="orisha-tabs__tab"
        :class="activeTab === tab.name ? 'orisha-tabs__tab--active' : ''"
        @click="tabSelected(tab)"
      >
        {{ tab.label }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/variables/colors' as colors;
@use '@/assets/scss/variables/corners' as corners;
@use '@/assets/scss/variables/spacings' as spacings;
@use '@/assets/scss/mixins/text' as text;
@use '@/assets/scss/mixins/box' as box;

.resident-file__hero {
  @include box.flex(center, start);
  width: 100%;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: colors.$stroke-primary;
  padding: spacings.$md-0;

  .orisha-a-avatar--headband {
    margin-right: spacings.$md-0;
  }
}

.resident-file__info {
  @include box.flex(start, center, column);

  .resident-file__name {
    @include text.body-lg(500);
    padding-bottom: spacings.$sm-4;
  }
}

.resident-file__details {
  @include box.flex(center, start);
}

.resident-file__tag {
  @include text.body-xxs;
  height: 20px;
  background-color: colors.get('neutral', 'grey', 200);
  color: colors.$text-secondary;
  border-radius: corners.$steep;
  margin-right: spacings.$sm-2;
  padding: spacings.$sm-2 spacings.$sm-2;

  b {
    @include text.body-xxs(500);
    color: colors.$text-primary;
  }
}

.resident-file__age {
  i {
    font-size: 9px;
    margin-right: spacings.$sm-1;
  }
}

.orisha-tabs {
  @include box.flex(center, start);
  width: 100%;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: colors.$stroke-primary;
  height: spacings.$lg-4;
  padding: 0 spacings.$sm-4;
}

.orisha-tabs__tab {
  @include text.body-md(500);
  padding: spacings.$md-1 spacings.$md-0;
  color: colors.$text-secondary;
  border-bottom: none;
  cursor: pointer;

  &--active {
    color: colors.$primary;
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-bottom-color: colors.$primary;
    cursor: initial;
    padding-bottom: spacings.$md-1 - 1px;
  }
}
</style>
