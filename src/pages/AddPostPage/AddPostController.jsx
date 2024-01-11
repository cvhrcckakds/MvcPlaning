import { useState } from "react";
import AddPostView from "./AddPostView";
import AddPostModel from "./AddPostModel";
import axiosInstance from "../../constants";
import { useNavigate } from "react-router-dom";


const AddPostController = () => {
  const formModel = new AddPostModel();
  const [form, setForm] = useState(formModel.state);
  //console.log(form);
  const navigate=useNavigate();

  //!key: hangi inputa yazıldığı bilgisi
  //!e(value):inputun içeriği için aldık
  const onInputChange = (key, e) => {
    // console.log(key, e);
    setForm({ ...form, [key]: e.target.value});
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(form)
    if(!form.user|| !form.text || !form.text){
      alert("Lütfen tüm alanları doldurunuz!")
    }
   axiosInstance.post("posts", form).then((response)=>navigate("/"));
  };

  return (
    <AddPostView handleSubmit={handleSubmit} onInputChange={onInputChange} />
  );
};

export default AddPostController;
