// import React, { useState } from 'react';
// import axios from 'axios';

// const Register = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     batch: '',
//     class: '',
//     photo: null,
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleFileChange = (e) => {
//     setFormData((prev) => ({ ...prev, photo: e.target.files[0] }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const data = new FormData();
//     data.append('name', formData.name);
//     data.append('batch', formData.batch);
//     data.append('class', formData.class);
//     data.append('photo', formData.photo);

//     try {
//       await axios.post('http://localhost:5000/api/alumni', data, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       alert('Submitted!');
//     } catch (err) {
//       console.error('Upload Error:', err.response?.data || err.message);
//       alert('Submission failed!');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         name="name"
//         placeholder="Name"
//         onChange={handleChange}
//         required
//       />
//       <input
//         name="batch"
//         placeholder="Batch"
//         onChange={handleChange}
//         required
//       />
//       <input
//         name="class"
//         placeholder="Class"
//         onChange={handleChange}
//         required
//       />
//       <input
//         type="file"
//         accept="image/*"
//         onChange={handleFileChange}
//         required
//       />
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default Register;
// import React, { useState } from 'react';
// import axios from 'axios';

// const generateBatchOptions = () => {
//   const options = [];
//   let start = 1998;
//   let end = 2001;

//   while (end <= 2020) {
//     options.push(`${start}-${end}`);
//     start++;
//     end++;
//   }

//   for (let i = 2020; i <= 2023; i++) {
//     options.push(`${i}-${i + 2}`);
//   }

//   return options;
// };

// const Register = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     fathername: '',
//     email: '',
//     phone: '',
//     course: '',
//     batch: '',
//     class: '',
//     address: '',
//     linkedin: '',
//     skills: '',
//     profession: '',
//     organization: '',
//     organizationWebsite: '',
//     photo: null,
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleFileChange = (e) => {
//     setFormData((prev) => ({ ...prev, photo: e.target.files[0] }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const data = new FormData();
//     Object.entries(formData).forEach(([key, value]) => {
//       data.append(key, value);
//     });

//     try {
//       await axios.post('http://localhost:5000/api/alumni', data, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       alert('Submitted!');
//     } catch (err) {
//       console.error('Upload Error:', err.response?.data || err.message);
//       alert('Submission failed!');
//     }
//   };

//   const batchOptions = generateBatchOptions();

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-8">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white p-6 rounded-lg shadow-md w-full max-w-2xl space-y-4"
//       >
//         <h1 className="text-2xl font-bold mb-4 text-center">Register as Alumni</h1>

//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//           <input name="name" placeholder="Name" onChange={handleChange} required className="px-4 py-2 border rounded" />
//           <input name="fathername" placeholder="Father's Name" onChange={handleChange} required className="px-4 py-2 border rounded" />
//           <input type="email" name="email" placeholder="Email" onChange={handleChange} required className="px-4 py-2 border rounded" />
//           <input type="tel" name="phone" placeholder="Phone Number" onChange={handleChange} required className="px-4 py-2 border rounded" />
//           <input name="course" placeholder="Course" onChange={handleChange} required className="px-4 py-2 border rounded" />
//           <select name="batch" onChange={handleChange} required className="px-4 py-2 border rounded">
//             <option value="">Select Batch</option>
//             {batchOptions.map((batch, idx) => (
//               <option key={idx} value={batch}>{batch}</option>
//             ))}
//           </select>
//           <input name="class" placeholder="Class" onChange={handleChange} required className="px-4 py-2 border rounded" />
//           <input name="address" placeholder="Address" onChange={handleChange} required className="px-4 py-2 border rounded" />
//           <input name="linkedin" placeholder="LinkedIn Profile Link" onChange={handleChange} className="px-4 py-2 border rounded" />
//           <input name="skills" placeholder="Skills (comma separated)" onChange={handleChange} className="px-4 py-2 border rounded" />
//           <input name="profession" placeholder="Profession" onChange={handleChange} className="px-4 py-2 border rounded" />
//           <input name="organization" placeholder="Organization Name" onChange={handleChange} className="px-4 py-2 border rounded" />
//           <input name="organizationWebsite" placeholder="Organization Website" onChange={handleChange} className="px-4 py-2 border rounded" />
//         </div>

//         <input
//           type="file"
//           accept="image/*"
//           onChange={handleFileChange}
//           required
//           className="w-full mt-2"
//         />

//         <button
//           type="submit"
//           className="w-full bg-darkBlue text-white py-2 rounded hover:bg-[#222363]"
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Register;


// import React, { useState } from 'react';
// import axios from 'axios';

// const generateBatchOptions = () => {
//   const options = [];
//   let start = 1998;
//   let end = 2001;

//   while (end <= 2020) {
//     options.push(`${start}-${end}`);
//     start++;
//     end++;
//   }

//   for (let i = 2020; i <= 2023; i++) {
//     options.push(`${i}-${i + 2}`);
//   }

//   return options;
// };

// const courseOptions = ['BCA', 'MCA', 'B.TECH', 'M.TECH', 'PHD'];

// const professionOptions = [
//   'Trainee',
//   'Govt Job',
//   'Own Business',
//   'Internship',
//   'Teacher/Professor',
//   'Full Stack Developer',
//   'Data Scientist',
//   'Cybersecurity Analyst',
//   'Network Engineer',
//   'Cloud Security Expert',
//   'DevOps Engineer',
//   'Research Scientist',
//   'IT Consultant',
//   'System Administrator',
//   'Blockchain Developer',
// ];

// const skillOptions = [
//   'Programming Languages (Python, C, C++, Java, JavaScript, PHP, SQL, Power BI, etc.)',
//   'Web Development (MERN Stack, MEAN Stack, Full Stack)',
//   'AI & Data Science (AI, ML, DL, CN)',
//   'Software Development & Engineering (Java & Spring Boot, Microservices)',
//   'Project Management & Leadership (Scrum Master, QA Lead)',
//   'UI/UX & Design',
//   'Front-End Development',
//   'Mobile App Development',
//   'Cloud & Security',
//   'Database Management & Backend Development',
//   'Others',
// ];

// const Register = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     fathername: '',
//     email: '',
//     phone: '',
//     course: '',
//     batch: '',
//     class: '',
//     address: '',
//     linkedin: '',
//     profession: '',
//     organization: '',
//     organizationWebsite: '',
//     photo: null,
//   });

//   const [selectedSkills, setSelectedSkills] = useState([]);
//   const [otherSkill, setOtherSkill] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleFileChange = (e) => {
//     setFormData((prev) => ({ ...prev, photo: e.target.files[0] }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const data = new FormData();

//     Object.entries(formData).forEach(([key, value]) => {
//       data.append(key, value);
//     });

//     const allSkills = [...selectedSkills];
//     if (selectedSkills.includes('Others') && otherSkill.trim() !== '') {
//       allSkills.push(otherSkill.trim());
//     }

//     data.append('skills', allSkills.filter(Boolean).join(', '));

//     try {
//       await axios.post('http://localhost:5000/api/alumni', data, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       alert('Submitted!');
//     } catch (err) {
//       console.error('Upload Error:', err.response?.data || err.message);
//       alert('Submission failed!');
//     }
//   };

//   const batchOptions = generateBatchOptions();

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-8">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white p-6 rounded-lg shadow-md w-full max-w-2xl space-y-4"
//       >
//         <h1 className="text-2xl font-bold mb-4 text-center">Register as Alumni</h1>

//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//           <input name="name" placeholder="Name" onChange={handleChange} required className="px-4 py-2 border rounded" />
//           <input name="fathername" placeholder="Father's Name" onChange={handleChange} required className="px-4 py-2 border rounded" />
//           <input type="email" name="email" placeholder="Email" onChange={handleChange} required className="px-4 py-2 border rounded" />
//           <input type="tel" name="phone" placeholder="Phone Number" onChange={handleChange} required className="px-4 py-2 border rounded" />

//           <select name="course" onChange={handleChange} required className="px-4 py-2 border rounded">
//             <option value="">Select Course</option>
//             {courseOptions.map((course, idx) => (
//               <option key={idx} value={course}>{course}</option>
//             ))}
//           </select>

//           <select name="batch" onChange={handleChange} required className="px-4 py-2 border rounded">
//             <option value="">Select Batch</option>
//             {batchOptions.map((batch, idx) => (
//               <option key={idx} value={batch}>{batch}</option>
//             ))}
//           </select>

//           <input name="class" placeholder="Class" onChange={handleChange} required className="px-4 py-2 border rounded" />
//           <input name="address" placeholder="Address" onChange={handleChange} required className="px-4 py-2 border rounded" />
//           <input name="linkedin" placeholder="LinkedIn Profile Link" onChange={handleChange} className="px-4 py-2 border rounded" />

//           <select name="profession" onChange={handleChange} required className="px-4 py-2 border rounded">
//             <option value="">Select Profession</option>
//             {professionOptions.map((job, idx) => (
//               <option key={idx} value={job}>{job}</option>
//             ))}
//           </select>

//           <input name="organization" placeholder="Organization Name" onChange={handleChange} className="px-4 py-2 border rounded" />
//           <input name="organizationWebsite" placeholder="Organization Website" onChange={handleChange} className="px-4 py-2 border rounded" />
//         </div>

//         {/* Skill Set Multi-select */}
//         <div>
//           <label className="block font-medium">Skills (Select Multiple)</label>
//           <select
//             multiple
//             name="skills"
//             onChange={(e) => {
//               const selected = Array.from(e.target.selectedOptions, (option) => option.value);
//               setSelectedSkills(selected);
//             }}
//             className="w-full px-4 py-2 border rounded"
//           >
//             {skillOptions.map((skill, index) => (
//               <option key={index} value={skill}>
//                 {skill}
//               </option>
//             ))}
//           </select>

//           {selectedSkills.includes('Others') && (
//             <input
//               type="text"
//               placeholder="Please specify other skills"
//               value={otherSkill}
//               onChange={(e) => setOtherSkill(e.target.value)}
//               className="w-full mt-2 px-4 py-2 border rounded"
//             />
//           )}
//         </div>

//         <input
//           type="file"
//           accept="image/*"
//           onChange={handleFileChange}
//           required
//           className="w-full mt-2"
//         />

//         <button
//           type="submit"
//           className="w-full bg-darkBlue text-white py-2 rounded hover:bg-[#222363]"
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Register;

// import React, { useState } from 'react';
// import axios from 'axios';
// import Select from 'react-select';

// const Register = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     fathername: '',
//     email: '',
//     phone: '',
//     course: '',
//     batch: '',
//     address: '',
//     linkedin: '',
//     profession: '',
//     organization: '',
//     website: '',
//     photo: null,
//     sessionConsent: '',
//   });

//   const [selectedSkills, setSelectedSkills] = useState([]);
//   const [otherSkill, setOtherSkill] = useState('');
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const batchOptions = [
//     ...Array.from({ length: 23 }, (_, i) => {
//       const start = 1998 + i;
//       return { label: `${start}-${start + 3}`, value: `${start}-${start + 3}` };
//     }),
//     ...Array.from({ length: 6 }, (_, i) => {
//       const start = 2020 + i;
//       return { label: `${start}-${start + 2}`, value: `${start}-${start + 2}` };
//     }),
//   ];

//   const courseOptions = ['BCA', 'MCA', 'B.TECH', 'M.TECH', 'PHD'];
//   const professionOptions = [
//     'Trainee', 'Govt Job', 'Own Business', 'Internship', 'Teacher/Professor',
//     'Full Stack Developer', 'Data Scientist', 'Cybersecurity Analyst', 'Network Engineer',
//     'Cloud Security Expert', 'DevOps Engineer', 'Research Scientist', 'IT Consultant',
//     'System Administrator', 'Blockchain Developer'
//   ];

//   const skillOptions = [
//     'Python', 'C', 'C++', 'Java', 'JavaScript', 'PHP', 'SQL', 'Power BI',
//     'MERN Stack', 'MEAN Stack', 'Full Stack Developer',
//     'AI', 'ML', 'DL', 'CN',
//     'Java & Spring Boot', 'Microservices Architecture', 'Cloud-Native Apps',
//     'Team Lead - Quality Assurance', 'Scrum Master',
//     'UI/UX & Design', 'Front-End Development', 'Mobile App Development',
//     'Cloud & Security', 'Database Management & Backend Development',
//     'Others'
//   ];

//   // Form field groups for better organization
//   const personalFields = [
//     { name: 'name', label: 'Full Name', required: true },
//     { name: 'fathername', label: 'Father\'s Name', required: true },
//     { name: 'email', label: 'Email Address', required: true, type: 'email' },
//     { name: 'phone', label: 'Phone Number', required: true, type: 'tel' },
//   ];

//   const academicFields = [
//     { name: 'course', label: 'Course', required: true, type: 'select', options: courseOptions },
//     { name: 'batch', label: 'Batch', required: true, type: 'select', options: batchOptions.map(b => ({ label: b.label, value: b.value })) },
//   ];

//   const professionalFields = [
//     { name: 'profession', label: 'Current Profession', required: true, type: 'select', options: professionOptions },
//     { name: 'organization', label: 'Organization/Company', required: true },
//     { name: 'linkedin', label: 'LinkedIn Profile URL', required: false },
//     { name: 'website', label: 'Personal/Company Website', required: false },
//   ];

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSelectChange = (name, value) => {
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleFileChange = (e) => {
//     setFormData((prev) => ({ ...prev, photo: e.target.files[0] }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
    
//     const data = new FormData();

//     for (const key in formData) {
//       data.append(key, formData[key]);
//     }

//     data.append('skills', JSON.stringify(selectedSkills));
//     if (selectedSkills.includes('Others')) {
//       data.append('otherSkill', otherSkill);
//     }

//     try {
//       await axios.post('http://localhost:5000/api/alumni', data, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       alert('Successfully registered as alumni!');
//       // Reset form or redirect here
//     } catch (err) {
//       console.error('Upload Error:', err.response?.data || err.message);
//       alert('Registration failed. Please try again.');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   // Reusable form components with enhanced styling
//   const FormSection = ({ title, children, color }) => (
//     <div className="mb-8">
//       <h3 className={`text-lg font-bold ${color} mb-4 pb-2 border-b border-purple-200`}>{title}</h3>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         {children}
//       </div>
//     </div>
//   );

//   const TextInput = ({ name, label, required, type = 'text' }) => (
//     <div className="mb-2">
//       <label htmlFor={name} className="block text-sm font-medium text-indigo-800 mb-1">
//         {label} {required && <span className="text-red-500">*</span>}
//       </label>
//       <input
//         id={name}
//         name={name}
//         type={type}
//         value={formData[name]}
//         onChange={handleChange}
//         required={required}
//         className="w-full px-3 py-2 border border-purple-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white"
//       />
//     </div>
//   );

//   const SelectInput = ({ name, label, required, options }) => (
//     <div className="mb-2">
//       <label htmlFor={name} className="block text-sm font-medium text-indigo-800 mb-1">
//         {label} {required && <span className="text-red-500">*</span>}
//       </label>
//       <select
//         id={name}
//         name={name}
//         value={formData[name]}
//         onChange={handleChange}
//         required={required}
//         className="w-full px-3 py-2 border border-purple-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white"
//       >
//         <option value="">Select {label}</option>
//         {options.map((option) => (
//           <option key={typeof option === 'object' ? option.value : option} value={typeof option === 'object' ? option.value : option}>
//             {typeof option === 'object' ? option.label : option}
//           </option>
//         ))}
//       </select>
//     </div>
//   );

//   const TextareaInput = ({ name, label, required }) => (
//     <div className="mb-2 col-span-1 md:col-span-2">
//       <label htmlFor={name} className="block text-sm font-medium text-indigo-800 mb-1">
//         {label} {required && <span className="text-red-500">*</span>}
//       </label>
//       <textarea
//         id={name}
//         name={name}
//         value={formData[name]}
//         onChange={handleChange}
//         required={required}
//         rows={3}
//         className="w-full px-3 py-2 border border-purple-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white"
//       ></textarea>
//     </div>
//   );

//   // Custom styles for react-select
//   const customSelectStyles = {
//     control: (styles) => ({
//       ...styles,
//       borderColor: '#ddd6fe',
//       boxShadow: 'none',
//       '&:hover': {
//         borderColor: '#a78bfa'
//       }
//     }),
//     option: (styles, { isSelected }) => ({
//       ...styles,
//       backgroundColor: isSelected ? '#6d28d9' : null,
//       '&:hover': {
//         backgroundColor: !isSelected ? '#ede9fe' : null
//       }
//     }),
//     multiValue: (styles) => ({
//       ...styles,
//       backgroundColor: '#ede9fe'
//     }),
//     multiValueLabel: (styles) => ({
//       ...styles,
//       color: '#5b21b6'
//     }),
//     multiValueRemove: (styles) => ({
//       ...styles,
//       '&:hover': {
//         backgroundColor: '#a78bfa',
//         color: 'white'
//       }
//     })
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-4xl mx-auto">
//         <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-purple-100">
//           {/* Header */}
//           <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-6">
//             <h1 className="text-3xl font-bold text-white text-center">Alumni Registration</h1>
//             <p className="text-purple-100 text-center mt-2">Connect with your alma mater and fellow alumni</p>
//           </div>
          
//           {/* Form */}
//           <form onSubmit={handleSubmit} className="px-6 py-8 space-y-8">
//             {/* Personal Information */}
//             <FormSection title="Personal Information" color="text-indigo-700">
//               {personalFields.map((field) => (
//                 <TextInput key={field.name} {...field} />
//               ))}
//               <TextareaInput 
//                 name="address" 
//                 label="Full Address" 
//                 required={true} 
//               />
//             </FormSection>

//             {/* Academic Information */}
//             <FormSection title="Academic Information" color="text-purple-700">
//               {academicFields.map((field) => (
//                 field.type === 'select' 
//                   ? <SelectInput key={field.name} {...field} />
//                   : <TextInput key={field.name} {...field} />
//               ))}
//             </FormSection>

//             {/* Professional Information */}
//             <FormSection title="Professional Information" color="text-indigo-700">
//               {professionalFields.map((field) => (
//                 field.type === 'select' 
//                   ? <SelectInput key={field.name} {...field} />
//                   : <TextInput key={field.name} {...field} />
//               ))}
//             </FormSection>

//             {/* Skills */}
//             <FormSection title="Skills & Expertise" color="text-purple-700">
//               <div className="col-span-1 md:col-span-2">
//                 <label className="block text-sm font-medium text-indigo-800 mb-1">
//                   Skills (Select Multiple) <span className="text-red-500">*</span>
//                 </label>
//                 <Select
//                   isMulti
//                   name="skills"
//                   options={skillOptions.map((skill) => ({ label: skill, value: skill }))}
//                   className="basic-multi-select"
//                   classNamePrefix="select"
//                   styles={customSelectStyles}
//                   onChange={(selected) => {
//                     const selectedValues = selected.map((s) => s.value);
//                     setSelectedSkills(selectedValues);
//                   }}
//                 />
//                 {selectedSkills.includes('Others') && (
//                   <input
//                     type="text"
//                     placeholder="Please specify other skills"
//                     value={otherSkill}
//                     onChange={(e) => setOtherSkill(e.target.value)}
//                     className="w-full mt-2 px-3 py-2 border border-purple-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white"
//                   />
//                 )}
//               </div>
//             </FormSection>

//             {/* Session Consent */}
//             <div className="p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg mb-6 border border-purple-100 shadow-sm">
//               <label className="block text-sm font-medium text-indigo-800 mb-3">
//                 Will you be able to deliver a talk or conduct an interaction session (Online/offline) with your alma mater's students to guide them in their careers and employment? <span className="text-red-500">*</span>
//               </label>
//               <div className="flex space-x-6">
//                 <label className="flex items-center space-x-2 cursor-pointer">
//                   <input
//                     type="radio"
//                     name="sessionConsent"
//                     value="Yes"
//                     checked={formData.sessionConsent === 'Yes'}
//                     onChange={handleChange}
//                     required
//                     className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-purple-300"
//                   />
//                   <span className="text-indigo-700">Yes</span>
//                 </label>
//                 <label className="flex items-center space-x-2 cursor-pointer">
//                   <input
//                     type="radio"
//                     name="sessionConsent"
//                     value="No"
//                     checked={formData.sessionConsent === 'No'}
//                     onChange={handleChange}
//                     className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-purple-300"
//                   />
//                   <span className="text-indigo-700">No</span>
//                 </label>
//               </div>
//             </div>

//             {/* Photo Upload */}
//             <div className="border-t border-purple-100 pt-6">
//               <div className="mb-6">
//                 <label className="block text-sm font-medium text-indigo-800 mb-1">
//                   Profile Photo <span className="text-red-500">*</span>
//                 </label>
//                 <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-purple-200 border-dashed rounded-md bg-purple-50 hover:bg-purple-100 transition-colors duration-200">
//                   <div className="space-y-1 text-center">
//                     <svg
//                       className="mx-auto h-12 w-12 text-indigo-400"
//                       stroke="currentColor"
//                       fill="none"
//                       viewBox="0 0 48 48"
//                       aria-hidden="true"
//                     >
//                       <path
//                         d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
//                         strokeWidth={2}
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                       />
//                     </svg>
//                     <div className="flex text-sm text-indigo-600 justify-center">
//                       <label
//                         htmlFor="photo-upload"
//                         className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500 px-4 py-2 border border-indigo-200 shadow-sm"
//                       >
//                         <span>Upload a file</span>
//                         <input
//                           id="photo-upload"
//                           name="photo"
//                           type="file"
//                           accept="image/*"
//                           onChange={handleFileChange}
//                           required
//                           className="sr-only"
//                         />
//                       </label>
//                       <p className="pl-1 flex items-center">or drag and drop</p>
//                     </div>
//                     <p className="text-xs text-indigo-500">PNG, JPG, GIF up to 10MB</p>
//                     {formData.photo && (
//                       <p className="text-sm text-green-600 font-medium">
//                         Selected: {formData.photo.name}
//                       </p>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Submit Button */}
//             <div className="flex justify-end">
//               <button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-md shadow-md hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-75 disabled:cursor-not-allowed transition-all duration-150 transform hover:-translate-y-0.5"
//               >
//                 {isSubmitting ? 'Submitting...' : 'Register as Alumni'}
//               </button>
//             </div>
//           </form>
//         </div>
        
//         {/* Footer */}
//         <div className="mt-6 text-center">
//           <p className="text-indigo-700 font-medium">Thank you for registering with your alma mater!</p>
//           <p className="text-sm text-indigo-500 mt-1">Your information helps us build a stronger alumni network.</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;

// import React, { useState } from 'react';
// import axios from 'axios';
// import Select from 'react-select';

// const Register = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     fathername: '',
//     email: '',
//     phone: '',
//     course: '',
//     batch: '',
//     address: '',
//     linkedin: '',
//     profession: '',
//     organization: '',
//     website: '',
//     photo: null,
//     sessionConsent: '',
//   });

//   const [selectedSkills, setSelectedSkills] = useState([]);
//   const [otherSkill, setOtherSkill] = useState('');
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const batchOptions = [
//     ...Array.from({ length: 23 }, (_, i) => {
//       const start = 1998 + i;
//       return { label: `${start}-${start + 3}`, value: `${start}-${start + 3}` };
//     }),
//     ...Array.from({ length: 6 }, (_, i) => {
//       const start = 2020 + i;
//       return { label: `${start}-${start + 2}`, value: `${start}-${start + 2}` };
//     }),
//   ];

//   const courseOptions = ['BCA', 'MCA', 'B.TECH', 'M.TECH', 'PHD'];
//   const professionOptions = [
//     'Trainee', 'Govt Job', 'Own Business', 'Internship', 'Teacher/Professor',
//     'Full Stack Developer', 'Data Scientist', 'Cybersecurity Analyst', 'Network Engineer',
//     'Cloud Security Expert', 'DevOps Engineer', 'Research Scientist', 'IT Consultant',
//     'System Administrator', 'Blockchain Developer'
//   ];

//   const skillOptions = [
//     'Python', 'C', 'C++', 'Java', 'JavaScript', 'PHP', 'SQL', 'Power BI',
//     'MERN Stack', 'MEAN Stack', 'Full Stack Developer',
//     'AI', 'ML', 'DL', 'CN',
//     'Java & Spring Boot', 'Microservices Architecture', 'Cloud-Native Apps',
//     'Team Lead - Quality Assurance', 'Scrum Master',
//     'UI/UX & Design', 'Front-End Development', 'Mobile App Development',
//     'Cloud & Security', 'Database Management & Backend Development',
//     'Others'
//   ];

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleFileChange = (e) => {
//     setFormData((prev) => ({ ...prev, photo: e.target.files[0] }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
    
//     const data = new FormData();

//     for (const key in formData) {
//       data.append(key, formData[key]);
//     }

//     data.append('skills', JSON.stringify(selectedSkills));
//     if (selectedSkills.includes('Others')) {
//       data.append('otherSkill', otherSkill);
//     }

//     try {
//       await axios.post('http://localhost:5000/api/alumni', data, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       alert('Successfully registered as alumni!');
//       // Reset form or redirect here
//     } catch (err) {
//       console.error('Upload Error:', err.response?.data || err.message);
//       alert('Registration failed. Please try again.');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100">
//       <div className="w-full bg-blue-700 py-6">
//         <div className="container mx-auto">
//           <h1 className="text-3xl font-bold text-white text-center">Alumni Registration Portal</h1>
//         </div>
//       </div>
      
//       <div className="container mx-auto px-4 sm:px-6 py-8">
//         <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//           <div className="grid grid-cols-1 lg:grid-cols-12">
//             {/* Left sidebar */}
//             <div className="lg:col-span-3 bg-blue-50">
//               <div className="sticky top-0 p-6">
//                 <div className="mb-8">
//                   <h2 className="text-xl font-semibold text-blue-800 mb-2">Registration Steps</h2>
//                   <ul className="space-y-3">
//                     <li className="flex items-center text-blue-600">
//                       <span className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center mr-2 text-sm">1</span>
//                       <span>Personal Information</span>
//                     </li>
//                     <li className="flex items-center text-blue-600">
//                       <span className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center mr-2 text-sm">2</span>
//                       <span>Academic Details</span>
//                     </li>
//                     <li className="flex items-center text-blue-600">
//                       <span className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center mr-2 text-sm">3</span>
//                       <span>Professional Info</span>
//                     </li>
//                     <li className="flex items-center text-blue-600">
//                       <span className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center mr-2 text-sm">4</span>
//                       <span>Skills & Expertise</span>
//                     </li>
//                     <li className="flex items-center text-blue-600">
//                       <span className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center mr-2 text-sm">5</span>
//                       <span>Photo Upload</span>
//                     </li>
//                   </ul>
//                 </div>
                
//                 <div className="p-4 bg-white rounded-lg border border-blue-100 shadow-sm">
//                   <h3 className="font-medium text-blue-800 mb-2">Need Help?</h3>
//                   <p className="text-sm text-gray-600 mb-3">
//                     If you have any questions about the registration process, please contact the alumni office.
//                   </p>
//                   <div className="text-sm text-gray-600">
//                     <div className="flex items-center mb-1">
//                       <svg className="w-4 h-4 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                       </svg>
//                       alumni@university.edu
//                     </div>
//                     <div className="flex items-center">
//                       <svg className="w-4 h-4 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//                       </svg>
//                       (555) 123-4567
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
            
//             {/* Main form area */}
//             <div className="lg:col-span-9 p-6">
//               <form onSubmit={handleSubmit} className="space-y-8">
//                 {/* Personal Information Section */}
//                 <div className="bg-white p-6 rounded-lg border border-gray-200">
//                   <h2 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">Personal Information</h2>
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div>
//                       <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
//                         Full Name <span className="text-red-500">*</span>
//                       </label>
//                       <input
//                         id="name"
//                         name="name"
//                         type="text"
//                         value={formData.name}
//                         onChange={handleChange}
//                         required
//                         className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
//                       />
//                     </div>
                    
//                     <div>
//                       <label htmlFor="fathername" className="block text-sm font-medium text-gray-700 mb-1">
//                         Father's Name <span className="text-red-500">*</span>
//                       </label>
//                       <input
//                         id="fathername"
//                         name="fathername"
//                         type="text"
//                         value={formData.fathername}
//                         onChange={handleChange}
//                         required
//                         className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
//                       />
//                     </div>
                    
//                     <div>
//                       <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
//                         Email Address <span className="text-red-500">*</span>
//                       </label>
//                       <input
//                         id="email"
//                         name="email"
//                         type="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         required
//                         className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
//                       />
//                     </div>
                    
//                     <div>
//                       <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
//                         Phone Number <span className="text-red-500">*</span>
//                       </label>
//                       <input
//                         id="phone"
//                         name="phone"
//                         type="tel"
//                         value={formData.phone}
//                         onChange={handleChange}
//                         required
//                         className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
//                       />
//                     </div>
                    
//                     <div className="md:col-span-2">
//                       <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
//                         Full Address <span className="text-red-500">*</span>
//                       </label>
//                       <textarea
//                         id="address"
//                         name="address"
//                         rows="3"
//                         value={formData.address}
//                         onChange={handleChange}
//                         required
//                         className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
//                       ></textarea>
//                     </div>
//                   </div>
//                 </div>
                
//                 {/* Academic Information Section */}
//                 <div className="bg-white p-6 rounded-lg border border-gray-200">
//                   <h2 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">Academic Information</h2>
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div>
//                       <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-1">
//                         Course <span className="text-red-500">*</span>
//                       </label>
//                       <select
//                         id="course"
//                         name="course"
//                         value={formData.course}
//                         onChange={handleChange}
//                         required
//                         className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
//                       >
//                         <option value="">Select Course</option>
//                         {courseOptions.map((course) => (
//                           <option key={course} value={course}>{course}</option>
//                         ))}
//                       </select>
//                     </div>
                    
//                     <div>
//                       <label htmlFor="batch" className="block text-sm font-medium text-gray-700 mb-1">
//                         Batch <span className="text-red-500">*</span>
//                       </label>
//                       <select
//                         id="batch"
//                         name="batch"
//                         value={formData.batch}
//                         onChange={handleChange}
//                         required
//                         className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
//                       >
//                         <option value="">Select Batch</option>
//                         {batchOptions.map((batch) => (
//                           <option key={batch.value} value={batch.value}>{batch.label}</option>
//                         ))}
//                       </select>
//                     </div>
//                   </div>
//                 </div>
                
//                 {/* Professional Information Section */}
//                 <div className="bg-white p-6 rounded-lg border border-gray-200">
//                   <h2 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">Professional Information</h2>
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div>
//                       <label htmlFor="profession" className="block text-sm font-medium text-gray-700 mb-1">
//                         Current Profession <span className="text-red-500">*</span>
//                       </label>
//                       <select
//                         id="profession"
//                         name="profession"
//                         value={formData.profession}
//                         onChange={handleChange}
//                         required
//                         className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
//                       >
//                         <option value="">Select Profession</option>
//                         {professionOptions.map((prof) => (
//                           <option key={prof} value={prof}>{prof}</option>
//                         ))}
//                       </select>
//                     </div>
                    
//                     <div>
//                       <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-1">
//                         Organization/Company <span className="text-red-500">*</span>
//                       </label>
//                       <input
//                         id="organization"
//                         name="organization"
//                         type="text"
//                         value={formData.organization}
//                         onChange={handleChange}
//                         required
//                         className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
//                       />
//                     </div>
                    
//                     <div>
//                       <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700 mb-1">
//                         LinkedIn Profile URL
//                       </label>
//                       <input
//                         id="linkedin"
//                         name="linkedin"
//                         type="url"
//                         value={formData.linkedin}
//                         onChange={handleChange}
//                         className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
//                       />
//                     </div>
                    
//                     <div>
//                       <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-1">
//                         Personal/Company Website
//                       </label>
//                       <input
//                         id="website"
//                         name="website"
//                         type="url"
//                         value={formData.website}
//                         onChange={handleChange}
//                         className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
//                       />
//                     </div>
//                   </div>
//                 </div>
                
//                 {/* Skills Section */}
//                 <div className="bg-white p-6 rounded-lg border border-gray-200">
//                   <h2 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">Skills & Expertise</h2>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       Skills (Select Multiple) <span className="text-red-500">*</span>
//                     </label>
//                     <Select
//                       isMulti
//                       name="skills"
//                       options={skillOptions.map((skill) => ({ label: skill, value: skill }))}
//                       className="basic-multi-select"
//                       classNamePrefix="select"
//                       onChange={(selected) => {
//                         const selectedValues = selected.map((s) => s.value);
//                         setSelectedSkills(selectedValues);
//                       }}
//                     />
//                     {selectedSkills.includes('Others') && (
//                       <div className="mt-3">
//                         <label htmlFor="otherSkill" className="block text-sm font-medium text-gray-700 mb-1">
//                           Please specify other skills
//                         </label>
//                         <input
//                           id="otherSkill"
//                           type="text"
//                           value={otherSkill}
//                           onChange={(e) => setOtherSkill(e.target.value)}
//                           className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
//                         />
//                       </div>
//                     )}
//                   </div>
                  
//                   <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
//                     <label className="block text-sm font-medium text-gray-700 mb-3">
//                       Will you be able to deliver a talk or conduct an interaction session (Online/offline) with your alma mater's students to guide them in their careers and employment? <span className="text-red-500">*</span>
//                     </label>
//                     <div className="flex space-x-6">
//                       <label className="flex items-center space-x-2 cursor-pointer">
//                         <input
//                           type="radio"
//                           name="sessionConsent"
//                           value="Yes"
//                           checked={formData.sessionConsent === 'Yes'}
//                           onChange={handleChange}
//                           required
//                           className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
//                         />
//                         <span className="text-gray-700">Yes</span>
//                       </label>
//                       <label className="flex items-center space-x-2 cursor-pointer">
//                         <input
//                           type="radio"
//                           name="sessionConsent"
//                           value="No"
//                           checked={formData.sessionConsent === 'No'}
//                           onChange={handleChange}
//                           className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
//                         />
//                         <span className="text-gray-700">No</span>
//                       </label>
//                     </div>
//                   </div>
//                 </div>
                
//                 {/* Photo Upload Section */}
//                 <div className="bg-white p-6 rounded-lg border border-gray-200">
//                   <h2 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">Photo Upload</h2>
//                   <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
//                     <div className="space-y-1 text-center">
//                       <svg
//                         className="mx-auto h-12 w-12 text-gray-400"
//                         stroke="currentColor"
//                         fill="none"
//                         viewBox="0 0 48 48"
//                         aria-hidden="true"
//                       >
//                         <path
//                           d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
//                           strokeWidth={2}
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                         />
//                       </svg>
//                       <div className="flex text-sm text-gray-600 justify-center">
//                         <label
//                           htmlFor="photo-upload"
//                           className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
//                         >
//                           <span>Upload a file</span>
//                           <input
//                             id="photo-upload"
//                             name="photo"
//                             type="file"
//                             accept="image/*"
//                             onChange={handleFileChange}
//                             required
//                             className="sr-only"
//                           />
//                         </label>
//                         <p className="pl-1">or drag and drop</p>
//                       </div>
//                       <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
//                       {formData.photo && (
//                         <p className="text-sm text-green-600 mt-2">
//                           Selected: {formData.photo.name}
//                         </p>
//                       )}
//                     </div>
//                   </div>
//                 </div>
                
//                 {/* Submit Section */}
//                 <div className="flex justify-end pt-4">
//                   <button
//                     type="button"
//                     className="px-6 py-3 mr-4 bg-white border border-gray-300 rounded-md text-gray-700 font-medium shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//                   >
//                     Save as Draft
//                   </button>
//                   <button
//                     type="submit"
//                     disabled={isSubmitting}
//                     className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-75"
//                   >
//                     {isSubmitting ? 'Submitting...' : 'Complete Registration'}
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
        
//         {/* Footer */}
//         <div className="mt-8 text-center text-sm text-gray-500">
//           <p>© {new Date().getFullYear()} University Alumni Association. All rights reserved.</p>
//           <p className="mt-1">Thank you for registering with your alma mater. Your information helps us build a stronger alumni community.</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;




import React, { useState } from 'react';
import axios from 'axios';
import Select from 'react-select';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    fathername: '',
    email: '',
    phone: '',
    course: '',
    batch: '',
    address: '',
    linkedin: '',
    profession: '',
    organization: '',
    website: '',
    photo: null,
    sessionConsent: '',
  });

  const [selectedSkills, setSelectedSkills] = useState([]);
  const [otherSkill, setOtherSkill] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const batchOptions = [
    ...Array.from({ length: 23 }, (_, i) => {
      const start = 1998 + i;
      return { label: `${start}-${start + 3}`, value: `${start}-${start + 3}` };
    }),
    ...Array.from({ length: 6 }, (_, i) => {
      const start = 2020 + i;
      return { label: `${start}-${start + 2}`, value: `${start}-${start + 2}` };
    }),
  ];

  const courseOptions = ['BCA', 'MCA', 'B.TECH', 'M.TECH', 'PHD'];
  const professionOptions = [
    'Trainee', 'Govt Job', 'Own Business', 'Internship', 'Teacher/Professor',
    'Full Stack Developer', 'Data Scientist', 'Cybersecurity Analyst', 'Network Engineer',
    'Cloud Security Expert', 'DevOps Engineer', 'Research Scientist', 'IT Consultant',
    'System Administrator', 'Blockchain Developer'
  ];

  const skillOptions = [
    'Python', 'C', 'C++', 'Java', 'JavaScript', 'PHP', 'SQL', 'Power BI',
    'MERN Stack', 'MEAN Stack', 'Full Stack Developer',
    'AI', 'ML', 'DL', 'CN',
    'Java & Spring Boot', 'Microservices Architecture', 'Cloud-Native Apps',
    'Team Lead - Quality Assurance', 'Scrum Master',
    'UI/UX & Design', 'Front-End Development', 'Mobile App Development',
    'Cloud & Security', 'Database Management & Backend Development',
    'Others'
  ];

  // Form field groups for better organization
  const personalFields = [
    { name: 'name', label: 'Full Name', required: true },
    { name: 'fathername', label: 'Father\'s Name', required: true },
    { name: 'email', label: 'Email Address', required: true, type: 'email' },
    { name: 'phone', label: 'Phone Number', required: true, type: 'tel' },
  ];

  const academicFields = [
    { name: 'course', label: 'Course', required: true, type: 'select', options: courseOptions },
    { name: 'batch', label: 'Batch', required: true, type: 'select', options: batchOptions.map(b => ({ label: b.label, value: b.value })) },
  ];

  const professionalFields = [
    { name: 'profession', label: 'Current Profession', required: true, type: 'select', options: professionOptions },
    { name: 'organization', label: 'Organization/Company', required: true },
    { name: 'linkedin', label: 'LinkedIn Profile URL', required: false },
    { name: 'website', label: 'Personal/Company Website', required: false },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, photo: e.target.files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const data = new FormData();

    for (const key in formData) {
      data.append(key, formData[key]);
    }

    data.append('skills', JSON.stringify(selectedSkills));
    if (selectedSkills.includes('Others')) {
      data.append('otherSkill', otherSkill);
    }

    try {
      await axios.post('http://localhost:5000/api/alumni', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Successfully registered as alumni!');
      // Reset form or redirect here
    } catch (err) {
      console.error('Upload Error:', err.response?.data || err.message);
      alert('Registration failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Reusable form components with enhanced styling
  const FormSection = ({ title, children, color }) => (
    <div className="mb-6">
      <h3 className={`text-lg font-bold ${color} mb-3 pb-2 border-b border-purple-200`}>{title}</h3>
      <div className="grid grid-cols-1 gap-4">
        {children}
      </div>
    </div>
  );

  const TextInput = ({ name, label, required, type = 'text' }) => (
    <div className="mb-2">
      <label htmlFor={name} className="block text-sm font-medium text-indigo-800 mb-1">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={formData[name]}
        onChange={handleChange}
        required={required}
        className="w-full px-3 py-2 border border-purple-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white"
      />
    </div>
  );

  const SelectInput = ({ name, label, required, options }) => (
    <div className="mb-2">
      <label htmlFor={name} className="block text-sm font-medium text-indigo-800 mb-1">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <select
        id={name}
        name={name}
        value={formData[name]}
        onChange={handleChange}
        required={required}
        className="w-full px-3 py-2 border border-purple-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white"
      >
        <option value="">Select {label}</option>
        {options.map((option) => (
          <option key={typeof option === 'object' ? option.value : option} value={typeof option === 'object' ? option.value : option}>
            {typeof option === 'object' ? option.label : option}
          </option>
        ))}
      </select>
    </div>
  );

  const TextareaInput = ({ name, label, required }) => (
    <div className="mb-2">
      <label htmlFor={name} className="block text-sm font-medium text-indigo-800 mb-1">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <textarea
        id={name}
        name={name}
        value={formData[name]}
        onChange={handleChange}
        required={required}
        rows={3}
        className="w-full px-3 py-2 border border-purple-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white"
      ></textarea>
    </div>
  );

  // Custom styles for react-select
  const customSelectStyles = {
    control: (styles) => ({
      ...styles,
      borderColor: '#ddd6fe',
      boxShadow: 'none',
      '&:hover': {
        borderColor: '#a78bfa'
      }
    }),
    option: (styles, { isSelected }) => ({
      ...styles,
      backgroundColor: isSelected ? '#6d28d9' : null,
      '&:hover': {
        backgroundColor: !isSelected ? '#ede9fe' : null
      }
    }),
    multiValue: (styles) => ({
      ...styles,
      backgroundColor: '#ede9fe'
    }),
    multiValueLabel: (styles) => ({
      ...styles,
      color: '#5b21b6'
    }),
    multiValueRemove: (styles) => ({
      ...styles,
      '&:hover': {
        backgroundColor: '#a78bfa',
        color: 'white'
      }
    })
  };

  return (
    <div className=" bg-gradient-to-br from-purple-50 to-indigo-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-indigo-800 mb-6">Alumni Registration</h1>
        <p className="text-center text-indigo-600 mb-8">Connect with your alma mater and fellow alumni</p>
        
        <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-purple-100">
          <div className="flex flex-col lg:flex-row">
            {/* Left side illustration */}
            <div className="w-full lg:w-2/5 bg-gradient-to-br from-indigo-500 to-purple-600 p-8 flex flex-col justify-center items-center text-white">
              <div className="mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="350" viewBox="0 0 800 800" className="max-w-md">
                  <g transform="translate(0,0)">
                    {/* Background elements */}
                    <circle cx="110" cy="400" r="15" fill="rgba(255,255,255,0.1)" />
                    <circle cx="220" cy="200" r="25" fill="rgba(255,255,255,0.1)" />
                    <circle cx="550" cy="450" r="20" fill="rgba(255,255,255,0.1)" />
                    <circle cx="300" cy="500" r="35" fill="rgba(255,255,255,0.05)" />
                    <path d="M150,150 L200,100 L250,150" stroke="rgba(255,255,255,0.2)" strokeWidth="2" fill="none" />
                    <path d="M500,400 L550,350 L600,400" stroke="rgba(255,255,255,0.2)" strokeWidth="2" fill="none" />
                    
                    {/* Person illustration */}
                    <g transform="translate(225, 150)">
                      {/* Body */}
                      <rect x="100" y="150" width="150" height="250" fill="#4f46e5" rx="20" />
                      
                      {/* Head */}
                      <circle cx="175" cy="100" r="50" fill="#fcd34d" />
                      <path d="M150,90 Q175,120 200,90" stroke="#1e3a8a" strokeWidth="3" fill="none" />
                      <circle cx="160" cy="80" r="5" fill="#1e3a8a" />
                      <circle cx="190" cy="80" r="5" fill="#1e3a8a" />
                      
                      {/* Hair */}
                      <path d="M125,80 Q140,40 175,40 Q210,40 225,80" fill="#1e3a8a" />
                      <path d="M125,80 Q175,100 225,80 L225,70 Q175,90 125,70 Z" fill="#1e3a8a" />
                      
                      {/* Arms */}
                      <rect x="50" y="170" width="60" height="20" fill="#fcd34d" rx="10" transform="rotate(-30,50,170)" />
                      <rect x="40" y="200" width="80" height="30" fill="#93c5fd" rx="15" transform="rotate(-30,40,200)" />
                      
                      <rect x="240" y="170" width="60" height="20" fill="#fcd34d" rx="10" transform="rotate(30,300,170)" />
                      <rect x="230" y="200" width="80" height="30" fill="#93c5fd" rx="15" transform="rotate(30,310,200)" />
                      
                      {/* Laptop */}
                      <rect x="90" y="220" width="120" height="80" fill="#1e3a8a" rx="5" />
                      <rect x="95" y="225" width="110" height="70" fill="#93c5fd" rx="3" />
                      <rect x="80" y="300" width="140" height="10" fill="#1e3a8a" rx="5" />

                      {/* Screen elements */}
                      <rect x="110" y="235" width="80" height="10" fill="#6366f1" rx="2" />
                      <rect x="110" y="250" width="60" height="10" fill="#6366f1" rx="2" />
                      <rect x="110" y="265" width="75" height="10" fill="#6366f1" rx="2" />
                      <rect x="110" y="280" width="45" height="10" fill="#6366f1" rx="2" />
                      
                      {/* Legs */}
                      <rect x="120" y="400" width="40" height="100" fill="#4f46e5" rx="10" />
                      <rect x="190" y="400" width="40" height="100" fill="#4f46e5" rx="10" />
                      
                      {/* Shoes */}
                      <rect x="110" y="490" width="60" height="20" fill="#1e3a8a" rx="10" />
                      <rect x="180" y="490" width="60" height="20" fill="#1e3a8a" rx="10" />
                    </g>
                  </g>
                </svg>
              </div>
              
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">Welcome Back, Alumni!</h2>
                <p className="text-indigo-100 mb-2">A central hub where alumni can connect, network, and share their journey.</p>
                <p className="text-indigo-100">Join our growing community and stay connected with your alma mater.</p>
              </div>
            </div>
            
            {/* Right side form */}
            <div className="w-full lg:w-3/5 p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <FormSection title="Personal Information" color="text-indigo-700">
                  {personalFields.map((field) => (
                    <TextInput key={field.name} {...field} />
                  ))}
                  <TextareaInput 
                    name="address" 
                    label="Full Address" 
                    required={true} 
                  />
                </FormSection>

                {/* Academic Information */}
                <FormSection title="Academic Information" color="text-purple-700">
                  {academicFields.map((field) => (
                    field.type === 'select' 
                      ? <SelectInput key={field.name} {...field} />
                      : <TextInput key={field.name} {...field} />
                  ))}
                </FormSection>

                {/* Professional Information */}
                <FormSection title="Professional Information" color="text-indigo-700">
                  {professionalFields.map((field) => (
                    field.type === 'select' 
                      ? <SelectInput key={field.name} {...field} />
                      : <TextInput key={field.name} {...field} />
                  ))}
                </FormSection>

                {/* Skills */}
                <FormSection title="Skills & Expertise" color="text-purple-700">
                  <div>
                    <label className="block text-sm font-medium text-indigo-800 mb-1">
                      Skills (Select Multiple) <span className="text-red-500">*</span>
                    </label>
                    <Select
                      isMulti
                      name="skills"
                      options={skillOptions.map((skill) => ({ label: skill, value: skill }))}
                      className="basic-multi-select"
                      classNamePrefix="select"
                      styles={customSelectStyles}
                      onChange={(selected) => {
                        const selectedValues = selected.map((s) => s.value);
                        setSelectedSkills(selectedValues);
                      }}
                    />
                    {selectedSkills.includes('Others') && (
                      <input
                        type="text"
                        placeholder="Please specify other skills"
                        value={otherSkill}
                        onChange={(e) => setOtherSkill(e.target.value)}
                        className="w-full mt-2 px-3 py-2 border border-purple-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white"
                      />
                    )}
                  </div>
                </FormSection>

                {/* Session Consent */}
                <div className="p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg mb-4 border border-purple-100 shadow-sm">
                  <label className="block text-sm font-medium text-indigo-800 mb-3">
                    Will you be able to deliver a talk or conduct an interaction session with your alma mater's students? <span className="text-red-500">*</span>
                  </label>
                  <div className="flex space-x-6">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="sessionConsent"
                        value="Yes"
                        checked={formData.sessionConsent === 'Yes'}
                        onChange={handleChange}
                        required
                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-purple-300"
                      />
                      <span className="text-indigo-700">Yes</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="sessionConsent"
                        value="No"
                        checked={formData.sessionConsent === 'No'}
                        onChange={handleChange}
                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-purple-300"
                      />
                      <span className="text-indigo-700">No</span>
                    </label>
                  </div>
                </div>

                {/* Photo Upload */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-indigo-800 mb-1">
                    Profile Photo <span className="text-red-500">*</span>
                  </label>
                  <div className="mt-1 flex justify-center px-4 pt-3 pb-4 border-2 border-purple-200 border-dashed rounded-md bg-purple-50 hover:bg-purple-100 transition-colors duration-200">
                    <div className="space-y-1 text-center">
                      <svg
                        className="mx-auto h-10 w-10 text-indigo-400"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                      >
                        <path
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div className="flex text-xs text-indigo-600 justify-center">
                        <label
                          htmlFor="photo-upload"
                          className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500 px-3 py-1 border border-indigo-200 shadow-sm"
                        >
                          <span>Upload a file</span>
                          <input
                            id="photo-upload"
                            name="photo"
                            type="file"
                            accept="image/*"
                            onChange={handleFileChange}
                            required
                            className="sr-only"
                          />
                        </label>
                        <p className="pl-1 flex items-center">or drag and drop</p>
                      </div>
                      <p className="text-xs text-indigo-500">PNG, JPG, GIF up to 10MB</p>
                      {formData.photo && (
                        <p className="text-xs text-green-600 font-medium">
                          Selected: {formData.photo.name}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-md shadow-md hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-75 disabled:cursor-not-allowed transition-all duration-150 transform hover:-translate-y-0.5"
                  >
                    {isSubmitting ? 'Submitting...' : 'Register as Alumni'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        
        {/* Footer */}
     
      </div>
    </div>
  );
};

export default Register;