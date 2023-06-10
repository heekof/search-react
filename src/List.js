import React, {useState, useEffect} from "react";


export default function List({getItems}) {

    const [items, setIems] = useState([])


    useEffect(() => {

        setIems(getItems())

        console.log("Uploading Items")

    }, [getItems] )


    return items.map(item => <div key={item}>{item}</div>)







}