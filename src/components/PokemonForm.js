import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ onAddPokemon }) {

  const [formData, setFormData] = useState({
    name: "",
    hp: "",
    frontUrl: "",
    backUrl: "",
  })
  console.log(formData)

  function handleChange(e) {
    console.log("this is the target key inside of form data: ", e.target.name)
    console.log("this is what the user typed for that keys value: ", e.target.value)
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    const newPokemon = {
      name: formData.name,
      hp: formData.hp,
      sprites: {
        frontUrl: formData.frontUrl,
        backUrl: formData.backUrl
      }
    }

    fetch("http://localhost:3001/pokemon", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPokemon),
    })
      .then((r) => r.json())
      .then(onAddPokemon)
      e.target.reset()
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input
            fluid 
            label="Name"
            placeholder="Name"
            name="name"
            onChange={handleChange} />
          <Form.Input
            fluid 
            label="hp"
            placeholder="hp" 
            name="hp"
            onChange={handleChange} />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            onChange={handleChange}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
