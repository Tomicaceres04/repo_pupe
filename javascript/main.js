const productos = [
    {
        id: "botas-01",
        titulo: "Botas 01",
        imagen: "./Img-venta/Botas_brillos.webp",
        categoria:{
            nombre: "Botas",
            id: "Botas"
        },
        precio: 5500
    },
    {    id: "botas-02",
        titulo: "Botas 02",
        imagen: "./Img-venta/botas-negras.jfif",
        categoria:{
            nombre: "Botas",
            id: "Botas"
        },
    precio: 5000
    },
    {id: "botas-03",
    titulo: "Botas 03",
    imagen: "./Img-venta/botas_lluvia_rosas.jpg",
    categoria:{
        nombre: "Botas",
        id: "Botas"
    },
    precio: 7000
    },
    
    {id: "botas-04",
    titulo: "Botas 04",
    imagen: "./Img-venta/botas__naranjas.jpg",
    categoria:{
        nombre: "Botas",
        id: "Botas"
    },
    precio: 5000
    },
    //Texanas
    {
        id: "Texanas-01",
        titulo: "Texanas 01",
        imagen: "./Img-venta/texanas_negra_cuero.jpg",
        categoria:{
            nombre: "Texanas",
            id: "Texanas"
            },
        precio: 5999
    },
    {    id: "Texanas-02",
        titulo: "Texanas 02",
        imagen: "./Img-venta/texanas_rosas.jpg",
        categoria:{
            nombre: "Texanas",
            id: "Texanas"
        },
    precio: 5000
    },
    {id: "Texanas-03",
    titulo: "Texanas 03",
    imagen: "./Img-venta/texanas_blancascielo.jpeg",
    categoria:{
        nombre: "Texanas",
        id: "Texanas"
    },
    precio: 5000
    },
    
    {id: "Texanas-04",
    titulo: "Texanas 04",
    imagen: "./Img-venta/zapatos_texanad.webp",
    categoria:{
        nombre: "Texanas",
        id: "Texanas"
    },
    precio: 6500
    },
    //Zapatillas
    {
        id: "Zapatillas-01",
        titulo: "Zapatillas 01",
        imagen: "./Img-venta/shoes_blanca-gris-rosa.webp",
        categoria:{
            nombre: "Zapatillas",
            id: "Zapatillas"
            },
        precio: 8000
    },
    {    id: "Zapatillas-02",
        titulo: "Zapatillas 02",
        imagen: "./Img-venta/zapas_street.jpg",
        categoria:{
            nombre: "Zapatillas",
            id: "Zapatillas"
        },
    precio: 10000
    },
    {id: "Zapatillas-03",
    titulo: "Zapatillas 03",
    imagen: "./Img-venta/zapas_gris.jpg",
    categoria:{
        nombre: "Zapatillas",
        id: "Zapatillas"
    },
    precio: 8000
    },
    
    {id: "Zapatillas-04",
    titulo: "Zapatillas 04",
    imagen: "./Img-venta/zapas_resorte_negra.jpg",
    categoria:{
        nombre: "Zapatillas",
        id: "Zapatillas"
    },
    precio: 8500
    },
    ]
    const contenedorProductos = document.querySelector("#contenedor-productos");
    
    function cargarProductos(){
    
        productos.forEach(producto => {
            
            const div = document.createElement("div");
            div.classList.add("producto");
            div.innerHTML = `
                <img src="${producto.imagen}" class="producto-imagen" alt="${producto.titulo}">
                    <div class="producto-detalles">
                        <h3 class=" text-center text__color producto-titulo">${producto.titulo}</h3>
                        <p class="precio text-center producto-precio">${producto.precio}</p>
                        <p class="precio__cou text-center">6 Cuotas sin interes de $1.000</p>
                        <button class="producto-agregar">AGREGAR</button>>
                    </div>
            `;
    
            contenedorProductos.append(div);
        });
    }
    
    cargarProductos();
