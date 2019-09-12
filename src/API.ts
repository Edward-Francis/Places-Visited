/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type CreatePlaceInput = {
  id?: string | null,
  name: string,
  latitude: number,
  longitude: number,
};

export type UpdatePlaceInput = {
  id: string,
  name?: string | null,
  latitude?: number | null,
  longitude?: number | null,
};

export type DeletePlaceInput = {
  id?: string | null,
};

export type ModelPlaceFilterInput = {
  id?: ModelIDFilterInput | null,
  name?: ModelStringFilterInput | null,
  latitude?: ModelFloatFilterInput | null,
  longitude?: ModelFloatFilterInput | null,
  and?: Array< ModelPlaceFilterInput | null > | null,
  or?: Array< ModelPlaceFilterInput | null > | null,
  not?: ModelPlaceFilterInput | null,
};

export type ModelIDFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelStringFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelFloatFilterInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  contains?: number | null,
  notContains?: number | null,
  between?: Array< number | null > | null,
};

export type CreatePlaceMutationVariables = {
  input: CreatePlaceInput,
};

export type CreatePlaceMutation = {
  createPlace:  {
    __typename: "Place",
    id: string,
    name: string,
    latitude: number,
    longitude: number,
  } | null,
};

export type UpdatePlaceMutationVariables = {
  input: UpdatePlaceInput,
};

export type UpdatePlaceMutation = {
  updatePlace:  {
    __typename: "Place",
    id: string,
    name: string,
    latitude: number,
    longitude: number,
  } | null,
};

export type DeletePlaceMutationVariables = {
  input: DeletePlaceInput,
};

export type DeletePlaceMutation = {
  deletePlace:  {
    __typename: "Place",
    id: string,
    name: string,
    latitude: number,
    longitude: number,
  } | null,
};

export type GetPlaceQueryVariables = {
  id: string,
};

export type GetPlaceQuery = {
  getPlace:  {
    __typename: "Place",
    id: string,
    name: string,
    latitude: number,
    longitude: number,
  } | null,
};

export type ListPlacesQueryVariables = {
  filter?: ModelPlaceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPlacesQuery = {
  listPlaces:  {
    __typename: "ModelPlaceConnection",
    items:  Array< {
      __typename: "Place",
      id: string,
      name: string,
      latitude: number,
      longitude: number,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreatePlaceSubscription = {
  onCreatePlace:  {
    __typename: "Place",
    id: string,
    name: string,
    latitude: number,
    longitude: number,
  } | null,
};

export type OnUpdatePlaceSubscription = {
  onUpdatePlace:  {
    __typename: "Place",
    id: string,
    name: string,
    latitude: number,
    longitude: number,
  } | null,
};

export type OnDeletePlaceSubscription = {
  onDeletePlace:  {
    __typename: "Place",
    id: string,
    name: string,
    latitude: number,
    longitude: number,
  } | null,
};
