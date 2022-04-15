export default function blog(req, res){
    res.status(200).json([
        {message: 'Este blog esta sendo construido com o Nextjs, um poderoso framework desenvolvido em react, estou gostando muito do processo, atualmente estou desenvolvendo a api de posts e esta sendo bem simples agora vamos jogar para o front end'},
        {message: 'Para que serve o NextJS? Next. js é um framework para React. O que isso quer dizer? O React é uma biblioteca Javascript para construção de interfaces e o Next é considerado um framework pois adiciona várias funcionalidades em cima do React.'},
         ])
}