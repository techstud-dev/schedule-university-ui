export const Input = (props) => {
  return (
    <div>
      <input
        value={props.value}
        name={props.name}
        placeholder={props.placeholder}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
};
