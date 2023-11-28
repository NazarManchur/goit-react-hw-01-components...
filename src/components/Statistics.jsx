import data from "../data.json"

    export const Statistics = () => {

        return (
            <div class="statistics">
                <h2 class="title">Upload stats</h2>
                <ul>
                {data.map((el) => (
                    <li className="">
                        <span className="label">{el.label}</span>
                        <span className="percentage">{el.percentage}</span>
                    </li>))}
                    </ul>
        </div>
    )
}

