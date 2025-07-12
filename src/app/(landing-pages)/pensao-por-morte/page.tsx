import { LPBanner } from "@/components/LPBanner"
import { LPCallout } from "@/components/LPCallout"
import { LPCard } from "@/components/LPCard"
import { LPDuvidas } from "@/components/LPDuvidas"
import WppButton from "@/components/WppButton"

export default function PensaoPorMorte() {
    return (
        <div className="min-h-screen w-full flex flex-col items-center px-4 sm:px-8 lg:px-16 gap-12 overflow-hidden">
           <LPBanner
                backgroundImageUrl="/advocacia-6k.jpg"
                officeName="Thamiris F. de Oliveira Advocacia"
                description="Escritório Previdenciário Digital (INSS)"
            />
            <p className="text-center font-bold text-2xl">
                Nosso escritório irá analisar o seu caso com toda a cautela e atenção que ele merece, verificando se você tem direito à pensão por morte. Não deixe seu direito de lado - e muito menos o seu dinheiro nas mãos do governo.
            </p>
            <div className="bg-gray-50 py-10 px-4">
                <LPCallout
                    image="/tombstone.png"
                    title="Pensão por morte"
                    description="Perdeu alguém querido? Não perca também o seu direito à pensão por morte. Fale com quem entende do assunto!"
                />
            </div>
            <div className="w-full mx-auto px-4">
                <h1 className="text-center text-2xl font-bold mb-6">
                    Veja quem tem direito
                </h1>
                <div className="flex flex-wrap justify-center gap-6">
                    <LPCard title="Filhos" description="Filhos menores de 21 anos têm direito sem necessidade de comprovar dependência econômica. Filhos inválidos ou com deficiência (intelectual, mental ou grave) podem receber independentemente da idade, desde que a condição tenha surgido antes dos 21 anos ou da emancipação." />
                    <LPCard title="Cônjuges" description="Cônjuges são aqueles casados oficialmente no papel, com certidão de casamento registrada. Nessa condição, a lei os reconhece como dependentes preferenciais para fins de pensão por morte." />
                    <LPCard title="Companheiro" description="Quem viveu em União Estável, mesmo sem formalizar no papel, também tem direito à pensão por morte. A lei reconhece o companheiro como dependente, desde que a união possa ser comprovada por documentos ou testemunhas." />
                    <LPCard title="Pais" description="Os pais só têm direito à pensão por morte se o falecido não tiver deixado cônjuge, companheiro ou filhos. Além disso, é preciso comprovar dependência econômica total em relação ao segurado. Ou seja, o direito dos pais depende da situação e das provas apresentadas." />
                    <LPCard title="Irmãos" description="Os irmãos só têm direito à pensão por morte se o falecido não tiver deixado cônjuge, companheiro, filhos ou pais. Nesse caso, é necessário comprovar que dependiam economicamente do segurado, de forma total." />
                </div>
                <WppButton
                    title="Converse com um especialista"
                />
            </div>
            <LPDuvidas.Root>
                <LPDuvidas.Item value="item-1" title="Eu não sei por onde começar. Tem alguém para me orientar?">
                    <p>
                    Nesse caso, o ideal é entrar em contato com uma advogada especialista, que vai analisar sua situação e te orientar da forma correta, com segurança e clareza.
                    </p>
                </LPDuvidas.Item>

                <LPDuvidas.Item value="item-2" title="Eu não tenho como comprovar a União Estável. Como eu faço?">
                    <p>
                    O ideal é conversar com uma advogada especializada, que vai analisar seu caso e te orientar sobre as melhores formas de reunir as provas e garantir seu direito à pensão por morte.
                    </p>
                </LPDuvidas.Item>

                <LPDuvidas.Item value="item-3" title="Meu pedido foi negado há muito tempo, será que ainda tenho direito?">
                    <p>
                    Na grande maioria dos casos ainda é possível reverter a situação. Mas atenção: é de suma importância consultar uma advogada o quanto antes, pois prazos podem estar correndo e cada caso exige uma análise específica.
                    </p>
                </LPDuvidas.Item>
                <LPDuvidas.Item value="item-4" title="Meu filho e eu podemos receber?">
                    <p>
                    Depende do caso, mas se houver direito, sim, é possível que tanto você quanto seu filho recebam. Não se preocupe em perder a pensão do seu filho — quando há previsão legal, ambos podem receber sem prejuízo um do outro.
                    </p>
                </LPDuvidas.Item>
                <LPDuvidas.Item value="item-5" title="Posso receber duas pensões do INSS?">
                    <p>
                    Não é permitido receber duas pensões por morte pelo INSS ao mesmo tempo. Nesses casos, o INSS deve conceder apenas a mais vantajosa, ou seja, a que garante o maior valor ao dependente.
                    </p>
                </LPDuvidas.Item>
                <LPDuvidas.Item value="item-6" title="Meu esposo/companheiro nunca trabalhou de carteira assinada, será que eu tenho direito?">
                    <p>
                    Infelizmente, se seu esposo nunca contribuiu para o INSS, não há direito à pensão por morte. Mas é sempre bom consultar uma advogada, pois se houver alguma contribuição registrada no CNIS, mesmo que poucas, pode ser possível sim garantir o benefício.
                    </p>
                </LPDuvidas.Item>
            </LPDuvidas.Root>

        </div>
    )
}