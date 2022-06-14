import { Button } from "./components/Button";
import { ButtonMod } from "./components/ButtonMod";
import { ButtonModIG } from "./components/ButtonModIG";
import { useState } from "react";









export function App(){
  return  (
    <div className="flex flex-center justify-center items-center w-screen h-screen">
   <div className="w-96 p-6 bg-zinc-900 rounded-xl">
      
       
    <div className="h-32">
       <button className="pt-16 flex items-end justify-end text-green-600 p-5 text-2xl cursor-pointer">
       <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414 6.414a2 2 0 001.414.586H19a2 2 0 002-2V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586L3 12z" />
</svg>
           
      </button>       
     
    </div>
      
      
      <div className="flex flex-row space-x-1 mt-2">
      <ButtonMod props={'C'}/>
      <ButtonMod props={'()'}/>
      <ButtonMod props={'%'}/>
      <ButtonMod props={'/'}/>
      </div>
      

      <div className="flex flex-row space-x-1 mt-2">
      <Button props={7}/>
      <Button props={8}/>
      <Button props={9}/>
      <ButtonMod props={'x'}/>
      </div>
      
     

      <div className="flex flex-row space-x-1 mt-2">
      <Button props={4}/>
      <Button props={5}/>
      <Button props={6}/>
      <ButtonMod props={'-'}/>
      </div>
     

      <div className="flex flex-row space-x-1 mt-2">
      <Button props={1}/>
      <Button props={2}/>
      <Button props={3}/>
      <ButtonMod props={'+'}/>
      </div>
     
     


      <div className="flex flex-row space-x-1 mt-2">
      <Button props={'+/-'}/>
      <Button props={0}/>
      <Button props={'.'}/>
      <ButtonModIG props={'='}/>
      </div>
     
      

      </div>
    </div>
  )
}