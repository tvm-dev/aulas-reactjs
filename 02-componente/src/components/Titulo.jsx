function Titulo() {
    let nome = "Thiago Viana"
    const soma = 20 + 4;
    const urlImg = "https://static.cdnlogo.com/logos/r/21/react.svg"
    return (
        <div>
            <h1>Olá, eu sou um título replicado e me chamo {nome}! </h1>
            <img width={150} src={urlImg} />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae, quas iusto odio quisquam ducimus dolor similique, itaque assumenda perspiciatis reiciendis esse atque ipsam! Est dolorem nisi reiciendis repudiandae quis corporis. E a soma total é {soma}</p>
        </div>
    ) 
}

export default Titulo