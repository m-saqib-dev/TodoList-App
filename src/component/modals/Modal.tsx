
const modal = ({modal}:{modal:any}) => {
  return (
    <div className=' flex bg-opcity-rgba justify-center items-center text-white h-screen w-full fixed '>
        <div className='p-4 flex flex-col  text-white bg-slate-900 h-2/3 w-3/4'>
        <button type='button' className='p-2 self-end'>x</button>
          {modal}
        </div>
    </div>
  
  )
}

export default modal