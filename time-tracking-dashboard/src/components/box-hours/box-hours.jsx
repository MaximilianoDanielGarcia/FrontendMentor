import './box-hours.css';

export function BoxHours ({hoursdata, timeFrame}) {

    return (
        <div className="box-back" style={{background:`var(${hoursdata.color})`}}>
            <img src={`/${hoursdata.icon}`} alt={`${hoursdata.title} icon`} />
            <div className="box-front">
                <div className="box-header">
                    <h2>{hoursdata.title}</h2>
                    <picture>
                        <img src="/icon-ellipsis.svg" alt="Ellipsis icon" />
                    </picture>
                </div>
                <div className='datetime'>
                    <p className="hours">{hoursdata.timeframes[timeFrame].current}hrs</p>
                    {
                        timeFrame === "daily" ?
                        <p>Yesterday - {hoursdata.timeframes[timeFrame].previous}hrs</p> :
                        <p>Last {timeFrame === "weekly" ? "Week" : "Month"} - {hoursdata.timeframes[timeFrame].previous}hrs</p>
                    }
                </div>
            </div>
        </div>
    )
}