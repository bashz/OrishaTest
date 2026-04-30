<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { RouterLink } from 'vue-router'
import { findResidentsBySectors, getSectors } from '@/api'
import OrishaSidebar, { OrishaSidebarItem } from '@/components/organisms/OrishaSidebar'
import OrishaRadio from '@/components/atoms/OrishaRadio/'
import OrishaAvatar from '@/components/atoms/OrishaAvatar'
import OrishaBadge from '@/components/atoms/OrishaBadge'
import { getAvatar } from '@/model/resident'
import type { Resident } from '@/api/types'

const selectedSector = ref('')
const sectorList = ref([])
const residents: Resident[] = ref([])
const displayTable = ref(true)
const search = ref('')

onMounted(async () => {
  const subSectors = await getSectors()

  const sectors = []
  const allSectors = {
    level: 1,
    label: 'Tous les secteurs',
    payload: [],
    append: true,
  }

  Object.entries(subSectors).forEach(([floorName, floor]) => {
    sectors.push({
      level: 2,
      label: floorName,
      payload: floor,
      append: true,
    })
    allSectors.payload = allSectors.payload.concat(floor)
    floor.forEach((room) => {
      sectors.push({
        level: 3,
        label: room,
        payload: room,
        append: true,
      })
    })
  })

  sectors.unshift(allSectors)
  selectedSector.value = allSectors.payload
  sectorList.value = sectors
})

watch([selectedSector, search], async ([newSector, newSearch]) => {
  let users = await findResidentsBySectors(newSector)
  console.log(users)
  console.log(newSearch)
  if (newSearch.length) {
    const regex = new RegExp(`${newSearch}`, 'gi')
    users = users.filter(
      (resident) => resident.nomNaissance.match(regex) || resident.nomComplet.match(regex),
    )
  }
  residents.value = users
})
</script>

<template>
  <div class="resident-list">
    <OrishaSidebar class="resident-list__sidebar" :items="sectorList">
      <template #item="props">
        <OrishaSidebarItem
          :label="props.item.label"
          :level="props.item.level"
          :payload="props.item.payload"
          :append="props.item.append"
          :prepend="props.item.prepend"
        >
          <template #append="props">
            <OrishaRadio
              class="orisha-a-radio--sm"
              name="location"
              :value="props.payload"
              v-model="selectedSector"
            />
          </template> </OrishaSidebarItem
      ></template>
    </OrishaSidebar>
    <div class="resident-list__main">
      <h1>Tous les résidents</h1>
      <div class="resident-list__count">
        {{ residents.length }} {{ residents.length === 1 ? 'résident' : 'résidents' }}
      </div>
      <div class="resident-list__action">
        <div
          class="resident-list__inputWrapper orisha-input__container orisha-input__container--prepend"
        >
          <input style="width: 50%" v-model="search" />
          <i class="ph-light ph-magnifying-glass" />
        </div>
        <div class="resident-list__display">
          <button
            class="orisha-button--icon orisha-button--sm"
            :class="displayTable ? 'orisha-button--tertiary' : 'orisha-button--white'"
            :disabled="displayTable"
            @click="() => (displayTable = true)"
          >
            <i class="ph-light ph-list" />
          </button>
          <button
            class="orisha-button--icon orisha-button--sm"
            :class="displayTable ? 'orisha-button--white' : 'orisha-button--tertiary'"
            :disabled="!displayTable"
            @click="() => (displayTable = false)"
          >
            <i class="ph-light ph-squares-four" />
          </button>
        </div>
        <button class="orisha-button">
          <i class="orisha-button__prepend ph-bold ph-plus" />Nouveau résident
        </button>
      </div>
      <div v-if="displayTable" class="resident-list__table">
        <table>
          <thead>
            <tr>
              <th colspan="2">Résident</th>
              <th>Date de naissance</th>
              <th>INS</th>
              <th>Secteur</th>
              <th>Chambre</th>
              <th>Situation administrative</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="resident in residents" :key="resident.id">
              <td class="resident-list__avatarCell">
                <OrishaAvatar class="orisha-a-avatar--md" :image="getAvatar(resident)" />
              </td>
              <td class="resident-list__nameCell">
                <div class="resident-list__cell--main">{{ resident.nomComplet }}</div>
                <div class="resident-list__cell--seconday">né {{ resident.nomNaissance }}</div>
              </td>
              <td>
                <div class="resident-list__cell--main">{{ resident.age }} ans</div>
                <div class="resident-list__cell--seconday">{{ resident.dateNaissance }}</div>
              </td>
              <td>{{ resident.ins }}</td>
              <td>{{ resident.secteurSousSecteur.libelleComplet }}</td>
              <td>{{ resident.chambre.libelleEtablissementChambre }}</td>
              <td>
                <OrishaBadge
                  class="orisha-a-badge--sm"
                  :label="resident.situationAdministrative.texte"
                  :style="{ backgroundColor: resident.situationAdministrative.couleur }"
                />
              </td>
              <td>
                <RouterLink :to="{ name: 'resident', params: { id: resident.id } }">
                  <button class="orisha-button--icon orisha-button--white">
                    <i class="ph-light ph-caret-right" />
                  </button>
                </RouterLink>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div v-else class="resident-list__cards">
        <RouterLink
          v-for="resident in residents"
          :key="resident.id"
          :to="{ name: 'resident', params: { id: resident.id } }"
        >
          <div class="resident-list__card">
            <div class="resident-list__cardAvatar">
              <OrishaAvatar :image="getAvatar(resident)" />
            </div>
            <div class="resident-list__cardInfo">
              <div class="resident-list__cardName">{{ resident.nomComplet }}</div>
              <div class="resident-list__cardBirthName">né {{ resident.nomNaissance }}</div>
              <div class="resident-list__cardAge">
                {{ resident.dateNaissance }} ({{ resident.age }} ans)
              </div>
              <div class="resident-list__cardIns">INS {{ resident.ins }}</div>
              <div class="resident-list__cardRoom">
                <OrishaBadge
                  class="orisha-a-badge--sm"
                  :label="resident.chambre.libelleEtablissementChambre"
                />
              </div>
            </div>
          </div>
        </RouterLink>
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

.resident-list {
  @include box.flex(start, start);

  &__sidebar {
    width: 240px;
    min-width: 240px;
    border-right-style: solid;
    border-right-width: 1px;
    border-right-color: colors.$stroke-primary;
    height: calc(100vh - 48px);
    border-bottom-left-radius: corners.$default;
  }

  &__main {
    width: 100%;
    padding: spacings.$md-2;

    table {
      border-spacing: 0;
      border-collapse: separate;
      width: 100%;
      border-radius: corners.$default;
      border-style: solid;
      border-width: 1px;
      border-color: colors.$stroke-primary;

      td,
      th {
        padding: spacings.$sm-4 spacings.$md-2;
      }

      thead tr {
        height: 40px;
        background-color: colors.get('neutral', 'grey', 100);
        text-align: left;

        th {
          @include text.body-sm(500);
          @include text.ellipsis;
          color: colors.$text-secondary;
        }
      }

      tbody tr {
        height: 56px;

        td {
          @include text.body-md(500);
          color: colors.$text-primary;
          border-top-style: solid;
          border-top-width: 1px;
          border-top-color: colors.$stroke-primary;

          div {
            @include text.ellipsis;
          }
        }
      }
    }
  }

  &__count {
    @include text.body-md;
    color: colors.$text-secondary;
  }

  &__action {
    @include box.flex(center, start);
    margin: spacings.$lg-0 0;
  }

  &__inputWrapper {
    flex-grow: 1;
  }

  .resident-list__avatarCell {
    padding-right: 2px;
  }

  .resident-list__nameCell {
    padding-left: 2px;
  }

  .resident-list__cell--seconday {
    @include text.body-sm;
    color: colors.$text-secondary;
  }

  &__display {
    @include box.flex(start, start);
    border-style: solid;
    border-width: 1px;
    border-color: colors.$stroke-secondary;
    border-radius: corners.$default;
    background-color: colors.get('neutral', 'grey', 100);
    padding: spacings.$sm-1 0;
    margin: 0 spacings.$md-2;

    button {
      margin: 0 spacings.$sm-1;
    }
  }

  &__cards {
    display: grid;
    grid-template-columns: auto auto auto;
    gap: spacings.$md-0;
  }

  &__card {
    @include box.flex(start, start);
    padding: spacings.$md-0;
    border-style: solid;
    border-width: 1px;
    border-color: colors.$stroke-secondary;
    border-radius: corners.$default;
    background-color: colors.$surface;
  }

  &__cardInfo {
    @include text.body-sm;
    color: colors.$text-secondary;
    padding-left: spacings.$sm-4;
  }

  &__cardName {
    @include text.body-md(500);
    color: colors.$text-primary;
  }
}
</style>
