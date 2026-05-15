import type { FieldError, UseFormRegisterReturn } from 'react-hook-form';

interface FormInputProps {
  label: string;
  type?: string;
  placeholder?: string;
  registration: UseFormRegisterReturn;
  error?: FieldError;
}

const FormInput = ({ label, type = 'text', placeholder, registration, error }: FormInputProps) => (
  <div className="mb-3">
    <label className="form-label text-yellow small fw-bold text-uppercase">{label}</label>
    <input className={`form-control ${error ? 'is-invalid' : ''}`} type={type} placeholder={placeholder} {...registration} />
    {error && <div className="invalid-feedback">{error.message}</div>}
  </div>
);

export default FormInput;
