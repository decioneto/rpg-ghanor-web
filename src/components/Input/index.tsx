type InputProps = {
  id: string
};

export function Input() {
  return (
    <div className="flex flex-col gap-2 w-[500px] relative">
      <label htmlFor="" className="absolute top-0 left-4 translate-y-[9px] text-ghanor-yellow-100 text-lg font-bold">Digite seu usuário</label>
      <input type="text" className="h-12 bg-ghanor-yellow-700 rounded px-4 text-ghanor-neutral-200 outline-none"/>
    </div>
  );
}