import { useLoaderData } from "react-router-dom";


const Checkout = () => {
    const service = useLoaderData();
    if (!service) {
    return <h2>Loading or No Data Found</h2>;
}
  
  const { _id, title, price } = service;

  return (
    <div>
      <h2 className="text-2xl font-bold">
        Book service: {title}
      </h2>
      <p>Service ID: {_id}</p>
      <p>Price: ${price}</p>
    </div>
  );
};


export default Checkout;