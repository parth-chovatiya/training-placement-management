import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@material-ui/core'

import UDAAN18 from "../image/UDAAN18.jpg"
import bvm_reunion2017 from "../image/bvm_reunion2017.jpg"
import bvm from '../image/bvm.jpg'

export default function Example(props)
{
    var items = [
        {
          img: <img src={bvm} alt="bvm" width="100%" height="580px" />,
          name: "Birla Vishvakarma Mahavidyalaya Engineering College",
        },
        {
            img: <img src={UDAAN18} alt="UDAAN18" width="100%" height="580px" />,
            name: "UDAAN18",
          },
          {
            img: <img src={bvm_reunion2017} alt="bvm_reunion2017" width="100%" height="580px" />,
            name: "BVM Reunion 2017",
        },
    ]

    return (
        <Carousel>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props)
{
    return (
        <Paper>
            <p>{props.item.img}</p>
            <h2>{props.item.name}</h2>
            {/* <p>{props.item.description}</p> */}
        </Paper>
    )
}