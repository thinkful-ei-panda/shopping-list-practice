import React, { Component } from 'react'

export default class AddItemForm extends Component {
    render() {
        return (
            <form>
                <input 
                type='text'
                placeholder='carrots'
                aria-label='Shopping list item'
                />
                <button type='submit'>Add Item</button>
            </form>
        )
    }
}
