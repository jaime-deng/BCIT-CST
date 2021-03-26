import {useState} from "react";

const useForm = () =>{
    const [studentInfo, setStudentInfo] = useState({
        firstname: '',
        lastname: '',
        prefername: '',
        studentid: '',
        email: '',
        set: 'A',
        
    
      })
      // nameError: "Name must be Alphabetical letters and minimum 2 letters",
      // idError: "Must begin with A0, and have 7 numbers afterwards",
      // emailError: "Must end with @my.bcit.ca or @bcit.ca",
      // setError: "Must select a set"
      function handleError(event) {
          const {name, value2} = event.target;
        setStudentInfo({ ...studentInfo, [name]: value2 })
      }
      const [errors, setErrors] = useState({})
    return {handleChange, studentInfo};
};

export default useForm;