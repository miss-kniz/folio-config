type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: string;
};

const Textarea = ({ label, className = "", ...props }: TextareaProps) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block mb-1 text-sm font-medium">{label}</label>
      )}

      <textarea
        {...props}
        className={`
          w-full
          px-4 py-3
          rounded-xl
          border border-purple-200 
          bg-transparent
          text-sm
          outline-none
          resize-none
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

export default Textarea;
