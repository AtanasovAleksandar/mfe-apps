import { Users } from "../models/User"

const UsersList: Users[] = [{
    "id": 1,
    "name": "Philbert",
    "age": 15,
    "details": "Mauris lacinia sapien quis libero."
  }, {
    "id": 2,
    "name": "Vikki",
    "age": 26,
    "details": "Quisque porta volutpat erat."
  }, {
    "id": 32,
    "name": "Hamil",
    "age": 3,
    "details": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus."
  }, {
    "id": 4,
    "name": "Jayme",
    "age": 47,
    "details": "Ut tellus. Nulla ut erat id mauris vulputate elementum."
  }, {
    "id": 25,
    "name": "Drew",
    "age": 5,
    "details": "Integer a nibh."
  }]

export const getUsers: any = () => Promise.resolve(UsersList)

