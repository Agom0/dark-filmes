import CustomInput from "@/components/customInput";
import CustomSelect from "@/components/CustomSelect";
import Header from "@/components/Header";
import PageWrapper from "@/components/PageWrapper";

export default function Cadastrar() {
    return (
        <PageWrapper showButton={false}>
            <div className="w-full h-full py-[40px] px-[70px] flex flex-col">
                <h1 className="text-[30px] font-bold text-[#9A86F4]">Adicione um novo Filme</h1>
                <p className="text-[20px] text-gray-500">Preenha o formulário abaixo para adicionar um novo filme</p>
                <div className="w-full flex justify-center pt-[40px]">
                    <form className="w-[50%] h-auto min-h-[200px] bg-[#222222] rounded-2xl border border-[#3A364C] flex flex-col p-6 gap-4">
                        <CustomInput
                            label="Título"
                            placeholder="Dígite o título do filme"
                            type="text"
                        />
                        <CustomInput
                            label="Diretor"
                            placeholder="Dígite o nome do diretor"
                            type="text"
                        />
                        <div className="w-full flex gap-4">
                            <div className="w-[50%]">
                                <CustomInput
                                    label="Ano"
                                    placeholder="Digite o ano de lançamento"
                                    type="number"
                                />
                            </div>
                            <div className="w-[50%]">
                                <CustomSelect
                                    label="Gênero"
                                    options={[
                                        "Ação",
                                        "Comédia",
                                        "Drama",
                                        "Terror",
                                        "Ficção Científica",
                                        "Romance"
                                    ]}
                                />
                            </div>
                        </div>
                        <div className="w-[30%] items-center flex gap-2">
                            <div className="w-[70%]">
                                <CustomInput
                                    label="Nota"
                                    placeholder="0"
                                    type="Number"
                                />
                            </div>
                            <p className="flex mt-8">10 / 10</p>
                        </div>
                        <div className="w-full  flex flex-col gap-2">
                            <label className="text-[17px] font-bold">Sinópse</label>
                            <textarea 
                            className="w-full h-[150px] min-h-[150px] max-h-[150px] rounded-lg border border-[#ffffff1a]
                            focus:border-purple-400 p-2 bg-[#141414] 
                            outline-none"
                            ></textarea>
                        </div>
                        <CustomInput
                           label="Banner"
                           placeholder="URL da imagem"
                           type="text"
                        />
                        <div className="w-full flex justify-end gap-4">
                            <button type="reset" className="w-[100px] h-[50px] rounded-md bg-[#141414] border border-[#3a364c] cursor-pointer hover:bg-white/10">Cancelar</button>
                        </div>
                    </form>
                </div>
            </div>
        </PageWrapper>
    )
}