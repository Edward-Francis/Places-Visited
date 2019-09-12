<template>
  <div class="home">
    <amplify-connect :query="listPlacesQuery">
      <template slot-scope="{ loading, data, errors }">
        <div v-if="loading">Loading...</div>

        <div v-else-if="errors.length > 0">{{ errors }}</div>

        <div v-else-if="data">
          <v-data-table
            :headers="headers"
            :items="data.listPlaces.items"
            :items-per-page="5"
            class="elevation-1"
          ></v-data-table>
        </div>
      </template>
    </amplify-connect>
    <br />
    <CreatePlace />
  </div>
</template>

<script>
import { listPlaces } from "@/graphql/queries";
import CreatePlace from "@/components/CreatePlace";

export default {
  data() {
    return {
      headers: [
        { text: "ID", value: "id" },
        { text: "Name", value: "name" },
        { text: "Latitude", value: "latitude" },
        { text: "Longitude", value: "longitude" }
      ]
    };
  },
  computed: {
    listPlacesQuery() {
      return this.$Amplify.graphqlOperation(listPlaces);
    }
  },
  components: {
    CreatePlace
  }
};
</script>
