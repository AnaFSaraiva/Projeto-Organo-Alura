import "./campoTexto.css";

const CampoTexto = (props) => {
  return (
    <div class="campo-texto">
      <label>{props.label}</label>
      <input placeholder={props.placeholder} />
    </div>
  );
};

export default CampoTexto;
