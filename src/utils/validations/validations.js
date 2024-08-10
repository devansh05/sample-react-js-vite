export const validateValues = (values) => {
  let errors = {};

  if (values.email !== undefined) {
    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      errors.email = 'Invalid email address';
    }
  }

  if (values.password !== undefined) {
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }
  }

  if (values.name !== undefined) {
    if (!values.name) {
      errors.name = "Name is required";
    } else if (values.name.length < 2) {
      errors.name = "Name must be at least 2 characters";
    }
  }

  if (values.phone !== undefined) {
    if (!values.phone) {
      errors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(values.phone)) {
      errors.phone = "Phone number must be 10 digits";
    }
  }

  return errors;
};
