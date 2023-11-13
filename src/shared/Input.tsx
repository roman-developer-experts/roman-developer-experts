import { memo } from 'react';

type Props = {
  id: string;
  name: string;
  label: string;
  type: 'email' | 'text';
  error?: string;
  register: any;
};

const Input = ({ inputProps }: { inputProps: Props }) => {
  const { label, id, register, error, ...rest } = inputProps;
  if (rest.name === 'message') {
    return (
      <div className="mt-10 w-full">
        <label
          htmlFor={id}
          className="text-[0.9375rem] font-bold leading-[1.40625rem] text-label"
        >
          {label}&nbsp;*
        </label>
        <textarea
          id={id}
          style={{ resize: 'none' }}
          rows={6}
          {...register}
          {...rest}
          className="mt-2 block w-full rounded-xl border-[0.813px] border-[#DCDCDC] px-3 py-3 hover:border-slate-700 focus:border-slate-700 focus:outline-none focus:ring-0"
        />
        {error ? (
          <small className="font-bricolage ml-2 text-xs text-[firebrick] dark:text-[#ec5c5c]">
            {error}
          </small>
        ) : null}
      </div>
    );
  }
  return (
    <div className="mt-10 w-full">
      <label
        htmlFor={id}
        className="text-[0.9375rem] font-bold leading-[1.40625rem] text-label"
      >
        {label}&nbsp;*
      </label>
      <input
        id={id}
        {...register}
        {...rest}
        className="mt-2 block w-full rounded-xl border-[0.813px] border-[#DCDCDC] px-3 py-3 hover:border-slate-700 focus:border-slate-700 focus:outline-none focus:ring-0"
      />
      {error ? (
        <small className="font-bricolage ml-2 text-xs text-[firebrick] dark:text-[#ec5c5c]">
          {error}
        </small>
      ) : null}
    </div>
  );
};
export default memo(Input);
