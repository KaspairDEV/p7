import Lodgings from "../lodgings.json"

const getAllLodgings = () => {
  return Lodgings
}

const getOneLodging = (id) => {
  return Lodgings.find(log => log.id === id)
}

export const DataLodgings = {
  getAllLodgings, getOneLodging
}