export function ButtonMod({props}) {
  return (
    <div>
       <div className="cursor-pointer h-10 w-10 p-10 flex flex-center items-center justify-center rounded-full bg-black text-green-600 text-2xl font-bold">
        {props}
       </div>
    </div>
  )
}