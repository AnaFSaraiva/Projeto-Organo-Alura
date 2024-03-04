import "./ListaSuspensa.css";

const ListaSuspensa = (props) => {
  // console.log(props.item);

  return (
    <div>
      <label>{props.label}</label>
      <select
        onChange={(e) => props.aoAlterado(e.target.value)}
        value={props.value}
        required={props.obrigario}
      >
        {props.item.map((item) => {
          return <option key={item}>{item}</option>;
        })}
      </select>
    </div>
  );
};

export default ListaSuspensa;
