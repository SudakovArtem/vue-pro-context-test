import {createStore} from 'vuex'

export default createStore({
    state() {
        return {
            lists: [
                {
                    name: 'List 1',
                    id: 'list1',
                    checked: false,
                    hasItems: true,
                    open: true,
                    items: [
                        {id: 'list1-item1', name: 'Item 1', color: '#FF0000', checked: true, quantity: 10},
                        {id: 'list1-item2', name: 'Item 2', color: '#FFFF00', checked: true, quantity: 16},
                        {id: 'list1-item3', name: 'Item 3', color: '#00FF00', checked: true, quantity: 40},
                        {id: 'list1-item4', name: 'Item 4', color: '#0000FF', checked: false, quantity: 0},
                    ]
                },
                {
                    name: 'List 2',
                    id: 'list2',
                    checked: false,
                    hasItems: false,
                    open: false,
                    items: [
                        {id: 'list2-item1', name: 'Item 1', color: '#FF0000', checked: false, quantity: 18},
                        {id: 'list2-item2', name: 'Item 2', color: '#FFFF00', checked: false, quantity: 34},
                        {id: 'list2-item3', name: 'Item 3', color: '#00FF00', checked: false, quantity: 56},
                        {id: 'list2-item4', name: 'Item 4', color: '#0000FF', checked: false, quantity: 20},
                        {id: 'list2-item5', name: 'Item 5', color: '#8B008B', checked: false, quantity: 7},
                        {id: 'list2-item6', name: 'Item 6', color: '#D2691E', checked: false, quantity: 12},
                    ]
                },
                {
                    name: 'List 3',
                    id: 'list3',
                    checked: false,
                    hasItems: false,
                    open: false,
                    items: [
                        {id: 'list3-item1', name: 'Item 1', color: '#FF0000', checked: false, quantity: 84},
                        {id: 'list3-item2', name: 'Item 2', color: '#FFFF00', checked: false, quantity: 35},
                        {id: 'list3-item3', name: 'Item 3', color: '#00FF00', checked: false, quantity: 15},
                        {id: 'list3-item4', name: 'Item 4', color: '#0000FF', checked: false, quantity: 6},
                        {id: 'list3-item5', name: 'Item 5', color: '#8B008B', checked: false, quantity: 84},
                        {id: 'list3-item6', name: 'Item 6', color: '#D2691E', checked: false, quantity: 35},
                        {id: 'list3-item7', name: 'Item 7', color: '#FF1493', checked: false, quantity: 15},
                        {id: 'list3-item8', name: 'Item 8', color: '#7FFFD4', checked: false, quantity: 6},
                    ]
                },
                {
                    name: 'List 4',
                    id: 'list4',
                    checked: false,
                    hasItems: false,
                    open: false,
                    items: [
                        {id: 'list4-item1', name: 'Item 1', color: '#FF0000', checked: false, quantity: 73},
                        {id: 'list4-item2', name: 'Item 2', color: '#FFFF00', checked: false, quantity: 27},
                        {id: 'list4-item3', name: 'Item 3', color: '#00FF00', checked: false, quantity: 58},
                        {id: 'list4-item4', name: 'Item 4', color: '#0000FF', checked: false, quantity: 91},
                        {id: 'list4-item5', name: 'Item 5', color: '#8B008B', checked: false, quantity: 27},
                        {id: 'list4-item6', name: 'Item 6', color: '#D2691E', checked: false, quantity: 58},
                        {id: 'list4-item7', name: 'Item 7', color: '#FF1493', checked: false, quantity: 91},
                    ]
                },
                {
                    name: 'List 5',
                    id: 'list5',
                    checked: false,
                    hasItems: false,
                    open: false,
                    items: [
                        {id: 'list5-item1', name: 'Item 1', color: '#FF0000', checked: false, quantity: 99},
                        {id: 'list5-item2', name: 'Item 2', color: '#FFFF00', checked: false, quantity: 13},
                        {id: 'list5-item3', name: 'Item 3', color: '#00FF00', checked: false, quantity: 4},
                        {id: 'list5-item4', name: 'Item 4', color: '#0000FF', checked: false, quantity: 34},
                        {id: 'list5-item5', name: 'Item 5', color: '#8B008B', checked: false, quantity: 34},
                    ]
                },
            ]
        }
    },
    getters: {
        getLists(state) {
            return state.lists
        },
    },
    mutations: {
        changeItemCheck(state, {id, listId}) {
            const list = state.lists.find(list => list.id === listId)
            const item = list.items.find(el => el.id === id)
            item.checked = !item.checked
            const checkedItems = list.items.filter(el => el.checked === true).length
            list.hasItems = checkedItems > 0;
            list.checked = checkedItems === list.items.length;
        },
        changeListQuantity(state, {id, listId, value}) {
            const list = state.lists.find(list => list.id === listId)
            const item = list.items.find(el => el.id === id)
            item.quantity = value
        },
        changeItemColor(state, {id, listId, value}) {
            const list = state.lists.find(list => list.id === listId)
            const item = list.items.find(el => el.id === id)
            item.color = value
        },
        markList(state, {id, checked}) {
            const list = state.lists.find(list => list.id === id)
            list.items.forEach(el => el.checked = checked)
            list.hasItems = checked
            list.checked = checked
        },
        openListToggle(state, id) {
            const list = state.lists.find(list => list.id === id)
            list.open = !list.open
        },
        decreaseItemQuantity(state, {id, color}) {
            const list = state.lists.find(list => list.id === id)
            list.items.forEach(el => {
                if (el.color === color) {
                    el.quantity--
                }
            })
        }
    }
})
