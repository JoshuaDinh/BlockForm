import { useFormContext } from "react-hook-form";

export default function Button() {
  const methods = useFormContext();

  console.log(methods.handleSubmit);

  const handleClick = (event) => {
    event.preventDefault();
    methods.handleSubmit();
  };
  return (
    <button onSubmit={handleClick} type="submit">
      Proceed
    </button>
  );
}
