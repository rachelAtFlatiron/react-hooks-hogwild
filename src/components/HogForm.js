import { useState } from "react";

function HogForm( { addHog }) {
	const initialForm = {
		name: "",
		weight: -1,
		"highest medal achieved": "",
		image: "",
		greased: "true",
		specialty: "",
	};

	const [form, setForm] = useState(initialForm);

	const handleChange = (e) => {
        setForm({
            ...form,  //updates value in form based on e
            [e.target.name]: e.target.value
        })
	};

    const handleSubmit = (e) => {
        e.preventDefault()
        addHog({ //actually comes from App.js
            ...form,
            greased: form.greased === "true" ? true : false,
            weight: parseInt(form.weight)
        })
        setForm(initialForm)
    }

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input type="text" onChange={e => handleChange(e)} name="name" value={form.name} placeholder="name" />
				<input
					type="number"
                    onChange={e => handleChange(e)}
					name="weight"
					value={form.weight}
					placeholder="weight"
				/>
				<input
					type="text"
                    onChange={e => handleChange(e)}
					name="highest medal achieved"
					value={form["highest medal achieved"]}
					placeholder="medal"
				/>
				<input
					type="text"
                    onChange={e => handleChange(e)}
					name="specialty"
					value={form.specialty}
					placeholder="specialty"
				/>
				<input
					type="text"
                    onChange={e => handleChange(e)}
					name="image"
					placeholder="image"
					value={form.image}
				/>
				<select value={form.greased} name="greased" onChange={e => handleChange(e)}>
					<option value={true}>Greased</option>
					<option value={false}>Not Greased</option>
				</select>

                <input type="submit" value="submit" />
			</form>
		</div>
	);
}

export default HogForm;
