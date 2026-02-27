type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

const Input = ({ label, className = "", ...props }: InputProps) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block mb-1 text-sm font-medium">{label}</label>
      )}

      <input
        {...props}
        className={`
          w-full
          px-4 py-3
          rounded-xl
          border border-purple-200 
          bg-transparent
          text-sm
          outline-none
          transition
          placeholder:text-black-light
          focus:border-primary
          focus:ring-2 focus:ring-primary/20
          ${className}
        `}
      />
    </div>
  );
};

export default Input;
