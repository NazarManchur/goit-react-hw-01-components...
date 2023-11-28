import { getQueriesForElement } from "@testing-library/react"
import Friends from "../friends.json"
import css from "../../src/components/style.css"



export const Friend = (variant) => {
    return (
        <ul className="friend-list">
            {Friends.map((el) => (
                <li className="item">
                    <span className="status"
                    >{}</span>
                    <img className="avatar" src={el.avatar} alt="User avatar" width="48" />
                    <p className="name">{el.name}</p>
                </li>))}
</ul>
    )
}