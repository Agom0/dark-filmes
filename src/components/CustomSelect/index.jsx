export default function CustomSelect({ label, options, onChange, value }) {
    return (
        <div className="w-full flex flex-col gap-2">
            <label className="text-[17px] font-bold">{label}</label>
            <select
            value={value}
                onChange={onChange}
                className="w-ful h-[45px] rounded-lg bg-[#141414] border-[#ffffff1a] focus:border-purple-400 outline-none">
                <option value="">Selecione...</option>
                {options.map((opcao) => {
                    return (
                        <option
                            key={opcao}
                            value={opcao}
                        >{opcao}</option>
                    )
                })}
            </select>
        </div>
    )
}