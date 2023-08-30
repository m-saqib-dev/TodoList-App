import Form from './Form'

const FormConnected = () => {
    const handleSubmit=(title:string,todo:string)=>{
        console.log(title+todo)
    }
  return (
    <>
        <Form onSubmit={handleSubmit}/>
    </>
  )
}

export default FormConnected