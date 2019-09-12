<template>
  <div class="home">
    <amplify-connect
      :query="listPlacesQuery"
      :subscription="createTodoSubscription"
      :onSubscriptionMsg="onCreateTodo"
    >
      <template slot-scope="{ loading, data, errors }">
        <div v-if="loading">Loading...</div>

        <div v-else-if="errors.length > 0">{{ errors }}</div>

        <div v-else-if="data">
          <v-data-table
            :headers="headers"
            :items="data.listPlaces.items"
            :items-per-page="100"
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
import { onCreatePlace } from "@/graphql/subscriptions";
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
    },
    createTodoSubscription() {
      return this.$Amplify.graphqlOperation(onCreatePlace);
    }
  },
  components: {
    CreatePlace
  },
  methods: {
    onCreateTodo(prevData, newData) {
      console.log("New todo from subscription...");
      const newTodo = newData.onCreatePlace;
      console.log(newData);
      prevData.data.listPlaces.items.push(newTodo);
      return prevData.data;
    }
  }
};
</script>
