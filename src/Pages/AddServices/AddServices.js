import React from 'react';

const AddServices = () => {

    const handleServices = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const brand = form.brand.value;
        const price = form.price.value;
        const img = form.img.value;
        const ratings = form.ratings.value;
        const stock = form.stock.value;
        const details = form.details.value;
        const weight = form.weight.value;
        console.log(name, brand, price, img, ratings, stock, details, weight)

        const services = {
            name,
            brand,
            price,
            img,
            ratings,
            stock,
            details,
            weight
        }
        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(services)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Services Added  Succesfully');
                    form.reset();
                }
            })
            .catch(err => console.error(err));
    }


    return (
        <div>
            <h2>This is add service page</h2>
            <form onSubmit={handleServices}>
                <input type="text" name="name" placeholder="Service Name" className="input input-bordered w-full max-w-xs" />
                <input type="text" name="brand" placeholder="Brand" className="input input-bordered w-full max-w-xs" />
                <input type="text" name="price" placeholder="Price" className="input input-bordered w-full max-w-xs" />
                <input type="text" name="img" placeholder="Photo URL" className="input input-bordered w-full max-w-xs" />
                <input type="text" name="ratings" placeholder="Ratings" className="input input-bordered w-full max-w-xs" />
                <input type="text" name="stock" placeholder="Stock" className="input input-bordered w-full max-w-xs" />
                <input type="text" name="details" placeholder="Details" className="input input-bordered w-full max-w-xs" />
                <input type="text" name="weight" placeholder="Weight" className="input input-bordered w-full max-w-xs" />
                <button className='btn bg-primary mt-1 mb-1'>Add Service</button>
            </form>
        </div>
    );
};

export default AddServices;