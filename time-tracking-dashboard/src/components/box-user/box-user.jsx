import './box-user.css';

export function BoxUser({ setTimeFrame, timeFrame }) {

    function handleClick(e) {
        console.log(e.target.name);
        setTimeFrame(e.target.name);
    }

    return (
        <section className='user-container'>
            <div className='user-info'>
                <picture>
                    <img src="../src/assets/images/image-jeremy.png" alt="Jeremy Robson photo" />
                </picture>
                <div>
                    <p>Report for</p>
                    <h1>Jeremy Robson</h1>
                </div>
            </div>
            <div className='frecuency'>
                <ul>
                    <li><a name="daily" className={timeFrame === "daily" ? 'active' : ''} onClick={handleClick}>Daily</a></li>
                    <li><a name="weekly" className={timeFrame === "weekly" ? 'active' : ''} onClick={handleClick}>Weekly</a></li>
                    <li><a name="monthly" className={timeFrame === "monthly" ? 'active' : ''} onClick={handleClick}>Monthly</a></li>
                </ul>
            </div>
        </section>
    )
}