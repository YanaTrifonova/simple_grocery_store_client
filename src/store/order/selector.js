export function getUsersOrder(state) {
    return state.myOrderPage.order;
}

export function getUserLoading(state) {
    return state.myOrderPage.isLoaded
}