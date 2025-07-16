import { useState, type ChangeEvent, type FormEvent } from 'react';
interface FormData {
  username: string;
  password: string;
  confirmPassword: string;
  email: string;
  subscribeToNewsletter: boolean;
}
interface Errors {
  confirmPassword: string;
}
export default function RegistrationForm() {
  const [formData, setFormData] = useState<FormData>({
    username: '',
    password: '',
    confirmPassword: '',
    email: '',
    subscribeToNewsletter: false,
  });
  const [errors, setErrors] = useState<Errors>({
    confirmPassword: '',
  });
  const [successMessage, setSuccessMessage] = useState<string>('');
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    if (name === 'confirmPassword' || name === 'password') {
      const newPassword = name === 'password' ? value : formData.password;
      const newConfirm = name === 'confirmPassword' ? value : formData.confirmPassword;
      setErrors((prev) => ({
        ...prev,
        confirmPassword:
          newConfirm && newPassword !== newConfirm ? 'Passwords do not match' : '',
      }));
    }
  };
  const isEmailValid = formData.email.includes('@');
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!errors.confirmPassword) {
      console.log('Submitted data:', formData);
      setSuccessMessage('Form submitted!');
    } else {
      console.log('Fix validation errors before submitting.');
      setSuccessMessage('');
    }
  };
  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded space-y-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-semibold mb-1">Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          />
        </div>
        <div>
          <label className="block font-semibold mb-1">Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          />
        </div>
        <div>
          <label className="block font-semibold mb-1">Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
          )}
        </div>
        <div>
          <label className="block font-semibold mb-1">Email (optional):</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            name="subscribeToNewsletter"
            checked={formData.subscribeToNewsletter}
            onChange={handleChange}
            disabled={!formData.email || !isEmailValid}
            className="mr-2"
          />
          <label className="font-medium">Subscribe to newsletter</label>
        </div>
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          Register
        </button>
      </form>
      {successMessage && (
        <p className="text-green-600 font-semibold mt-4">{successMessage}</p>
      )}
    </div>
  );
}