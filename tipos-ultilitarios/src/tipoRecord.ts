type Carros = {
    ano: string,
    cor : string
}

type Prooriedades =  'fusca' | 'palio'

//A função record ele faz uma junção de propriedades para poder montar um objeto
const carros : Record<Prooriedades, Carros> = {
    fusca : {
        ano: '2022',
        cor : 'branco'
    },
    palio : {
        ano: '2022',
        cor : 'branco'
    }
}