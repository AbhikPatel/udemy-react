
const Friend = ({ details, removeFriend, current, selected }) => {

  const isSelected: boolean = selected && details.id === selected.id;

  const handleDelete = () => {
    const answer: boolean = window.confirm('Are you sure you want to remove this friend?');
    if (answer) removeFriend(details.id);
  }

  return (
    <div className={`py-2 px-3 d-flex align-items-center position-relative rounded ${isSelected && 'bill'}`}>
      <span role="button" onClick={handleDelete}> ❌ </span>
      <figure className="m-0 pe-2">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3qIvtraSeYEhd69gyrIvIX43RWMbBuEW35w&usqp=CAU" className="profile-img mx-3" alt="no img" />
      </figure>
      <div className="d-flex flex-column py-2">
        <h5 className="m-0"> {details.name} </h5>
        {
          details.amount === 0 && <span> You and {details.name} are even </span>
        }
        {
          details.amount > 0 && <span className="text-success">  {details.name} owns you Rs.{details.amount} </span>
        }
        {
          details.amount < 0 && <span className="text-danger">  You own {details.name} Rs.{Math.abs(details.amount)} </span>
        }
      </div>
      <div className="ms-auto">
        <button className="btn btn-outline-primary" onClick={() => current(details)}> {isSelected ? 'Close' : 'Select'} </button>
      </div>
    </div>
  )
}

export default Friend