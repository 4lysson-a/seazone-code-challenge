import React from "react";

const Location = () => {
  return (
    <div className="location-container container">
      <label className="title location" htmlFor="location">
        Localização
      </label>
      <br />
      <select className="b-default location select" name="location">
        <option value="Acre">Acre</option>
        <option value="Alagoas">Alagoas</option>
        <option value="Amapa">Amapa</option>
        <option value="Amazonas">Amazonas</option>
        <option value="Bahia">Bahia</option>
        <option value="Ceara">Ceara</option>
        <option value="Distrito Federal">Distrito Federal</option>
        <option value="Espirito Santo">Espirito Santo</option>
        <option value="Goias">Goias</option>
        <option value="Maranhao">Maranhao</option>
        <option value="Mato Grosso">Mato Grosso</option>
        <option value="Mato Grosso do Sul">Mato Grosso do Sul</option>
        <option value="Minas Gerais">Minas Gerais</option>
        <option value="Para">Para</option>
        <option value="Paraiba">Paraiba</option>
        <option value="Parana">Parana</option>
        <option value="Pernambuco">Pernambuco</option>
        <option value="Piaui">Piaui</option>
        <option value="Rio de Janeiro">Rio de Janeiro</option>
        <option value="Rio Grande do Norte">Rio Grande do Norte</option>
        <option value="Rio Grande do Sul">Rio Grande do Sul</option>
        <option value="Rondonia">Rondonia</option>
        <option value="Roraima">Roraima</option>
        <option value="Santa Catarina">Santa Catarina</option>
        <option value="Sao Paulo">Sao Paulo</option>
        <option value="Sergipe">Sergipe</option>
        <option value="Tocantins">Tocantins</option>
      </select>
    </div>
  );
};

export default Location;
