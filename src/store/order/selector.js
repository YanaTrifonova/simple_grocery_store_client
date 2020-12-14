export function getUsersOrder(state) {
    return state.myOrderPage.order;
}

export function getUserLoading(state) {
    return state.myOrderPage.isLoaded
}

export function getTotalSumOfTheOrder(state) {
    let total = 0;
    state.myOrderPage.order.forEach((a) => total += a.numberOfItems * a.price);
    return total;
}