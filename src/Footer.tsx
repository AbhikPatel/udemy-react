
const Footer = ({ list }) => {

    if (!list.length)
        return (

            <div className="h-100 flex-column d-flex align-items-center justify-content-center">
                <h3> We are here to get you ready for your Trip ✌` </h3>
            </div>
        )

    const size = list.length;
    const isPacked = list.filter((res) => res.packed).length;
    const percentage = Math.round(isPacked / size * 100);


    return (
        <div className="h-100 flex-column d-flex align-items-center justify-content-center">
            <h3> {percentage === 100 ? `All your ${size} things are packed and ready to go ✈` : `You have added ${size} items in which ${percentage}% is packed`} </h3>
        </div>
    )
}

export default Footer