export const updateObjectInArray = (
  items: any,
  itemId: number,
  objPropName: string,
  newObjProps: any
) => {
  return items.map((u: any) => {
    if (itemId === u[objPropName]) {
      return {
        ...u,
        ...newObjProps
      }
    }
    return u
  })
}
