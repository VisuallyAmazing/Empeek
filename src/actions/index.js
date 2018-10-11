export const addItem = (item) => {
  return {
      type : 'ADD_ITEM',
      payload : item
  }
}
export const deleteItem = (item) => {
  return {
      type : 'DELETE_ITEM',
      payload : item
  }
}

export const addComment = (comment) => {
  return {
      type: 'ADD_COMMENT',
      payload: comment
  }
}

export const setIndex = (i) => {
  return {
    type : 'SET_INDEX',
    payload : (i+1)
  }
}