import React from 'react'
import styles from "./listItem.module.css"



interface ListItemProps{
    label:string
}

const ListItem:React.FC<ListItemProps> = ({label}) => {
  return (
    <li className={styles.listItem}>{label}</li>
  )
}

export default ListItem