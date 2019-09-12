<template>
  <div>
    <amplify-connect :mutation="createPlace" @done="onCreateFinished">
      <template slot-scope="{ loading, mutate, errors }">
        <div v-if="errors.length > 0">{{ errors }}</div>
        <input v-model="name" placeholder="item name" />
        <input v-model="latitude" placeholder="item latitude" />
        <input v-model="longitude" placeholder="item longitude" />
        <button :disabled="loading" @click="mutate">Create Todo</button>
      </template>
    </amplify-connect>
  </div>
</template>

<script>
import { createPlace } from "@/graphql/mutations";

export default {
  data() {
    return {
      name: "",
      latitude: "",
      longitude: ""
    };
  },
  computed: {
    createPlace() {
      return this.$Amplify.graphqlOperation(createPlace, {
        input: {
          name: this.name,
          latitude: this.latitude,
          longitude: this.longitude
        }
      });
    }
  },
  methods: {
    onCreateFinished() {
      console.log("Todo created!");
    }
  }
};
</script>
