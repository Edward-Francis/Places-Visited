// tslint:disable
// this is an auto generated file. This will be overwritten

export const getPlace = `query GetPlace($id: ID!) {
  getPlace(id: $id) {
    id
    name
    latitude
    longitude
  }
}
`;
export const listPlaces = `query ListPlaces(
  $filter: ModelPlaceFilterInput
  $limit: Int
  $nextToken: String
) {
  listPlaces(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      latitude
      longitude
    }
    nextToken
  }
}
`;
