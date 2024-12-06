import { forwardRef } from "react";

const Input = forwardRef (function Input({ lable, isTextarea, ...props }, ref) {
  const classes =
    ' w-full p-1 border-b-2 rounded-sm border-stone-200 bg-stone-300 text-stone-600 focus:outline-none focus:border-stone-600';
  return (
    <p className='flex flex-col gap-1 my-4'>
      <label className='text-sm font-bold uppercase text-stone-500 '>
        {' '}
        {lable}
      </label>
      {isTextarea ? (
        <textarea ref={ref}  className={classes} {...props} />
      ) : (
        <input ref={ref} className={classes} {...props} />
      )}
    </p>
  );
}
)

export default Input