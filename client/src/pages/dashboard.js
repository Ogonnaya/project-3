import React from 'react'

const AddTripButton = props => {
    return <article class='intro text-center'> <h1 class='intro__heading intro__heading--income title' class="title-one">KOLLAB</h1><div class='intro__body wysiwyg'><p class="intro">We here to help you build a team to put together your next event</p><p> Let's KOLLAB!</p><button class="example_f" onClick={props.addTrip}><span>GET STARTED</span></button> </div></article>
}

export default AddTripButton