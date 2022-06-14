export function Button({props}) {
  return (
    <div>
       <div className="cursor-pointer h-10 w-10 p-10 flex flex-center items-center justify-center rounded-full bg-black text-white text-2xl font-bold">
        {props}
       </div>
    </div>
  )
}