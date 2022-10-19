export default function useFirestore(col) {
  const fetch = (order = null, where = null) => {};
  const find = () => {};
  const create = (payload) => {};
  const update = (payload, id = null) => {};
  const remove = (id) => {};
  return { fetch, find, create, update, remove };
}
