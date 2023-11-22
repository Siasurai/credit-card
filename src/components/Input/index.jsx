import "./style.css";

export const Input = ({ onChange, value, inputRef }) => {
  return (
    <input value={value} onChange={onChange} type="number" ref={inputRef} />
  );
};
