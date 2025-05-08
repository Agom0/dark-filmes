import CardFilme from "@/components/CardFilme";
import PageWrapper from "@/components/PageWrapper";

export default function Home() {
  return (
  <PageWrapper> 
    <div className="w-full flex flex-col items-center justify-center pt-7">
      <h1 className="text-[40px] text-[#907cda] font-bold">Sua coleção de filmes</h1>
      <p className="text-[#8a898c] text-[20px]">Acompanhe seus filmes favoritos. Adicione novos filmes à sua coleção</p>
    </div>
    <div className="w-full h-auto flex flex-wrap justify-center">
     <CardFilme/>
    </div>
  </PageWrapper>
  )
}