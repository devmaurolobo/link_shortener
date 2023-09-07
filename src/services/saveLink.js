// Buscar links salvos
export async function getSaveLink(key){
    const myLinks = await localStorage.getItem(key);

    let linkSave = JSON.parse(myLinks) || [];

    return linkSave;
}

// Salvar um link no storage
export async function saveLink(key,newLink){
    let linksStorage = await getSaveLink(key);

//Se ja tiver um link no storage, não duplicar.
    const hasLink = linksStorage.some(link => link.id === newLink.id);

    if(hasLink){
        console.log('Esse link ja existe na sua lista!!!')
        return;
    }
//Adiconar Link na lista
    linksStorage.push(newLink)
    await localStorage.setItem(key,JSON.stringify(linksStorage))
    console.log('Link salvo com sucesso');
}
//Deletyar algum link salvo

export function deleteLink(Links, id) {
    let myLinks = Links.filter(item => {
        return item.id !== id;
    });

    localStorage.setItem('@encurtaLink', JSON.stringify(myLinks));
    console.log('Link deletado');

    return myLinks;
}
