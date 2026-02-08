import React, { useState } from "react";
import api from "../api"; // tu configuración de axios

const OrderForm = () => {
  const [salad, setSalad] = useState("");
  const [dressing, setDressing] = useState("");
  const [extras, setExtras] = useState([]);
  const [message, setMessage] = useState("");

  const handleExtrasChange = (e) => {
    const value = e.target.value;
    if (extras.includes(value)) {
      setExtras(extras.filter((extra) => extra !== value));
    } else {
      setExtras([...extras, value]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const orderData = { salad, dressing, extras };
      const res = await api.post("/orders", orderData);
      setMessage("✅ Pedido enviado correctamente");
      console.log(res.data);
    } catch (err) {
      setMessage("❌ Error al enviar pedido");
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="order-form">
      <h2>Crear Pedido</h2>

      {/* Selección de ensalada */}
      <label>
        Tipo de ensalada:
        <select value={salad} onChange={(e) => setSalad(e.target.value)} required>
          <option value="">-- Selecciona --</option>
          <option value="francesa">Ensalada Francesa</option>
          <option value="cesar">Ensalada César</option>
          <option value="mixta">Ensalada Mixta</option>
        </select>
      </label>

      {/* Selección de aderezo */}
      <label>
        Aderezo:
        <select value={dressing} onChange={(e) => setDressing(e.target.value)} required>
          <option value="">-- Selecciona --</option>
          <option value="ranch">Ranch Light</option>
          <option value="balsamico">Vinagreta Balsámica</option>
          <option value="cesar">César</option>
        </select>
      </label>

      {/* Extras */}
      <fieldset>
        <legend>Extras:</legend>
        <label>
          <input
            type="checkbox"
            value="pollo"
            checked={extras.includes("pollo")}
            onChange={handleExtrasChange}
          />
          Pechuga de pollo
        </label>
        <label>
          <input
            type="checkbox"
            value="queso"
            checked={extras.includes("queso")}
            onChange={handleExtrasChange}
          />
          Queso panela
        </label>
        <label>
          <input
            type="checkbox"
            value="bacon"
            checked={extras.includes("bacon")}
            onChange={handleExtrasChange}
          />
          Bacon
        </label>
      </fieldset>

      <button type="submit">Enviar Pedido</button>

      {message && <p className="status-message">{message}</p>}
    </form>
  );
};

export default OrderForm;