'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { CallIcon, MessageIcon } from '@icons/index';
import { TSchema, schema } from '@lib/index';
import Card from '@shared/Card';
import Input from '@shared/Input';
import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const Contact = () => {
  const defaultValues = {
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
  };

  const { formState, handleSubmit, register, reset } = useForm({
    mode: 'onTouched',
    defaultValues,
    resolver: zodResolver(schema),
  });
  const { errors, isSubmitting, isDirty, isValid, isSubmitted } = formState;

  useEffect(() => {
    if (isSubmitted) reset();
  }, [isSubmitted, reset]);

  const onSubmit: SubmitHandler<TSchema> = async (_, e): Promise<void> => {
    const formData = new FormData(e?.target);

    try {
      const res = await fetch('/api/contact-us', {
        method: 'POST',
        body: formData,
      });
      const result = await res.json();
      if (!res.ok) {
        throw new Error(result.message ? result.message : result);
      }
      toast.success(result.message ? `${result.message}` : `${result}`);
    } catch (error: any) {
      toast.error(error.message ? `${error.message}` : `${error}`);
    }
  };

  return (
    <Card
      id="contact"
      className="relative h-[350px] pt-14 laptop:h-[450px] laptop:pt-28"
    >
      <div className="absolute left-1/2 -translate-x-1/2 text-center">
        <h2 className="mb-4 text-[1.875rem] font-extrabold leading-[2.5rem] text-white laptop:text-[2.8125rem] laptop:leading-[3.09375rem]">
          Get in Touch
        </h2>
        <div className="flex flex-col items-start justify-center gap-1 laptop:flex-row laptop:items-center laptop:gap-8">
          <a
            href="mailto:hello@romandevexperts.com"
            className="flex items-center justify-center gap-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageIcon />
            <small className="text-sm font-bold leading-[1.665rem] text-white laptop:text-base">
              hello@romandevexperts.com
            </small>
          </a>
          <a
            href="tel:+2348166127025"
            className="flex items-center justify-center gap-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CallIcon />
            <small className="text-sm font-bold leading-[1.665rem] text-white laptop:text-base">
              (+234) 816 612 7025
            </small>
          </a>
        </div>
      </div>
      <div className="absolute left-1/2 top-[60%] w-[90%] max-w-[1139px] -translate-x-1/2 laptop-md:w-full">
        <div className="contact card-shadow w-full rounded-2xl bg-white p-8 laptop:px-[3.8rem] laptop:py-12">
          <form
            autoComplete="off"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="mx-auto"
          >
            <div className="flex flex-col items-center justify-center gap-2 laptop:flex-row laptop:gap-8">
              <Input
                inputProps={{
                  id: 'name',
                  name: 'name',
                  type: 'text',
                  label: 'Full Name',
                  register: { ...register('name') },
                  error: errors.name?.message as string,
                }}
              />
              <Input
                inputProps={{
                  id: 'email',
                  name: 'email',
                  type: 'email',
                  label: 'Your Email',
                  register: { ...register('email') },
                  error: errors.email?.message as string,
                }}
              />
            </div>
            <div className="flex flex-col items-center justify-center gap-2 laptop:flex-row laptop:gap-8">
              <Input
                inputProps={{
                  id: 'company',
                  name: 'company',
                  type: 'text',
                  label: 'Company',
                  register: { ...register('company') },
                  error: errors.company?.message as string,
                }}
              />
              <Input
                inputProps={{
                  id: 'subject',
                  name: 'subject',
                  type: 'text',
                  label: 'Subject',
                  register: { ...register('subject') },
                  error: errors.subject?.message as string,
                }}
              />
            </div>
            <Input
              inputProps={{
                id: 'message',
                name: 'message',
                type: 'text',
                label: 'Message',
                register: { ...register('message') },
                error: errors.message?.message as string,
              }}
            />
            {/* <div
              className="cf-turnstile mt-4 laptop:mt-6"
              data-sitekey="0x4AAAAAAALwrWSgXz_7UAP5"
              data-theme="light"
              data-retry-interval={5000}
            /> */}
            <button
              type="submit"
              className="mt-4 w-full rounded-full bg-primary px-6 py-3 text-[0.9375rem] font-semibold leading-[1.36406rem] text-white disabled:bg-primary/95 tablet:w-auto tablet:px-9 laptop:mt-10 laptop:py-4"
              disabled={!isValid || !isDirty || isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send message'}
            </button>
          </form>
        </div>
      </div>
    </Card>
  );
};

export default Contact;
