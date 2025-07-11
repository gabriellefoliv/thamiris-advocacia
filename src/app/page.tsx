import { LPBanner } from "@/components/LPBanner"
import { LPCallout } from "@/components/LPCallout"
import { LPCard } from "@/components/LPCard"
import { LPDuvidas } from "@/components/LPDuvidas"
import WppButton from "@/components/WppButton"

export default function Home() {
    return (
        <div className="min-h-screen w-full flex flex-col items-center px-4 sm:px-8 lg:px-16 gap-12 overflow-hidden">
           <LPBanner
                backgroundImageUrl="/advocacia-4k.jpg"
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
                    description="Quando uma pessoa falece e deixa dependentes, é possível solicitar a pensão por morte para garantir a segurança financeira daqueles que ficaram."
                />
            </div>
            <div className="w-full mx-auto px-4">
                <h1 className="text-center text-2xl font-bold mb-6">
                    Veja quem tem direito
                </h1>
                <div className="flex flex-wrap justify-center gap-6">
                    <LPCard title="Filhos" description="..." />
                    <LPCard title="Cônjuges" description="quando casados" />
                    <LPCard title="Companheiro" description="quando em União Estável" />
                    <LPCard title="Pais" description="na ausência do cônjuge/companheiro e filhos" />
                    <LPCard title="Irmãos" description="na falta dos anteriores" />
                </div>
                <WppButton
                    title="Converse com um especialista"
                />
            </div>
            <LPDuvidas.Root>
                <LPDuvidas.Item value="item-1" title="Eu não sei por onde começar. Tem alguém para me orientar?">
                    <p>
                    Our flagship product combines cutting-edge technology with sleek design...
                    </p>
                    <p>
                    Key features include advanced processing capabilities, and an intuitive interface...
                    </p>
                </LPDuvidas.Item>

                <LPDuvidas.Item value="item-2" title="Eu não tenho como comprovar a União Estável. Como eu faço?">
                    <p>
                    We offer worldwide shipping through trusted courier partners...
                    </p>
                    <p>
                    All orders are carefully packaged and fully insured...
                    </p>
                </LPDuvidas.Item>

                <LPDuvidas.Item value="item-3" title="Meu pedido foi negado há muito tempo, será que ainda tenho direito?">
                    <p>
                    We stand behind our products with a comprehensive 30-day return policy...
                    </p>
                    <p>
                    Our hassle-free return process includes free return shipping...
                    </p>
                </LPDuvidas.Item>
                <LPDuvidas.Item value="item-3" title="Meu filho e eu podemos receber?">
                    <p>
                    We stand behind our products with a comprehensive 30-day return policy...
                    </p>
                    <p>
                    Our hassle-free return process includes free return shipping...
                    </p>
                </LPDuvidas.Item>
                <LPDuvidas.Item value="item-3" title="Posso receber duas pensões do INSS?">
                    <p>
                    We stand behind our products with a comprehensive 30-day return policy...
                    </p>
                    <p>
                    Our hassle-free return process includes free return shipping...
                    </p>
                </LPDuvidas.Item>
                <LPDuvidas.Item value="item-3" title="Meu esposo/companheiro nunca trabalhou de carteira assinada, será que eu tenho direito?">
                    <p>
                    We stand behind our products with a comprehensive 30-day return policy...
                    </p>
                    <p>
                    Our hassle-free return process includes free return shipping...
                    </p>
                </LPDuvidas.Item>
            </LPDuvidas.Root>

        </div>
    )
}