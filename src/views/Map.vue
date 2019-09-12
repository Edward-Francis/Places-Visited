<template>
  <v-data-table
    :headers="headers"
    :items="places"
    :items-per-page="5"
    class="elevation-1"
  ></v-data-table>
</template>

<script lang="ts">
export default {
  data() {
    return {
      headers: [
        { text: "ID", value: "id" },
        { text: "Name", value: "name" },
        { text: "Latitude", value: "latitude" },
        { text: "Longitude", value: "longitude" }
      ],
      places: [
        {
          id: "1bbb8301-d030-4e65-b30a-5a6321afd69b",
          name: "London",
          latitude: 51.5074,
          longitude: 0.1278
        },
        {
          id: "5747bba2-b531-4419-8e0e-4eebfabc8a91",
          name: "Paris",
          latitude: 48.8566,
          longitude: 2.3522
        },
        {
          id: "c4357ef8-15bc-4215-a82e-75df2142a4bd",
          name: "Rome",
          latitude: 41.9028,
          longitude: 12.4964
        }
      ]
    };
  }
};
</script>
