

const BookingRow = ({booking, handleDelete, handleBookingConfirm}) => {
      if (!booking) return null;
    const {_id, date, service, price, img, status } = booking;

   return (
       <tr>
        <th>
       <button
          onClick={() => handleDelete(_id)}
          className="btn btn-square btn-outline" > ✕</button>
        </th>
        <td>
      
            <div className="avatar">
              <div className="rounded w-24 h-24">
              {
                img && <img src={img} alt="Avatar Tailwind CSS Component" />
 }
              </div>
            </div>
            </td>
        <td>
       {  service}
        </td>
        <td>{date}</td>
         <td>${price}</td>
        <th>
         {
            status === 'confirm'? <span className="font-bold text-primary">confirmed</span>:
             <button onClick={() => handleBookingConfirm(_id) }
           className="btn btn-ghost btn-xs">Please Confirm</button>
         }
        </th>
      </tr>
 
     
    );
};

export default BookingRow;