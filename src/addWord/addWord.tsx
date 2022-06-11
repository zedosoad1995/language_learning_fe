import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
import settings from '../settings.json'
const backend_api = settings['backend_api']


const schema = yup.object({
  original: yup.string().typeError('Must be a string').required('Field is required'),
  translation: yup.string().typeError('Must be a string').required('Field is required'),
  knowledge: yup.number()
                        .typeError('Must be a number')
                        .integer('Must be an integer')
                        .min(1, 'Min value is 1')
                        .max(5, 'Max value is 5')
                        .required('Field is required'),
  relevance: yup.number()
                        .typeError('Must be a number')
                        .integer('Must be an integer')
                        .min(1, 'Min value is 1')
                        .max(5, 'Max value is 5')
                        .required('Field is required'),
}).required()

function Input({ name, label, register, required }: any){
  return (
    <>
      <label>{label}</label>
      <input {...register(name, { required })} />
      <br></br>
    </>
  );
}

function AddWord() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });
  function onSubmit(data: any){
    axios.post(`${backend_api}/words/`, {
        user: 'http://127.0.0.1:8000/users/1/',
        original_word: data['original'],
        translated_word: data['translation'],
        knowledge: data['knowledge'],
        relevance: data['relevance'],
      })
    console.log(data);
  }

  return (
    <>
      <h1>New Word</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input name='original' label='Original' register={register} required />
        <Input name='translation' label='Translation' register={register} required />
        <Input name='knowledge' label='Knowledge (1-5)' register={register} required />
        <Input name='relevance' label='Relevance (1-5)' register={register} required />
        
        <input type='submit' />
      </form>
    </>
  );
}

export default AddWord;