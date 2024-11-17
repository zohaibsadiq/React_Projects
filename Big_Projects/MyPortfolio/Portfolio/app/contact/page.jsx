'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import emailjs from 'emailjs-com';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Don't forget to import the styles

const info = [
  {
    icon: <FaPhoneAlt />,
    title: 'Phone',
    description: '+(92) 321 4292280',
  },
  {
    icon: <FaEnvelope />,
    title: 'Email',
    description: 'zohaib2056804@gmail.com',
  },
  {
    icon: <FaMapMarkerAlt />,
    title: 'Address',
    description: 'Lahore, Pakistan',
  },
];

const Contact = () => {
  const [formValues, setFormValues] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};
    let formIsValid = true;

    // Validate First Name
    if (!formValues.firstname || !/^[A-Za-z]+$/.test(formValues.firstname)) {
      newErrors.firstname = 'First name must contain only alphabetic characters.';
      formIsValid = false;
    }

    // Validate Last Name
    if (!formValues.lastname || !/^[A-Za-z]+$/.test(formValues.lastname)) {
      newErrors.lastname = 'Last name must contain only alphabetic characters.';
      formIsValid = false;
    }

    // Validate Email
    if (!formValues.email || !/\S+@\S+\.\S+/.test(formValues.email)) {
      newErrors.email = 'Please enter a valid email address.';
      formIsValid = false;
    }

    // Validate Phone Number Length and Format
    if (
      (formValues.phone && !/^\+?[1-9]\d{1,14}$/.test(formValues.phone) && !/^0\d{9,14}$/.test(formValues.phone)) ||
      formValues.phone.length < 10 ||
      formValues.phone.length > 15
    ) {
      newErrors.phone = 'Please enter a valid phone number with 10 to 15 digits.';
      formIsValid = false;
    }

    // Validate Service
    if (!formValues.service) {
      newErrors.service = 'Please select a service.';
      formIsValid = false;
    }

    // Validate Message
    if (!formValues.message || formValues.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters long.';
      formIsValid = false;
    }

    setErrors(newErrors); // Set errors to show on UI
    return formIsValid;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validateForm()) return; // Validate before sending

    setIsLoading(true); // Set loading state

    emailjs
      .sendForm(
        'service_3n0a42l', // Your service ID
        'template_jmjnpa5', // Your template ID
        e.target,
        'PjSKNy3Z95GL61rHH' // Your user ID
      )
      .then(
        (result) => {
          console.log('Email sent successfully:', result.text);
          toast.success('Your message has been sent successfully!');
          setIsLoading(false);

          // Reset form after successful submission
          setFormValues({
            firstname: '',
            lastname: '',
            email: '',
            phone: '',
            service: '',
            message: '',
          });
          setErrors({}); // Clear errors
        },
        (error) => {
          console.error('Error sending email:', error.text);
          toast.error('Oops! Something went wrong, please try again.');
          setIsLoading(false);
        }
      );

    e.target.reset(); // Reset form fields
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
      }}
      className='py-6'
    >
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row gap-[30px]'>
          {/* Form Section */}
          <div className='lg:w-[54%] order-2 lg:order-none'>
            <form onSubmit={sendEmail} className='flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl'>
              <h3 className='text-4xl text-accent '>Let&apos;s work together</h3>
              <p className='text-white/60'>Fill out the form below and I will get back to you as soon as possible.</p>
              <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
                {/* First Name */}
                <div>
                  <Input
                    name='firstname'
                    type='text'
                    placeholder='Firstname'
                    value={formValues.firstname}
                    onChange={handleChange}
                    required
                  />
                  {errors.firstname && <span className='text-sm text-red-500'>{errors.firstname}</span>}
                </div>

                {/* Last Name */}
                <div>
                  <Input
                    name='lastname'
                    type='text'
                    placeholder='Lastname'
                    value={formValues.lastname}
                    onChange={handleChange}
                    required
                  />
                  {errors.lastname && <span className='text-sm text-red-500'>{errors.lastname}</span>}
                </div>

                {/* Email */}
                <div>
                  <Input
                    name='email'
                    type='email'
                    placeholder='Email'
                    value={formValues.email}
                    onChange={handleChange}
                    required
                  />
                  {errors.email && <span className='text-sm text-red-500'>{errors.email}</span>}
                </div>

                {/* Phone */}
                <div>
                  <Input
                    name='phone'
                    type='tel'
                    placeholder='Phone number'
                    value={formValues.phone}
                    onChange={handleChange}
                  />
                  {errors.phone && <span className='text-sm text-red-500'>{errors.phone}</span>}
                </div>
              </div>

              {/* Service Selection */}
              <div>
                <Select
                  name='service'
                  onValueChange={(value) => setFormValues({ ...formValues, service: value })}
                  required
                >
                  <SelectTrigger className='w-full'>
                    <SelectValue placeholder='Select a Service' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Select a Service</SelectLabel>
                      <SelectItem value='Web Development'>Web Development</SelectItem>
                      <SelectItem value='UI/UX'>UI/UX</SelectItem>
                      <SelectItem value='Logo Design'>Logo Design</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                {errors.service && <span className='text-sm text-red-500'>{errors.service}</span>}
              </div>

              {/* Message */}
              <div>
                <Textarea
                  name='message'
                  className='h-[200px]'
                  placeholder='Type your message here.'
                  value={formValues.message}
                  onChange={handleChange}
                  required
                />
                {errors.message && <span className='text-sm text-red-500'>{errors.message}</span>}
              </div>

              <Button type='submit' size='md' className='max-w-40' disabled={isLoading}>
                {isLoading ? 'Sending...' : 'Send message'}
              </Button>
            </form>
          </div>

          {/* Contact Info Section */}
          <div className='flex items-center flex-1 order-1 mb-8 lg:justify-end lg:order-none lg:mb-0'>
            <ul className='flex flex-col gap-10'>
              {info.map((item, index) => (
                <li key={index} className='flex items-center gap-6'>
                  <div className='w-[52px] h-[52px] lg:w-[72px] lg:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center'>
                    <div className='text-[28px]'>{item.icon}</div>
                  </div>
                  <div className='flex-1'>
                    <p className='text-white/60'>{item.title}</p>
                    <p className='text-xl'>{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Toast Notifications */}
      <ToastContainer />
    </motion.section>
  );
};

export default Contact;
