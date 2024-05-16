export interface Catalogo {
    id: number,
    nombre: string,
    descripcion: string,
    precio: number,
    imagen: string,
}

export const productos = [
    {
        id: 1,
        nombre: "Frijoles",
        descripcion: "Frijo cargamanto 1kg",
        precio: 100,
        imagen: "https://picsum.photos/300/300?random=10"
    },
    {
        id: 2,
        nombre: "Leche",
        descripcion: "Leche descremada alqueria",
        precio: 200,
        imagen: "https://picsum.photos/300/300?random=20"
    },
    {
        id: 3,
        nombre: "Harina",
        descripcion: "Harina de trigo haz de oro",
        precio: 300,
        imagen: "https://picsum.photos/300/300?random=30"
    }
]