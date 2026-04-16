import { useLoaderData } from "react-router-dom";


const Checkout = () => {
    const service = useLoaderData();
    if (!service) {
    return <h2>Loading or No Data Found</h2>;
}
  
  const { title } = service;

  return (
    <div>
      <h2 className="text-2xl font-bold">
        Book service: {title}
      </h2>
   
  
      <form className="card-body">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
        
        </div>
           <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
        
        </div>
</div>
        <div className="form-control mt-6">
          <button>Login</button>
        <input className="btn btn-primary btn-block" type="submit"  value="Order Confirm" required />
        </div>
      </form>
    
  </div>

  );
};


export default Checkout;