export default function CardFilme() {
    return (
        <div className="w-[300px] h-[250px] flex flex-col rounded-lg bg-[#222222]">
            <div className="w-full h-[70%] rounded-t-lg">
                <img className="w-full h-full rounded-t-lg object-cover"
                    src="https://www.lifewire.com/thmb/frpuklJMIu2O1Vxc9e45zeo3e9E=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/MortalKombat-60d2d354d00b4020b7f5418753add2e9.jpg"
                    alt=""
                />
            </div>
            <div className="w-full h-[30%] flex flex-col pt-0 px-4">
                <p className="text-[15px] font-bold">Mortal Kombat</p>
                <p className="text-[15px] text-[#8a898c]">Edward J. Boon</p>
                <div className="w-full flex justify-between">
                    <p className="text-[15px] text-[#8a898c]">1964</p>
                    <div className="px-2 py-0 bg-[#8f7bd8]/10 text-[#8f7bd8] rounded-lg">Ação</div>
                </div>
            </div>
        </div>

    )

}