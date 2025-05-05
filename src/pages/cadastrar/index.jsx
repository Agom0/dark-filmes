import Header from "@/components/Header";
import PageWrapper from "@/components/PageWrapper";

export default function Cadastrar() {
    return (
    <PageWrapper showButton={false}>
    <div className="w-full h-full py-[40px] px-[70px] flex flex-col">
        <h1 className="text-[30px] font-bold text-[#9A86F4]">Adicione um novo Filme</h1>
        <p className="text-[20px] text-gray-500">Preenha o formulário abaixo para adicionar um novo filme</p>
        <div className="w-full flex justify-center pt-[40px]">
            <form className="w-[50%] h-auto min-h-[200px] bg-[#222222] rounded-2xl border border-[#3A364C] flex flex-col p-3"></form>
        </div>
    </div>
    </PageWrapper>
    )
}